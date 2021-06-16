import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-rgb-editor',
  templateUrl: './rgb-editor.component.html',
  styleUrls: ['./rgb-editor.component.css']
})
export class RgbEditorComponent {

  constructor(private game: GameService){ }

  private normalize(value: string): number {
    let num = Math.round(Number(value));
    return Math.min(Math.max(0, num), 255);
  }

  setRed(value: string) {
    this.game.setRed(this.normalize(value));
  }

  setGreen(value: string) {
    this.game.setGreen(this.normalize(value));
  }

  setBlue(value: string) {
    this.game.setBlue(this.normalize(value));
  }

}
