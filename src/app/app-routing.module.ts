import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { HomeComponent } from './home/home.component';                 // added line
import { WelcomeComponent } from './welcome/welcome.component';       // added line

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },  // added line
  { path: 'home', component: HomeComponent },      // added line
  { path: 'welcome', component: WelcomeComponent },    // added line
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
