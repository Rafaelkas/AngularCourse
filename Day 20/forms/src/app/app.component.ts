import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Movie } from './models/movie.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  

  form!: FormGroup;

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.form = new FormGroup({
      name: new FormControl('',[Validators.required]),
      description: new FormControl('', [Validators.required]),
      poster: new FormControl('',[Validators.required])
    });

    let initialMovie: Movie = {
      name: 'E.T.',
      description: 'A friend from another world',
      poster: 'http://blabla.images.com/et'
    }

    this.form.reset(initialMovie);

  }

  onGo() {
    console.log(this.form.value);
  }
}
