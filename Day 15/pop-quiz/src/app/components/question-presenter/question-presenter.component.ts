import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Question } from 'src/app/model/question';

@Component({
  selector: 'app-question-presenter',
  templateUrl: './question-presenter.component.html',
  styleUrls: ['./question-presenter.component.css']
})
export class QuestionPresenterComponent implements OnInit {

  @Input()
  question: Question | null = null;

  @Output()
  answerChosen = new EventEmitter<string>();

  onSelectAnswer(answer: string) {
    this.answerChosen.emit(answer);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
