import { Component } from '@angular/core';
import * as webcclib from 'webcc';


interface DrawingComponent {
  id: number,
  windowId: number,
  type: 'connector' | 'windowComponent',
  description: string,
  medidas: string
  angulosCorte: string,
  object: any,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-demo';

  mousePos = { x: 0, y: 0 };

  webcc: any;

  display = 2;

  ngAfterViewInit() {
    this.webcc = new webcclib.Runtime(
      'eyJuYW1lIjoiUmhpbm8iLCJzdG0iOjE2Njc0MzM2MDAwMDAsImV4cCI6MTY5OTA1NjAwMDAwMCwibGl0ZSI6ZmFsc2V9.f923c735ceba1c42e678b3586ea37fde'
    );

    // set
    this.webcc.shapeManager.profileSize = {
      frame: 50,
      frameMullion: 100,
      glassGap: 50,
      bead: 20,
    };

    //console.log(this.webcc.angulosCorte);
    this.webcc.shapeManager.shapeMode = 'order';
    this.webcc.shapeManager.view.langMode = 'en-US';
    this.webcc.eventBus.getMainStream().subscribe((e) => {
      console.log(e);

      if (e.type == 'note_settings') {
        debugger;
      }
    });

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

  importWindowS60() {
    //const win = '{"sm":[{"uid":1,"type":"Frame","ps":{"f":60,"fm":90,"sa":60,"usa":60,"dsa":60,"il":60,"sc":60,"sm":60,"kw":200,"b":15,"a":24,"am":45,"mf":5,"ms":5,"gg":6},"polygon":{"type":"polygon","spLine":{"polyId":{"idx":-1,"pos":-1},"startSplit":false,"endSplit":false,"equalSplit":0,"ss":false,"es":false,"sFd":false,"eFd":false,"alignType":0,"reinforced":false},"polygon":[[{"ps":{"x":-4131.61490031858,"y":397.1893562882492,"name":"point"},"pe":{"x":-4131.61490031858,"y":1997.1893562882492,"name":"point"},"name":"segment"},{"ps":{"x":-4131.61490031858,"y":1997.1893562882492,"name":"point"},"pe":{"x":-1731.61490031858,"y":1997.1893562882492,"name":"point"},"name":"segment"},{"ps":{"x":-1731.61490031858,"y":1997.1893562882492,"name":"point"},"pe":{"x":-1731.61490031858,"y":397.1893562882492,"name":"point"},"name":"segment"},{"ps":{"x":-1731.61490031858,"y":397.1893562882492,"name":"point"},"pe":{"x":-4131.61490031858,"y":397.1893562882492,"name":"point"},"name":"segment"}]],"virtual":false},"fm":{"ejw":[0,0,0,0],"ew":[60,60,60,60]},"mm":{"sp":[],"fls":{"fls":[]},"lpfs":[],"dbs":{"bars":[]}},"sm":[{"type":"Sash","polyId":{"idx":-1,"pos":-1},"enabled":true,"offvec":{"x":0,"y":0,"name":"vector"},"fm":{"ejw":[0,0,0,0],"ew":[60,60,60,60]},"mm":{"sp":[],"fls":{"fls":[{"type":"Glass","pid":{"idx":-1,"pos":-1},"bd":{"type":"Bead","fm":{"ejw":[0,0,0,0],"ew":[15,15,15,15]}},"ser":{"text":"A1","offvec":{"x":0,"y":0,"name":"vector"}},"spet":{"sp":"","th":0,"te":[],"tm":{"width":0,"height":0},"mw":0},"wtf":true,"ws":false,"hs":[]}]},"lpfs":[],"dbs":{"bars":[]}},"hm":{"openDirection":"down","openToward":"inward","hingeType":"Hinge","hingeCount":0,"handle":{"hidden":false,"hardwareShape":"Handle","autoOffset":true,"percentOffset":0.5,"useProfileColor":false,"dim":{"name":"","from":{"x":-1646.6149003185803,"y":1197.1893562882492,"name":"point"},"to":{"x":-1646.6149003185803,"y":1997.1893562882492,"name":"point"},"hidden":false,"offset":{"x":0,"y":0,"name":"vector"},"position":"right"},"dimToSash":{"name":"","from":{"x":0,"y":0,"name":"point"},"to":{"x":0,"y":0,"name":"point"},"hidden":true,"offset":{"x":0,"y":0,"name":"vector"},"position":"right"},"lockDimToGround":false,"lockDimToSash":false,"edgeIndex":2},"hinges":[],"slide":"right","mlp":true},"dm":{"dims":[]},"opened":false,"isDoor":false,"bd":{"name":"","from":{"x":0,"y":0,"name":"point"},"to":{"x":0,"y":0,"name":"point"},"hidden":true,"offset":{"x":0,"y":0,"name":"vector"}},"fw":-1,"wtf":true,"tf":false,"od":90}],"cm":{"bn":"#636568","ben":"#7B7F81","g":"rgba(30,236,174,0.6)","hd":"#D4D1D9"},"tv":{"offset":{"x":0,"y":0,"name":"vector"},"hidden":false},"dm":{"dims":[{"type":"line","eidx":0,"midx":-1,"name":"","ds":true,"ov":{"x":0,"y":0,"name":"vector"},"at":0},{"type":"line","eidx":1,"midx":-1,"name":"","ds":true,"ov":{"x":0,"y":0,"name":"vector"},"at":0}]},"edm":[],"lds":false,"ser":{"from":{"x":-2931.61490031858,"y":337.1893562882492,"name":"point"},"to":{"x":-2931.61490031858,"y":337.1893562882492,"name":"point"},"text":"","fontSize":120,"cr":"blue"},"tn":false,"esr":[]}],"wall":[],"cp":[],"note":[],"scale":0,"epi":[],"wlc":"#9E7A64","s":{"cjs":100,"cs":60}}';
    const win =
      '{"sm":[{"uid":1,"type":"Frame","ps":{"f":50,"fm":100,"sa":60,"usa":60,"dsa":60,"il":60,"sc":60,"sm":60,"kw":200,"b":20,"a":24,"am":45,"mf":5,"ms":5,"gg":50},"polygon":{"type":"polygon","spLine":{"polyId":{"idx":-1,"pos":-1},"startSplit":false,"endSplit":false,"equalSplit":0,"ss":false,"es":false,"sFd":false,"eFd":false,"alignType":0,"reinforced":false},"polygon":[[{"ps":{"x":1851.5148669241948,"y":1173.7938122408477,"name":"point"},"pe":{"x":1851.5148669241948,"y":2142.7938122408477,"name":"point"},"name":"segment"},{"ps":{"x":1851.5148669241948,"y":2142.7938122408477,"name":"point"},"pe":{"x":3078.514866924195,"y":2142.7938122408477,"name":"point"},"name":"segment"},{"ps":{"x":3078.514866924195,"y":2142.7938122408477,"name":"point"},"pe":{"x":3078.514866924195,"y":1173.7938122408477,"name":"point"},"name":"segment"},{"ps":{"x":3078.514866924195,"y":1173.7938122408477,"name":"point"},"pe":{"x":1851.5148669241948,"y":1173.7938122408477,"name":"point"},"name":"segment"}]],"virtual":false},"fm":{"ejw":[0,0,0,0],"ew":[50,50,50,50]},"mm":{"sp":[],"fls":{"fls":[]},"lpfs":[],"dbs":{"bars":[]}},"sm":[{"type":"Sash","polyId":{"idx":-1,"pos":-1},"enabled":true,"offvec":{"x":0,"y":0,"name":"vector"},"fm":{"ejw":[0,0,0,0],"ew":[60,60,60,60]},"mm":{"sp":[],"fls":{"fls":[{"type":"Glass","pid":{"idx":-1,"pos":-1},"bd":{"type":"Bead","fm":{"ejw":[0,0,0,0],"ew":[20,20,20,20]}},"ser":{"text":"A1","offvec":{"x":0,"y":0,"name":"vector"}},"spet":{"sp":"","th":0,"te":[],"tm":{"width":0,"height":0},"mw":0},"wtf":true,"ws":false,"hs":[]}]},"lpfs":[],"dbs":{"bars":[]}},"hm":{"openDirection":"left","openToward":"outward","hingeType":"Hinge","hingeCount":0,"handle":{"hidden":false,"hardwareShape":"Handle","autoOffset":true,"percentOffset":0.5,"useProfileColor":false,"dim":{"name":"","from":{"x":3173.514866924195,"y":1658.2938122408477,"name":"point"},"to":{"x":3173.514866924195,"y":2142.7938122408477,"name":"point"},"hidden":false,"offset":{"x":0,"y":0,"name":"vector"},"position":"right"},"dimToSash":{"name":"","from":{"x":0,"y":0,"name":"point"},"to":{"x":0,"y":0,"name":"point"},"hidden":true,"offset":{"x":0,"y":0,"name":"vector"},"position":"right"},"lockDimToGround":false,"lockDimToSash":false,"edgeIndex":2},"hinges":[],"slide":"none","mlp":true},"dm":{"dims":[]},"opened":false,"isDoor":false,"bd":{"name":"","from":{"x":0,"y":0,"name":"point"},"to":{"x":0,"y":0,"name":"point"},"hidden":true,"offset":{"x":0,"y":0,"name":"vector"}},"fw":-1,"wtf":true,"tf":false,"od":90}],"cm":{"bn":"#F0540B","ben":"#F0540B","g":"rgba(0, 255, 255, 0.6)","hd":"#D4D1D9"},"tv":{"offset":{"x":0,"y":0,"name":"vector"},"hidden":false},"dm":{"dims":[{"type":"line","eidx":0,"midx":-1,"name":"","ds":true,"ov":{"x":0,"y":0,"name":"vector"},"at":0},{"type":"line","eidx":1,"midx":-1,"name":"","ds":true,"ov":{"x":0,"y":0,"name":"vector"},"at":0}]},"edm":[],"lds":false,"ser":{"from":{"x":3216.514866924195,"y":2153.7938122408477,"name":"point"},"to":{"x":3216.514866924195,"y":2153.7938122408477,"name":"point"},"text":"","fontSize":120,"cr":"blue"},"tn":false,"esr":[]}],"wall":[],"cp":[],"note":[],"scale":0,"epi":[],"wlc":"#b4f595","s":{"cjs":100,"cs":60}}';

    this.webcc!.shapeManager.openFile(win, true, true);
    //se lo tenemos q poner al importar para luego verlo en la estructura
    this.webcc.shapeManager.shapem[this.webcc.shapeManager.shapem.length - 1].label.text =
      's60|ventana-exterior-projectante';

  }

  importWindowSliding() {
    //const win = '{"sm":[{"uid":1,"type":"Frame","ps":{"f":60,"fm":90,"sa":60,"usa":60,"dsa":60,"il":60,"sc":60,"sm":60,"kw":200,"b":15,"a":24,"am":45,"mf":5,"ms":5,"gg":6},"polygon":{"type":"polygon","spLine":{"polyId":{"idx":-1,"pos":-1},"startSplit":false,"endSplit":false,"equalSplit":0,"ss":false,"es":false,"sFd":false,"eFd":false,"alignType":0,"reinforced":false},"polygon":[[{"ps":{"x":-4131.61490031858,"y":397.1893562882492,"name":"point"},"pe":{"x":-4131.61490031858,"y":1997.1893562882492,"name":"point"},"name":"segment"},{"ps":{"x":-4131.61490031858,"y":1997.1893562882492,"name":"point"},"pe":{"x":-1731.61490031858,"y":1997.1893562882492,"name":"point"},"name":"segment"},{"ps":{"x":-1731.61490031858,"y":1997.1893562882492,"name":"point"},"pe":{"x":-1731.61490031858,"y":397.1893562882492,"name":"point"},"name":"segment"},{"ps":{"x":-1731.61490031858,"y":397.1893562882492,"name":"point"},"pe":{"x":-4131.61490031858,"y":397.1893562882492,"name":"point"},"name":"segment"}]],"virtual":false},"fm":{"ejw":[0,0,0,0],"ew":[60,60,60,60]},"mm":{"sp":[],"fls":{"fls":[]},"lpfs":[],"dbs":{"bars":[]}},"sm":[{"type":"Sash","polyId":{"idx":-1,"pos":-1},"enabled":true,"offvec":{"x":0,"y":0,"name":"vector"},"fm":{"ejw":[0,0,0,0],"ew":[60,60,60,60]},"mm":{"sp":[],"fls":{"fls":[{"type":"Glass","pid":{"idx":-1,"pos":-1},"bd":{"type":"Bead","fm":{"ejw":[0,0,0,0],"ew":[15,15,15,15]}},"ser":{"text":"A1","offvec":{"x":0,"y":0,"name":"vector"}},"spet":{"sp":"","th":0,"te":[],"tm":{"width":0,"height":0},"mw":0},"wtf":true,"ws":false,"hs":[]}]},"lpfs":[],"dbs":{"bars":[]}},"hm":{"openDirection":"down","openToward":"inward","hingeType":"Hinge","hingeCount":0,"handle":{"hidden":false,"hardwareShape":"Handle","autoOffset":true,"percentOffset":0.5,"useProfileColor":false,"dim":{"name":"","from":{"x":-1646.6149003185803,"y":1197.1893562882492,"name":"point"},"to":{"x":-1646.6149003185803,"y":1997.1893562882492,"name":"point"},"hidden":false,"offset":{"x":0,"y":0,"name":"vector"},"position":"right"},"dimToSash":{"name":"","from":{"x":0,"y":0,"name":"point"},"to":{"x":0,"y":0,"name":"point"},"hidden":true,"offset":{"x":0,"y":0,"name":"vector"},"position":"right"},"lockDimToGround":false,"lockDimToSash":false,"edgeIndex":2},"hinges":[],"slide":"right","mlp":true},"dm":{"dims":[]},"opened":false,"isDoor":false,"bd":{"name":"","from":{"x":0,"y":0,"name":"point"},"to":{"x":0,"y":0,"name":"point"},"hidden":true,"offset":{"x":0,"y":0,"name":"vector"}},"fw":-1,"wtf":true,"tf":false,"od":90}],"cm":{"bn":"#636568","ben":"#7B7F81","g":"rgba(30,236,174,0.6)","hd":"#D4D1D9"},"tv":{"offset":{"x":0,"y":0,"name":"vector"},"hidden":false},"dm":{"dims":[{"type":"line","eidx":0,"midx":-1,"name":"","ds":true,"ov":{"x":0,"y":0,"name":"vector"},"at":0},{"type":"line","eidx":1,"midx":-1,"name":"","ds":true,"ov":{"x":0,"y":0,"name":"vector"},"at":0}]},"edm":[],"lds":false,"ser":{"from":{"x":-2931.61490031858,"y":337.1893562882492,"name":"point"},"to":{"x":-2931.61490031858,"y":337.1893562882492,"name":"point"},"text":"","fontSize":120,"cr":"blue"},"tn":false,"esr":[]}],"wall":[],"cp":[],"note":[],"scale":0,"epi":[],"wlc":"#9E7A64","s":{"cjs":100,"cs":60}}';
    const win =
      '{"sm":[{"uid":1,"type":"Frame","ps":{"f":50,"fm":100,"sa":60,"usa":60,"dsa":60,"il":60,"sc":60,"sm":60,"kw":200,"b":20,"a":24,"am":45,"mf":5,"ms":5,"gg":50},"polygon":{"type":"polygon","spLine":{"polyId":{"idx":-1,"pos":-1},"startSplit":false,"endSplit":false,"equalSplit":0,"ss":false,"es":false,"sFd":false,"eFd":false,"alignType":0,"reinforced":false},"polygon":[[{"ps":{"x":221.1291065669634,"y":695.9532551298864,"name":"point"},"pe":{"x":221.1291065669634,"y":1866.9532551298862,"name":"point"},"name":"segment"},{"ps":{"x":221.1291065669634,"y":1866.9532551298862,"name":"point"},"pe":{"x":1778.1291065669634,"y":1866.9532551298862,"name":"point"},"name":"segment"},{"ps":{"x":1778.1291065669634,"y":1866.9532551298862,"name":"point"},"pe":{"x":1778.1291065669634,"y":695.9532551298862,"name":"point"},"name":"segment"},{"ps":{"x":1778.1291065669634,"y":695.9532551298862,"name":"point"},"pe":{"x":221.1291065669634,"y":695.9532551298864,"name":"point"},"name":"segment"}]],"virtual":false},"fm":{"ejw":[2,2,2,2],"ew":[50,50,50,50]},"mm":{"sp":[],"fls":{"fls":[]},"lpfs":[],"dbs":{"bars":[]}},"sm":[{"type":"Slide","polyId":{"idx":-1,"pos":-1},"enabled":true,"offvec":{"x":0,"y":0,"name":"vector"},"appliedOptionIndex":15,"emptyTrackAppended":"none","isDoor":false,"ptd":false,"eas":-1,"sashes":[{"type":"Sash","polyId":{"idx":-1,"pos":-1},"enabled":true,"offvec":{"x":0,"y":0,"name":"vector"},"fm":{"ejw":[0,0,0,0],"ew":[60,60,60,60]},"mm":{"sp":[],"fls":{"fls":[{"type":"Glass","pid":{"idx":-1,"pos":-1},"bd":{"type":"Bead","fm":{"ejw":[0,0,0,0],"ew":[20,20,20,20]}},"ser":{"text":"A1","offvec":{"x":0,"y":0,"name":"vector"}},"spet":{"sp":"","th":0,"te":[],"tm":{"width":0,"height":0},"mw":0},"wtf":true,"ws":false,"hs":[]}]},"lpfs":[],"dbs":{"bars":[]}},"hm":{"openDirection":"left","lock":[{"hidden":false,"hardwareShape":"Lock","autoOffset":true,"percentOffset":0.5,"useProfileColor":false,"dim":{"name":"","from":{"x":1873.1291065669634,"y":1281.4532551298862,"name":"point"},"to":{"x":1873.1291065669634,"y":1866.9532551298862,"name":"point"},"hidden":false,"offset":{"x":0,"y":0,"name":"vector"},"position":"right"},"dimToSash":{"name":"","from":{"x":0,"y":0,"name":"point"},"to":{"x":0,"y":0,"name":"point"},"hidden":true,"offset":{"x":0,"y":0,"name":"vector"},"position":"right"},"lockDimToGround":false,"lockDimToSash":false,"edgeIndex":3}],"lock2s":[],"handleForSlide":{"hidden":true,"hardwareShape":"HandleForSlide","autoOffset":true,"percentOffset":0,"useProfileColor":false,"dim":{"name":"","from":{"x":0,"y":0,"name":"point"},"to":{"x":0,"y":0,"name":"point"},"hidden":false,"offset":{"x":0,"y":0,"name":"vector"},"position":"right"},"dimToSash":{"name":"","from":{"x":0,"y":0,"name":"point"},"to":{"x":0,"y":0,"name":"point"},"hidden":true,"offset":{"x":0,"y":0,"name":"vector"},"position":"right"},"lockDimToGround":false,"lockDimToSash":false,"edgeIndex":3},"pullupEnabled":false},"dm":{"dims":[]},"trackIndex":0,"columnIndex":1,"fixedWidth":-1,"isFixed":false,"attrs":{"lockCode":"","lockName":""}},{"type":"Sash","polyId":{"idx":-1,"pos":-1},"enabled":true,"offvec":{"x":0,"y":0,"name":"vector"},"fm":{"ejw":[0,0,0,0],"ew":[60,60,60,60]},"mm":{"sp":[],"fls":{"fls":[{"type":"Glass","pid":{"idx":-1,"pos":-1},"bd":{"type":"Bead","fm":{"ejw":[0,0,0,0],"ew":[20,20,20,20]}},"ser":{"text":"A2","offvec":{"x":0,"y":0,"name":"vector"}},"spet":{"sp":"","th":0,"te":[],"tm":{"width":0,"height":0},"mw":0},"wtf":true,"ws":false,"hs":[]}]},"lpfs":[],"dbs":{"bars":[]}},"hm":{"openDirection":"right","lock":[{"hidden":false,"hardwareShape":"Lock","autoOffset":true,"percentOffset":0.5,"useProfileColor":false,"dim":{"name":"","from":{"x":476.12910656696346,"y":1406.9532551298862,"name":"point"},"to":{"x":476.12910656696346,"y":2206.953255129886,"name":"point"},"hidden":true,"offset":{"x":0,"y":0,"name":"vector"},"position":"right"},"dimToSash":{"name":"","from":{"x":0,"y":0,"name":"point"},"to":{"x":0,"y":0,"name":"point"},"hidden":true,"offset":{"x":0,"y":0,"name":"vector"},"position":"right"},"lockDimToGround":false,"lockDimToSash":false,"edgeIndex":1}],"lock2s":[{"hidden":true,"hardwareShape":"Lock2","autoOffset":true,"percentOffset":0,"useProfileColor":false,"dim":{"name":"","from":{"x":0,"y":0,"name":"point"},"to":{"x":0,"y":0,"name":"point"},"hidden":false,"offset":{"x":0,"y":0,"name":"vector"},"position":"right"},"dimToSash":{"name":"","from":{"x":0,"y":0,"name":"point"},"to":{"x":0,"y":0,"name":"point"},"hidden":true,"offset":{"x":0,"y":0,"name":"vector"},"position":"right"},"lockDimToGround":false,"lockDimToSash":false,"edgeIndex":3}],"handleForSlide":{"hidden":true,"hardwareShape":"HandleForSlide","autoOffset":true,"percentOffset":0,"useProfileColor":false,"dim":{"name":"","from":{"x":0,"y":0,"name":"point"},"to":{"x":0,"y":0,"name":"point"},"hidden":false,"offset":{"x":0,"y":0,"name":"vector"},"position":"right"},"dimToSash":{"name":"","from":{"x":0,"y":0,"name":"point"},"to":{"x":0,"y":0,"name":"point"},"hidden":true,"offset":{"x":0,"y":0,"name":"vector"},"position":"right"},"lockDimToGround":false,"lockDimToSash":false,"edgeIndex":1},"pullupEnabled":false},"dm":{"dims":[]},"trackIndex":1,"columnIndex":0,"fixedWidth":-1,"isFixed":false,"attrs":{"lockCode":"","lockName":""}}],"tf":false}],"cm":{"bn":"#F0540B","ben":"#F0540B","g":"rgba(0, 255, 255, 0.6)","hd":"#D4D1D9"},"tv":{"offset":{"x":0,"y":0,"name":"vector"},"hidden":false},"dm":{"dims":[{"type":"line","eidx":0,"midx":-1,"name":"","ds":true,"ov":{"x":0,"y":0,"name":"vector"},"at":0},{"type":"line","eidx":1,"midx":-1,"name":"","ds":true,"ov":{"x":0,"y":0,"name":"vector"},"at":0}]},"edm":[],"lds":false,"ser":{"from":{"x":2621.1291065669634,"y":2206.953255129886,"name":"point"},"to":{"x":2621.1291065669634,"y":2206.953255129886,"name":"point"},"text":"","fontSize":120,"cr":"blue"},"tn":false,"esr":[]}],"wall":[],"cp":[],"note":[],"scale":0,"epi":[],"wlc":"#b4f595","s":{"cjs":100,"cs":60}}';

    this.webcc!.shapeManager.openFile(win, true, true);
    //se lo tenemos q poner al importar para luego verlo en la estructura
    this.webcc.shapeManager.shapem[this.webcc.shapeManager.shapem.length - 1].label.text =
      'sliding|Dobleriel-simetrica-hoja-80';

  }
  // loop through three display modes
  //  'normal','calculate','order'
  changeDisplay() {
    this.display = (this.display + 1) % 3;

    switch (this.display) {
      case 0:
        this.webcc.shapeManager.shapeMode = 'order';
        break;
      case 1:
        this.webcc.shapeManager.shapeMode = 'calculate';
        break;
      default:
      case 2:
        this.webcc.shapeManager.shapeMode = 'normal';
        break;
    }
  }

  export() {
    //console.log(this.webcc.shapeManager.toNoDimData());

    /// Listado de componentes que componen las figuras dibujadas
    const components: DrawingComponent[] = [];

    console.log(this.webcc.dimManager.visualIDimInfos);

    /// Parseo los conectores
    this.webcc.shapeManager.couples.forEach((couple) => {
      components.push(this.parseConnector(couple));
    });

    /// Array de todos los children que componen las figuras
    const children: any[] = [];
    this.webcc.shapeManager.shapem.forEach((frame) => children.push(...this.flatChildren(frame.children)));

    //console.log(children);

    /// Parseo los componentes de las ventanas
    children.forEach((child) => {
      if (child.type === 'Bar') {
        components.push(this.parseBar(child));
      }

      if (child.type === 'Glass') {
        components.push(this.parseGlass(child));
      }
    });


    console.table(components);

    /*
    /// Ventanas
    this.webcc.shapeManager.shapem.forEach((frame) => {
      debugger;
        console.log(frame.label.text);
      const window: any[] = [];
      frame.children.forEach((child) => {
        if (
          child.type !== 'Bar' &&
          child.type !== 'Glass' &&
          child.type !== 'Slide'
        )
          return;

        if (child.type === 'Bar') {
            window.push(this.parseBar(child, 'Perfil'));
        }

        if (child.type === 'Glass') {
            window.push(this.parseGlass(child, 'Vidrio'));

          child.bead.children.forEach((bead) => {
            window.push(this.parseBar(bead, 'MarcoVidrio'));
          });
        }

        if (child.type === 'Slide') {
          child.children.forEach((sash) => {
            if (sash.type !== 'Sash') return;

            sash.children.forEach((sashChild) => {
              if (
                sashChild.type !== 'Bar' &&
                sashChild.type !== 'Glass' &&
                sashChild.type !== 'Handle'
              )
                return;

              if (sashChild.type === 'Bar') {
                window.push(this.parseBar(sashChild, 'PerfilPuerta'));
              }

              if (sashChild.type === 'Glass') {
                window.push(this.parseGlass(sashChild, 'Vidrio'));

                sashChild.bead.children.forEach((bead) => {
                  window.push(this.parseBar(bead, 'MarcoVidrio'));
                });
              }

              if (sashChild.type === 'Handle') {
                if (sashChild.hidden) return;
                window.push({
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

      windows.push(window);

      

      console.table(window);
      
    });

    //console.table(conectors);
    //console.table(windows);
    */
  }

  /// Descompone los hijos de un elemento en un array, funcion recursiva
  flatChildren(children: any[]): any[] {
    const result: any[] = [];

    children.forEach((child) => {
      result.push(child);

      if (child.children?.length > 0) {
        result.push(...this.flatChildren(child.children));
      }
    });

    return result;
  }

  
  parseBar(bar: any): DrawingComponent {
    return {
      id: bar.id,
      windowId: bar.topFrame.id,
      description: bar.parent.type === 'Frame'
        ? 'Perfil'
        : bar.parent.type === 'Bead'
          ? 'MarcoVidrio'
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

  parseGlass(glass: any): DrawingComponent {
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

  parseConnector(connector: any): DrawingComponent {
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

  exportJson() {
    console.log(this.webcc.shapeManager);
    debugger;

    //this.webcc.shapeManager.notes.push('s60');
    //this.webcc.shapeManager.notes.push({'model':'ventana-exterior-projectante'});

    this.webcc.shapeManager.shapem[0].label.text =
      's60|ventana-exterior-projectante';
    this.webcc.refresh();
    console.log(this.webcc.shapeManager.serialize()); // download json file
    //console.log(this.webcc.shapeManager.serialize());
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
      y: Math.round(this.webcc.toolManager.mousePosition.y),
    };
  }
}
