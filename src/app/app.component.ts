import { Component } from '@angular/core';
import webccCreator from '../plugins/webcc';
import * as webcclib from 'webcc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-demo';

  webcc: any;

  ngAfterViewInit() {
    this.webcc = new webcclib.Runtime('eyJuYW1lIjoiUmhpbm8iLCJzdG0iOjE2Njc0MzM2MDAwMDAsImV4cCI6MTY5OTA1NjAwMDAwMCwibGl0ZSI6ZmFsc2V9.f923c735ceba1c42e678b3586ea37fde');
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
}
