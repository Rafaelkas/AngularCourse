import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RgbEditorComponent } from './components/rgb-editor/rgb-editor.component';
import { ColorPresenterComponent } from './components/color-presenter/color-presenter.component';

@NgModule({
  declarations: [
    AppComponent,
    RgbEditorComponent,
    ColorPresenterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
