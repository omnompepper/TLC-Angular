import { NgModule } from '@angular/core';
import { RouterModule, Routes, RouterLink, RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ProductsComponent } from './products/products.component';
import { AccountsComponent } from './accounts/accounts.component';

export const routes: Routes = [
    { path: 'user', component: UserComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'accounts', component: AccountsComponent }
];

@NgModule({
    imports: [RouterOutlet, RouterLink, RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}

