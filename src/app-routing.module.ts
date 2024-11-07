import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from 'src/app/cart/cart.component';
import { CatalogComponent } from 'src/app/catalog/catalog.component';
import { HomeComponent } from 'src/app/home/home.component';
import { AdviceComponent } from 'src/app/advice/advice.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, title: "Home - PlantShop" },
  { path: 'catalog', component: CatalogComponent, title: "Catalog - PlantShop" },
  { path: 'cart', component: CartComponent, title: "Cart - PlantShop" },
  { path: 'advice', component: AdviceComponent, title: "Advice - PlantShop" },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }