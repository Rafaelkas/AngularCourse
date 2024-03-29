import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TitleComponent } from './components/title/title.component';
import { QuestionPresenterComponent } from './components/question-presenter/question-presenter.component';
import { QuizOverComponent } from './components/quiz-over/quiz-over.component';
import { SummaryComponent } from './components/summary/summary.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    QuestionPresenterComponent,
    QuizOverComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
