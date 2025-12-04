import { Component, signal } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent {
  grossIncome = 0;
  rent = 0;
  carPayment = 0;
  creditCard = 0;
  otherPayments = 0;
  dti = 0;

  calculateDTI() {
    const totalDebt = this.rent + this.carPayment + this.creditCard + this.otherPayments;
    this.dti = this.grossIncome > 0 ? (totalDebt / this.grossIncome) * 100 : 0;
  }
}
