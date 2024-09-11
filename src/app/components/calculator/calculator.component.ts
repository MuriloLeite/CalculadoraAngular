import { Component } from '@angular/core';
import { evaluate } from 'mathjs';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  displayValue: string = '';

  handleButtonClick(label: string) {
    if (label === '=') {
      try {
        this.displayValue = evaluate(this.displayValue).toString();
      } catch {
        this.displayValue = 'Error';
      }
    } else {
      this.displayValue += label;
    }
  }

  handleClear() {
    this.displayValue = '';
  }

  handleBackspace() {
    this.displayValue = this.displayValue.slice(0, -1);
  }
}
