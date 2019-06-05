import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
    {path: "login", component: LoginComponent},
    {path: "register", component: RegisterComponent},
    {path: "profile/:username", component: ProfileComponent},
    {path: "search/:searchQuery", component: SearchComponent},
    {path: "home", component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
