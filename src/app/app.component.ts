import { Component } from '@angular/core';
import * as webcclib from 'webcc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-demo';

  webcc: any;

  display = 2;

  ngAfterViewInit() {
    this.webcc = new webcclib.Runtime('eyJuYW1lIjoiUmhpbm8iLCJzdG0iOjE2Njc0MzM2MDAwMDAsImV4cCI6MTY5OTA1NjAwMDAwMCwibGl0ZSI6ZmFsc2V9.f923c735ceba1c42e678b3586ea37fde');


    // set
    this.webcc.shapeManager.profileSize = {
      //marco externo
      frame: 75,
      //parteluz del marco
      frameMullion: 75,
      glassGap: 50,
      //marco entre el vidrio y el marco (talon)
      bead: 25,
    }

    //para setear el color
    this.webcc.shapeManager.barNormal = '#FFF';

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
}
