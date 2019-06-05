import { Component, OnInit, Input } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile-followers',
  templateUrl: './profile-followers.component.html',
  styleUrls: ['./profile-followers.component.css']
})
export class ProfileFollowersComponent implements OnInit {

  @Input()
  private profile;

  public followers;

  constructor(private profileService : ProfileService) { }

  ngOnInit() {
    this.profileService.getFollowers(this.profile.username).then(data => {
      this.followers = data;
    }).catch(error => {
      console.log(error);
    });
  }

}
