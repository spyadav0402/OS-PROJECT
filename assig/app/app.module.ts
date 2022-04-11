import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './Menu/menu.component';
import { RestaurentComponent } from './Restaurent/restaurent.component';
import { success } from './Success/success.component';
import { AdminComponent } from './Admin/admin.component';
import { UserComponent } from './User/User.component';

@NgModule({
  declarations: [
    AppComponent,
    
    MenuComponent,
    RestaurentComponent,
    Success,
    AdminComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppComponent {
  title = 'Angular-Assignment1';
}
