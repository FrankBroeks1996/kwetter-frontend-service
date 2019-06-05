import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient, private authService: AuthService) {}

	public async getUser(username){
		return await new Promise((resolve, reject) =>
			this.http.get(`http://localhost:8080/Kwetter/api/v1/user/getUserByName/${username}`, {
					responseType: "json",
					observe: "response",
					headers: new HttpHeaders({
						'Authorization': localStorage.getItem('token')
					})
			}).subscribe((response) => {
				resolve(response.body);
			}, (error) => {
				reject(error);
			})
		);
	}

	public async editProfile(username, bio, location, site){
		var requestData = {
			username: username,
			bio: bio,
			location: location,
			website: site
		};

		return await new Promise((resolve, reject) =>
			this.http.patch("http://localhost:8080/Kwetter/api/v1/user/editUser", requestData, {
					responseType: "json",
					observe: "response",
					headers: new HttpHeaders({
						'Authorization': localStorage.getItem('token')
					})
			}).subscribe((response) => {
				resolve(response.body);
			}, (error) => {
				reject(error);
			})
		);
	}

	public async getUserKweets(username){
		return await new Promise((resolve, reject) =>
			this.http.get(`http://localhost:8080/Kwetter/api/v1/kweet/getAllKweets/${username}`, {
					responseType: "json",
					observe: "response",
					headers: new HttpHeaders({
						'Authorization': localStorage.getItem('token')
					})
			}).subscribe((response) => {
				resolve(response.body);
			}, (error) => {
				reject(error);
			})
		);
	}

	public async postKweet(message){
		var requestData = {
			message: message
		};

		return await new Promise((resolve, reject) =>
			this.http.post("http://localhost:8080/Kwetter/api/v1/kweet/post", requestData, {
					responseType: "json",
					observe: "response",
					headers: new HttpHeaders({
						'Authorization': localStorage.getItem('token')
					})
			}).subscribe((response) => {
				resolve(response.body);
			}, (error) => {
				reject(error);
			})
		);
	}

	public async getFollowers(username){
		return await new Promise((resolve, reject) =>
			this.http.get(`http://localhost:8080/Kwetter/api/v1/user/getFollowers/${username}`, {
					responseType: "json",
					observe: "response",
					headers: new HttpHeaders({
						'Authorization': localStorage.getItem('token')
					})
			}).subscribe((response) => {
				resolve(response.body);
			}, (error) => {
				reject(error);
			})
		);
	}

	public async getFollowing(username){
		return await new Promise((resolve, reject) =>
			this.http.get(`http://localhost:8080/Kwetter/api/v1/user/getFollowing/${username}`, {
					responseType: "json",
					observe: "response",
					headers: new HttpHeaders({
						'Authorization': localStorage.getItem('token')
					})
			}).subscribe((response) => {
				resolve(response.body);
			}, (error) => {
				reject(error);
			})
		);
	}

	public async followUser(username){
		return await new Promise((resolve, reject) =>
			this.http.post(`http://localhost:8080/Kwetter/api/v1/user/followUser/${username}`, null, {
				observe: "response",
				headers: new HttpHeaders({
					'Authorization': localStorage.getItem('token')
				})
			}).subscribe((response) => {
				resolve(response);
			}, (error) => {
				reject(error);
			})
		);
	}

	public async unFollowUser(username){
		return await new Promise((resolve, reject) =>
			this.http.post(`http://localhost:8080/Kwetter/api/v1/user/unFollowUser/${username}`, null, {
				observe: "response",
				headers: new HttpHeaders({
					'Authorization': localStorage.getItem('token')
				})
			}).subscribe((response) => {
				resolve(response);
			}, (error) => {
				reject(error);
			})
		);
	}

	public async isFollowing(username){
		return await new Promise((resolve, reject) =>
			this.http.get(`http://localhost:8080/Kwetter/api/v1/user/isFollowing/${username}`, {
				observe: "response",
				headers: new HttpHeaders({
					'Authorization': localStorage.getItem('token')
				})
			}).subscribe((response) => {
				resolve(response.body);
			}, (error) => {
				reject(error);
			})
		);
	}
}
