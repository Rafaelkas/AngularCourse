import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    // data
    inputNumber1: number = 0;
    inputNumber2: number = 0;

    sum: number | null = null;
    difference: number | null = null;
    product: number | null = null;

    get hasResults(): boolean {
      return (this.sum !== null) && 
      (this.difference !== null) &&
      (this.product !== null)
    } 

    private _reset() {
        this.sum = null;
        this.difference = null;
        this.product = null;
    }

    // methods
    setNumber1(value: string) {
        this.inputNumber1 = Number(value);
        this._reset();

    }
    setNumber2(value: string) {
        this.inputNumber2 = Number(value);
        this._reset();
    }

    calc() {
      if((this.inputNumber1 === null) || (this.inputNumber2 === null))
      {
        this._reset();
      }
      else
      {
        this.sum = this.inputNumber1 + this.inputNumber2;
        this.difference = this.inputNumber1 - this.inputNumber2;
        this.product = this.inputNumber1 * this.inputNumber2;
      }

    }
}