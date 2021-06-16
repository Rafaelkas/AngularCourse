import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Rgb } from '../models/types';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private r: number = 0;
  private g: number = 0;
  private b: number = 0;

  private compColor: Rgb = [0, 0, 0]

  private r$ = new BehaviorSubject(this.r);
  private g$ = new BehaviorSubject(this.g);
  private b$ = new BehaviorSubject(this.b);
  private compColor$ = new BehaviorSubject(this.compColor);

  getRed(): Observable<number> {
    return this.r$.asObservable();
  }

  getGreen(): Observable<number> {
    return this.g$.asObservable();
  }

  getBlue(): Observable<number> {
    return this.b$.asObservable();
  }

  getComputerColor(): Observable<Rgb> {
    return this.compColor$.asObservable();
  }

  setRed(value: number) {
    this.r = value;
    this.r$.next(this.r);
  }

  setGreen(value: number) {
    this.g = value;
    this.g$.next(this.g);
  }

  setBlue(value: number) {
    this.b = value;
    this.b$.next(this.b);
  }


  private randomByte(): number {
    return Math.floor((Math.random()*256));
  }

  randomizeComputerColor() {
    this.compColor = [this.randomByte(), this.randomByte(), this.randomByte()]
    this.compColor$.next(this.compColor);
  }
  
  constructor() { }
}
