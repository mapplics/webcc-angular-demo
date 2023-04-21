import { Component } from '@angular/core';
import * as webcclib from 'webcc';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-demo';

  mousePos = { x: 0, y: 0 };

  webcc: any;

  display = 2;

  ngAfterViewInit() {
    this.webcc = new webcclib.Runtime('eyJuYW1lIjoiUmhpbm8iLCJzdG0iOjE2Njc0MzM2MDAwMDAsImV4cCI6MTY5OTA1NjAwMDAwMCwibGl0ZSI6ZmFsc2V9.f923c735ceba1c42e678b3586ea37fde');


    // set
    this.webcc.shapeManager.profileSize = {
      frame: 250,
      frameMullion: 100,
      glassGap: 50,
      bead: 20,
    }

    //console.log(this.webcc.angulosCorte);
    this.webcc.shapeManager.shapeMode = 'order';
    this.webcc.shapeManager.view.langMode = 'en-US';
    this.webcc.eventBus.getMainStream().subscribe(e => console.log(e));

    console.log(this.webcc);
  }

  onToolChange(tool: string) {
    this.webcc!.toolManager.takeTool(tool);
  }

  clear() {
    this.webcc!.shapeManager.clear(true);
  }

  undo() {
    this.webcc!.mometoManager.undo();
  }

  redo() {
    this.webcc!.mometoManager.redo();
  }

  delete() {
    this.webcc!.shapeManager.remove();
  }

  // loop through three display modes
  //  'normal','calculate','order'
  changeDisplay() {
    this.display = (this.display + 1) % 3;

    switch (this.display) {
      case 0: this.webcc.shapeManager.shapeMode = 'order';
        break;
      case 1: this.webcc.shapeManager.shapeMode = 'calculate';
        break;
      default:
      case 2: this.webcc.shapeManager.shapeMode = 'normal';
        break;
    }
  }

  export() {
    //console.log(this.webcc.shapeManager.toNoDimData());

    const components: any[] = [];
    console.log(this.webcc.dimManager.dims);

    /// Conectores
    this.webcc.shapeManager.couples.forEach(couple => {

      components.push({
        id: couple.id,
        tipo: 'Conector',
        medidas: Math.round(couple.polygon.mulShape.length) + ' x ' + Math.round(couple.size),
        angulosCorte: couple.cutAngle,
      });
    });

    
    /// Ventanas
    this.webcc.shapeManager.shapem.forEach(frame => {

        
      frame.children.forEach(child => {
        if (child.type !== 'Bar' && child.type !== 'Glass' && child.type !== 'Slide') return;

        if (child.type === 'Bar') {
          components.push(this.parseBar(child, 'Perfil'));
        }

        if (child.type === 'Glass') {
          components.push(this.parseGlass(child, 'Vidrio'));

          child.bead.children.forEach(bead => {
            components.push(this.parseBar(bead, 'MarcoVidrio'));
          });
        }

        if (child.type === 'Slide') {

          child.children.forEach(sash => {
            if (sash.type !== 'Sash') return;

            sash.children.forEach(sashChild => {
              if (sashChild.type !== 'Bar' && sashChild.type !== 'Glass' && sashChild.type !== 'Handle') return;

              if (sashChild.type === 'Bar') {
                components.push(this.parseBar(sashChild, 'PerfilPuerta'));
              }

              if (sashChild.type === 'Glass') {
                components.push(this.parseGlass(sashChild, 'Vidrio'));

                sashChild.bead.children.forEach(bead => {
                  components.push(this.parseBar(bead, 'MarcoVidrio'));
                });
              }

              if (sashChild.type === 'Handle') {
                if (sashChild.hidden) return;
                components.push({
                  id: sashChild.id,
                  tipo: 'Manija',
                  medidas: '-',
                  angulosCorte: '-',
                });
              }
            });

          });
        }

      });
    });

    console.table(components);
  }


  parseBar(bar: any, name: string) {
    return {
      id: bar.id,
      tipo: name,
      medidas: Math.round(bar.polygon.mulShape.length) + ' x ' + Math.round(bar.width),
      angulosCorte: bar.cutAngle,
    };
  }


  parseGlass(glass: any, name: string) {
    return {
      id: glass.id,
      tipo: name,
      medidas: Math.round(glass.polygon.box.xmax - glass.polygon.box.xmin) + ' x ' + Math.round(glass.polygon.box.ymax - glass.polygon.box.ymin),
      angulosCorte: '',
    };
  }

  print() {
    console.log(this.webcc.dimManager);
    debugger;
    //let compiler = new Compiler();

    //compiler.pushKey(key, value);

    //this.webcc.dimManager.visualDimInfos.foreach((v) => { compiler.pushKey(v.name, v.value) });

    // bar_result = script_bar.map((v) => {
    //   return { name: compiler.parseString(v.name), color: compiler.parseString(v.color), length: compiler.parseNumber(v.length) }
    // });
    // glass_result = script_glass.map((v) => {
    //   return { width: compiler.parseNumber(v.width), height: compiler.parseNumber(v.height), count: compiler.parseNumber(v.count) }
    // });
    // addon_result = script_addon.map((v) => {
    //   return { count: compiler.parseNumber(v.count) }
    // });

    //console.log(compiler);
  }

  setMousePos() {
    this.mousePos = {
      x: Math.round(this.webcc.toolManager.mousePosition.x),
      y: Math.round(this.webcc.toolManager.mousePosition.y)
    };
  }
}
