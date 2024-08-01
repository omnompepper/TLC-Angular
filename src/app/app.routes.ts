import { NgModule } from '@angular/core';
import { RouterModule, Routes, RouterLink, RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ProductsComponent } from './products/products.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AccountformComponent } from './accountform/accountform.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CounterComponent } from './counter/counter.component';
import { ClairetestComponent } from './clairetest/clairetest.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: 'user', component: UserComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'accounts', component: AccountsComponent },
    { path: 'accountform', component: AccountformComponent },
    { path: 'calculator', component: CalculatorComponent },
    { path: 'counter', component: CounterComponent },
    { path: 'clairetest', component: ClairetestComponent },
    {path: '', component: HomeComponent}
];

@NgModule({
    imports: [RouterOutlet, RouterLink, RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}

