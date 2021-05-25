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
    results: string[] = [];
    isBusy: boolean = false;

    // methods
    setNumber1(value: string) {
        this.inputNumber1 = Number(value);
    }
    setNumber2(value: string) {
      this.inputNumber2 = Number(value);
    }

    add()
    {
        return this.inputNumber1 + this.inputNumber2;
    }

    subtract()
    {
        return this.inputNumber1 - this.inputNumber2;
    }

    multiply()
    {
        return this.inputNumber1 * this.inputNumber2;
    }

    calculator() {
            this.isBusy = true;
            this.results = [
              "The add of" + " " + this.inputNumber1 + " + " + this.inputNumber2 + " = " + this.add(), 
              "The subtract of" + " " + this.inputNumber1 + " - " + this.inputNumber2 + " = " + this.subtract(), 
              "The multiply of" + " " + this.inputNumber1 + " * " + this.inputNumber2 + " = " + this.multiply()
           ];
           this.isBusy = false;
    }
}