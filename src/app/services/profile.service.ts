import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient, private authService: AuthService) {}

	public async getUserById(id){
		return await new Promise((resolve, reject) =>
			this.http.get(`http://localhost:8080/Kwetter/api/v1/user/getUserById/${id}`, {
					responseType: "json",
					observe: "response"
			}).subscribe((response) => {
				resolve(response.body);
			}, (error) => {
				reject(error);
			})
		);
	}

	public async getUserByUsername(username){
		return await new Promise((resolve, reject) =>
			this.http.get(`http://localhost:8080/Kwetter/api/v1/user/getUserByUsername/${username}`, {
					responseType: "json",
					observe: "response"
			}).subscribe((response) => {
				resolve(response.body);
			}, (error) => {
				reject(error);
			})
		);
	}

	public async editProfile(id, bio, location, site){
		var requestData = {
			username: id,
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
			this.http.get(`http://localhost:8080/kwetter-kweet-service/api/v1/kweet/getAllKweets/${username}`, {
					responseType: "json",
					observe: "response"
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
			this.http.post("http://localhost:8080/kwetter-kweet-service/api/v1/kweet/post", requestData, {
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

	public async getFollowers(userId){
		return await new Promise((resolve, reject) =>
			this.http.get(`http://localhost:8080/Kwetter/api/v1/user/getFollowers/${userId}`, {
					responseType: "json",
					observe: "response"
			}).subscribe((response) => {
				resolve(response.body);
			}, (error) => {
				reject(error);
			})
		);
	}

	public async getFollowing(userId){
		return await new Promise((resolve, reject) =>
			this.http.get(`http://localhost:8080/Kwetter/api/v1/user/getFollowing/${userId}`, {
					responseType: "json",
					observe: "response"
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

	public async isFollowing(userId){
		return await new Promise((resolve, reject) =>
			this.http.get(`http://localhost:8080/Kwetter/api/v1/user/isFollowing/${userId}`, {
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

	public async getSearchResult(searchQuery, resultPage, resultSize){
		return await new Promise((resolve, reject) => {
			this.http.get(`http://localhost:8080/Kwetter/api/v1/user/search/${searchQuery}?resultPage=${resultPage}&resultSize=${resultSize}`, {
				responseType: "json",
				observe: "response"
			}).subscribe((response) => {
				resolve(response.body);
			}, (error) => {
				reject(error);
			})
		});
	}
}
