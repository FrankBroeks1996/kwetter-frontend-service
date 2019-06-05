import { Component, OnInit, Input } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile-following',
  templateUrl: './profile-following.component.html',
  styleUrls: ['./profile-following.component.css']
})
export class ProfileFollowingComponent implements OnInit {

  @Input()
  private profile;

  private following;

  constructor(private profileService : ProfileService) { }

  ngOnInit() {
    this.profileService.getFollowing(this.profile.username).then(data => {
      console.log(data);
      this.following = data;
    }).catch(error => {
      console.log(error);
    });
  }

}
