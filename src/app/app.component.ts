import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo';
  name = 'Clairebear';
}
