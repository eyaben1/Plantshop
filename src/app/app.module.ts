import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from 'src/app-routing.module'; // Assurez-vous d'importer le module de routage

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { AdviceComponent } from './advice/advice.component'; // Assurez-vous que CartComponent est importé
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatalogComponent,
    SiteHeaderComponent,
    ProductDetailsComponent,
    CartComponent,
    AdviceComponent // Assurez-vous que CartComponent est déclaré ici
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule // Ajoutez le module de routage ici
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
