import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile-information',
  templateUrl: './profile-information.component.html',
  styleUrls: ['./profile-information.component.css']
})
export class ProfileInformationComponent implements OnInit {

  @Input()
  public profile;

  @Input()
  public isSelf;

  public isFollowing;

  @Output()
  private changeEditMethod = new EventEmitter();

  constructor(private profileService : ProfileService,
              private authService : AuthService) {
  }

  ngOnInit() {
    console.log(this.profile);
    this.profileService.isFollowing(this.profile.id).then(data => {
      this.isFollowing = data;
    }).catch(error => {
      console.log(error);
    });
  }

  public isLoggedIn(){
    return this.authService.isAuthorised();
  }

  private editProfile(){
      this.changeEditMethod.emit({value:true});
  }

  private followUser(){
    this.profileService.followUser(this.profile.id).then(data => {
      console.log(data);
      this.isFollowing = true;
    }).catch(error => {
      console.log(error);
    });
  }

  private unFollowUser(){
    this.profileService.unFollowUser(this.profile.id).then(data => {
      this.isFollowing = false;
      console.log(data);
    }).catch(error => {
      console.log(error);
    });
  }
}
