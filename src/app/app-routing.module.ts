import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { SignupFormComponent } from './signup/signup-form/signup-form.component';
import { SigninFormComponent } from './signin/signin-form/signin-form.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signup', component: SignupFormComponent },
  { path: 'signin', component: SigninFormComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
