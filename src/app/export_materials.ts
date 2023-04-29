
interface DrawingComponent {
  id: number,
  windowId: number,
  type: 'connector' | 'windowComponent',
  description: string,
  medidas: string
  angulosCorte: string,
  object: any,
}

export const exportMaterials = (webcc: any) => {
  //console.log(this.webcc.shapeManager.toNoDimData());

  /// Listado de componentes que componen las figuras dibujadas
  const components: DrawingComponent[] = [];

  console.log(webcc.dimManager.visualIDimInfos);

  /// Parseo los conectores
  webcc.shapeManager.couples.forEach((couple) => {
    components.push(parseConnector(couple));
  });

  /// Array de todos los children que componen las figuras
  const children: any[] = [];
  webcc.shapeManager.shapem.forEach((frame) => children.push(...flatChildren(frame.children)));

  //console.log(children);

  /// Parseo los componentes de las ventanas

  children.forEach((child) => {
    if (child.type === 'Bar') {
      components.push(parseBar(child));
    }

    if (child.type === 'Glass') {
      components.push(parseGlass(child));
    }
  });


  console.table(components);
};


/// Descompone los hijos de un elemento en un array, funcion recursiva
const flatChildren = (children: any[]): any[] => {
  const result: any[] = [];

  children.forEach((child) => {
    result.push(child);

    if (child.children?.length > 0) {
      result.push(...flatChildren(child.children));
    }
  });

  return result;
}


const parseBar = (bar: any): DrawingComponent => {
  return {
    id: bar.id,
    windowId: bar.topFrame.id,
    description: bar.parent.type === 'Frame'
      ? 'Perfil'
      : bar.parent.type === 'Bead'
        ? 'Junquillo'
        : bar.parent.type === 'Sash'
          ? 'PerfilPuerta Sash'
          : 'Unrecognized: ' + bar.parent.type,
    type: 'windowComponent',
    medidas:
      Math.round(bar.polygon.mulShape.length) + ' x ' + Math.round(bar.width),
    angulosCorte: bar.cutAngle,
    object: bar,
  };
}

const parseGlass = (glass: any): DrawingComponent => {
  return {
    id: glass.id,
    windowId: glass.topFrame.id,
    type: 'windowComponent',
    description: 'Vidrio',
    medidas:
      Math.round(glass.polygon.box.xmax - glass.polygon.box.xmin) +
      ' x ' +
      Math.round(glass.polygon.box.ymax - glass.polygon.box.ymin),
    angulosCorte: '',
    object: glass,
  };
}

const parseConnector = (connector: any): DrawingComponent => {
  return {
    id: connector.id,
    windowId: connector.parent.id,
    type: 'connector',
    description: 'Conector',
    medidas:
      Math.round(connector.polygon.mulShape.length) +
      ' x ' +
      Math.round(connector.size),
    angulosCorte: connector.cutAngle,
    object: connector,
  };
}