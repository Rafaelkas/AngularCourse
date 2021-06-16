import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { Rgb } from './models/types';
import { GameService } from './services/game.service';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  myColor$!: Observable<string>;
  compColor$!: Observable<string>;

  success$!: Observable<boolean>;

  constructor(private game: GameService){ }

  private rgbToString(rgb: Rgb): string {
    console.log(`rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`);
    return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
    
  }

  ngOnInit(): void {
    this.compColor$ = this.game.getComputerColor().pipe(
      map(rgb => this.rgbToString(rgb))
    );

    let r$ = this.game.getRed();
    let g$ = this.game.getGreen();
    let b$ = this.game.getBlue();

    this.myColor$ = combineLatest([r$, g$, b$]).pipe(
        map(tpl => this.rgbToString(tpl)));

    this.success$ = combineLatest([this.compColor$, this.myColor$]).pipe(
      map(tpl => tpl[0] === tpl[1])
    );
  }

  randomize() {
    this.game.randomizeComputerColor();
  }
}
