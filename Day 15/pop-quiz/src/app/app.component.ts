import { Component } from '@angular/core';
import { Question } from './model/question';
import { Questions } from './model/questions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentQuestion: Question;
  currentQuestionIndex: number;
  summary: Question[];
  isQuizOver: boolean;
  maxLength: number;
  score: number;
  correctAnswers: number; 

  constructor(){
    this.currentQuestionIndex = 0;
    this.currentQuestion = Questions[this.currentQuestionIndex];
    this.summary = [];
    this.isQuizOver = false;
    this.maxLength = Questions.length;
    this.score = 0;
    this.correctAnswers = 0;
  }

  userSelectAnswer(answer: string) {
    if(!this.isQuizOver) {
      let answerIndex = this.currentQuestion.answers.indexOf(answer);
      this.currentQuestion.userAnswer = answerIndex;

      if(this.currentQuestion.correctAnswer == this.currentQuestion.userAnswer)
      {
        this.correctAnswers++;
      }

      this.summary.push(this.currentQuestion);

      this.currentQuestionIndex++;
      this.currentQuestion = Questions[this.currentQuestionIndex];

      console.log("correctAnswers " + this.correctAnswers)
      console.log("maxLength " + this.maxLength)
      
      this.score = (this.correctAnswers / this.maxLength) * 100;

      console.log("score " + this.score )

      this.isQuizOver = !(this.currentQuestion);
    }
  }
}
