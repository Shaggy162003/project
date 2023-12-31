import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import { AuthGuard } from './services/auth.guard';
import { RegisterComponent } from './components/register/register.component';
const routes: Routes = [
 {
  path:'',
  component:HomeComponent,
  pathMatch:'full'
 },
 {
  path:'login',
  component:LoginComponent,
  pathMatch:'full'
 },
 {
path:'register',
component:RegisterComponent,
pathMatch:'full'
 },
 {
  path:'navbar',
  component:NavbarComponent,
  pathMatch:'full'
 },
 {
  path:'dashboard',
  component:DashboardComponent,
  pathMatch:'full',
  canActivate:[AuthGuard]
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
