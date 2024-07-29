import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {

  amount = 0;
  total = 0;

  add() {
    this.total = this.total + Number(this.amount);
  }

  subtract() {
    this.total = this.total - Number(this.amount);
  }

  div() {
    this.total = this.total / Number(this.amount);
  }

  mult() {
    this.total = this.total * Number(this.amount);
  }
}
