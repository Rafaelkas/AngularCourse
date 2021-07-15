import { Component } from '@angular/core';
import { Question } from './model/question';
import { Questions } from './model/questions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentQuestionIndex: number = 0;
  currentQuestion: Question = Questions[this.currentQuestionIndex];
  summary: Question[] = [];
  isQuizOver: boolean = false;
  maxLength: number = Questions.length;
  score: number = 0;
  correctAnswers: number = 0; 

  constructor(){ }

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
