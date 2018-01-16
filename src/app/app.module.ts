import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TranslationService } from './translation.service';
import { CartComponent } from './cart/cart.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { HrefProjectComponent } from './href-project/href-project.component';
import { ProductsService } from './products.service';
import { CartService } from './cart.service';
import { TranslatePipe } from './translate.pipe';
import { EditproductComponent } from './editproduct/editproduct.component';
import { PermissionsService } from './permissions.service';
import { MinDirective } from './min.directive';
import { WarningDirective } from './warning.directive';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'product/:id', component: ProductPageComponent },
  { path: 'cart', component: CartComponent, children: [{ path: 'product/:id', component: ProductPageComponent }] },
  { path: 'edit', component: EditproductComponent },
  { path: 'edit/:id', component: EditproductComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    ProductItemComponent,
    SidemenuComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    ProductPageComponent,
    HrefProjectComponent,
    CartComponent,
    TranslatePipe,
    EditproductComponent,
    MinDirective,
    WarningDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [ProductsService, CartService, TranslationService, PermissionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
