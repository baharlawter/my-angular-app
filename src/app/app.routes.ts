import { Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { CartComponent } from './cart/cart.component';
import { Home } from './home/home';

export const routes: Routes = [
  { path: 'app-home', component: Home },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'cart', component: CartComponent },
  { path: '**', redirectTo: 'app-home' },
];
