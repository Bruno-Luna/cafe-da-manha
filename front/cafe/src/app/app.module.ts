import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { CafeCrudComponent } from './cafe-crud/cafe-crud.component';
import { CafeCreateComponent } from './cafe-crud/cafe-create/cafe-create.component';
import { CafeReadComponent } from './cafe-crud/cafe-read/cafe-read.component';
import { CafeUpdateComponent } from './cafe-crud/cafe-update/cafe-update.component';
import { CafeDeleteComponent } from './cafe-crud/cafe-delete/cafe-delete.component';
import { AlertComponent } from './alert/alert.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavComponent,
    HeaderComponent,
    CafeCrudComponent,
    CafeCreateComponent,
    CafeReadComponent,
    CafeUpdateComponent,
    CafeDeleteComponent,
    AlertComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
