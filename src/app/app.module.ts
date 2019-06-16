import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileInformationComponent } from './components/profile/profile-information/profile-information/profile-information.component';
import { ProfileEditComponent } from './components/profile/profile-information/profile-edit/profile-edit/profile-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileKweetsComponent } from './components/profile/profile-information/profile-kweets/profile-kweets.component';
import { ProfileFollowersComponent } from './components/profile/profile-information/profile-followers/profile-followers.component';
import { ProfileFollowingComponent } from './components/profile/profile-information/profile-following/profile-following.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { KweetViewComponent } from './components/shared/kweet-view/kweet-view.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RegisterComponent } from './components/register/register.component';
import { SearchComponent } from './components/search/search.component';
import { LoginComponent } from './components/login/login.component';
import { KweetSearchComponent } from './components/search/kweet-search/kweet-search.component';
import { UserViewComponent } from './components/shared/user-view/user-view.component';
import { UserSearchComponent } from './components/search/user-search/user-search.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    ProfileInformationComponent,
    ProfileEditComponent,
    ProfileKweetsComponent,
    ProfileFollowersComponent,
    ProfileFollowingComponent,
    DashboardComponent,
    KweetViewComponent,
    NavigationComponent,
    RegisterComponent,
    SearchComponent,
    KweetSearchComponent,
    UserViewComponent,
    UserSearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
