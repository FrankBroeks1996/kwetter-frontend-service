import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService : AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  public async register(username, password){
		await this.authService.register(username, password).then(() => {
			if(this.authService.isAuthorised()){
				this.router.navigate([`/profile/${username}`]);
      }
		}).catch(error => {
      console.log(error);
    });
	}
}
