import { Component, OnInit, Input } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { KweetService } from 'src/app/services/kweet.service';

@Component({
  selector: 'app-profile-kweets',
  templateUrl: './profile-kweets.component.html',
  styleUrls: ['./profile-kweets.component.css']
})
export class ProfileKweetsComponent implements OnInit {

  public kweets;

  @Input()
  private profile;

  constructor(public profileService : ProfileService, public kweetService : KweetService) { }

  ngOnInit() {
    if(this.profile){
      this.profileService.getUserKweets(this.profile.id).then(data => {
        console.log(data);
        this.kweets = data;
      }).catch(error => {
        console.log(error);
      });
    }
  }
}
