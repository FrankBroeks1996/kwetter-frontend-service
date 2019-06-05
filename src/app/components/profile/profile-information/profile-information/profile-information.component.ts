import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile-information',
  templateUrl: './profile-information.component.html',
  styleUrls: ['./profile-information.component.css']
})
export class ProfileInformationComponent implements OnInit {

  @Input()
  private profile;

  @Input()
  public isSelf;

  public isFollowing;

  @Output()
  private changeEditMethod = new EventEmitter();

  constructor(private profileService : ProfileService) {
  }

  ngOnInit() {
    console.log(this.profile);
    this.profileService.isFollowing(this.profile.username).then(data => {
      this.isFollowing = data;
    }).catch(error => {
      console.log(error);
    });
  }

  private editProfile(){
      this.changeEditMethod.emit({value:true});
  }

  private followUser(){
    this.profileService.followUser(this.profile.username).then(data => {
      console.log(data);
      this.isFollowing = true;
    }).catch(error => {
      console.log(error);
    });
  }

  private unFollowUser(){
    this.profileService.unFollowUser(this.profile.username).then(data => {
      this.isFollowing = false;
      console.log(data);
    }).catch(error => {
      console.log(error);
    });
  }
}
