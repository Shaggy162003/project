import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
// import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
// import { MatCardHeader } from '@angular/material/card';
 import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import { LoginService } from './services/login.service';
// import { AuthGuard } from './services/auth.guard';
// import { AuthInterceptor } from './services/auth.interceptor';
import { RegisterComponent } from './components/register/register.component';
 
import {MatSortModule} from '@angular/material/sort';
// import { filter } from 'rxjs';
import { FilterPipe } from './filter.pipe';
//  import { NgxPaginationModule } from 'ngx-pagination';
 
import { OrderModule } from 'ngx-order-pipe';
 

 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    FilterPipe,

 
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
     BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    MatSortModule,
    // NgxPaginationModule,
    OrderModule,
     
    
  ],
  providers: [LoginService,],
  bootstrap: [AppComponent]

})
export class AppModule { }
