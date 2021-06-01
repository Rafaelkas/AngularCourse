import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-over',
  templateUrl: './quiz-over.component.html',
  styleUrls: ['./quiz-over.component.css']
})
export class QuizOverComponent implements OnInit {

  @Input()
  score: number | null = null;
  
  constructor() { }

  ngOnInit(): void {
  }

}
