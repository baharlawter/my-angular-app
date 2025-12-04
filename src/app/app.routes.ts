import { Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
  { path: 'calculator', component: CalculatorComponent },
  { path: 'cart', component: CartComponent },
  { path: '**', redirectTo: 'calculator' },
];
