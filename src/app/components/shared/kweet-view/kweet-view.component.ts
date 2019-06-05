import { Component, OnInit, Input } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-kweet-view',
  templateUrl: './kweet-view.component.html',
  styleUrls: ['./kweet-view.component.css']
})
export class KweetViewComponent implements OnInit {

  @Input()
  private kweets;

  constructor(private profileService : ProfileService) { }

  ngOnInit() {
  }

  private postKweet(message){
    this.profileService.postKweet(message).then(data => {
      console.log(data);
      this.kweets.unshift(data);
    }).catch(error => {
      console.log(error);
    });
  }

}
