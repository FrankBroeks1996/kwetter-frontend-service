import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { ActivatedRoute } from "@angular/router";
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public profile;
  public navIndex = 0;
  public isEditing = false;
  public isSelf = false;

  constructor(public profileService : ProfileService, 
              private route: ActivatedRoute, 
              private authService : AuthService) {
   }

  ngOnInit() {
    const paramUsername = this.route.snapshot.paramMap.get("username");
    if(paramUsername === this.authService.getUsernameFromToken()){
      this.isSelf = true;
    }

    this.profileService.getUser(paramUsername).then(data => {
      this.profile = data;
    }).catch(error => {
        console.log(error);
    });
  }

  public setNavIndex(index){
    this.navIndex = index;
    console.log(index);
  }

  private setEdit(data){
    if(data.profile){
      this.profile = data.profile;
    }
    this.isEditing = data.value;
    console.log(data.value);
    console.log(this.isEditing);
  }
}
