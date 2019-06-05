import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  public username;

  constructor(private authService : AuthService,
              private router : Router) {
                this.router.routeReuseStrategy.shouldReuseRoute = () => false;
               }

  ngOnInit() {
    this.username = this.authService.getUsernameFromToken();
  }

  public isLoggedIn(){
    return this.authService.isAuthorised();
  }

  public logout(){
    this.authService.logout();
    this.router.navigate([`/login`]);
  }

  public search(searchQuery){
    if(searchQuery){
      this.router.navigate([`/search/${searchQuery}`]);
    }
  }
}
