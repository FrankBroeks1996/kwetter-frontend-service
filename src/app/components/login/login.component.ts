import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	constructor(public loginService: LoginService, 
				public router: Router, 
				public authService : AuthService) { }

	public async login(username, password){
		await this.loginService.login(username, password).then(() => {
			if(this.authService.isAuthorised()){
				this.router.navigate([`/profile/${username}`]);
			}
		});
	}

	ngOnInit() {
	}

}
