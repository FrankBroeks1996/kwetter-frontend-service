import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {

  @Input()
  public profile;

  @Output()
  private changeEditMethod = new EventEmitter();

  private editProfileForm;

  constructor(public profileService : ProfileService) {}

  ngOnInit() {
    this.editProfileForm = new FormGroup ({
      bio:  new FormControl(this.profile.bio),
      location: new FormControl(this.profile.location),
      site: new FormControl(this.profile.website)
    });
  }

  private async editProfile(){
    await this.profileService.editProfile(this.profile.username, this.editProfileForm.get("bio").value, this.editProfileForm.get("location").value, this.editProfileForm.get("site").value).then((data) => {
      this.profile = data;
      this.changeEditMethod.emit({value:false, profile:this.profile});
    });
  }
}
