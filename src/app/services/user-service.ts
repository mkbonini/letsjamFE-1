import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserEditComponent } from '../user-edit/user-edit.component';
import { Observable, ReplaySubject } from 'rxjs';
import { updatedUser } from '../user-edit/user-edit.component';

@Injectable({
  providedIn: 'root'
})


export class UserService {

  public searchedUserEmitter: ReplaySubject<any[]>;

  constructor(private http: HttpClient) { 
    this.searchedUserEmitter = new ReplaySubject<any[]>(1)
    this.searchedUserEmitter.subscribe((data: any) => {
    })
  }


  getJammers() {
    return this.http.get('https://lets-jam-be.fly.dev/api/v1/users/1/search');
  }

  getUserProfile() {
    return this.http.get('https://lets-jam-be.fly.dev/api/v1/users/1/');
  }

  getIncomingJammerProfiles() {
    return this.http.get('https://lets-jam-be.fly.dev/api/v1/users/1/connections/');
  }

  updateProfile(user: updatedUser) {
        const options =  {
          headers: new HttpHeaders({
          "Content-Type": "application/json",
        }),
    }
    return this.http.patch<any>('https://lets-jam-be.fly.dev/api/v1/users/1/', user, options)
 }

 sendJammerSearchParams(params: string) {
    this.http.get(`https://lets-jam-be.fly.dev/api/v1/users/1/search?${params}`).subscribe({
      next: (returnedJammers: any) => {
        const searchedJammersArray = returnedJammers.data
        this.searchedUserEmitter.next(searchedJammersArray)
      },
      error: err => {
        console.log('error occurred in http request for autoresponses:');
        console.log(err);
        console.log('err.message:');
        console.log(err.message);
      }
    })
 }

 acceptRequest(id: number) {
   return this.http.patch<any>(`https://lets-jam-be.fly.dev/api/v1/users/1/connections/${id}/`, 
     {
       "status": "APPROVED"
     })
}

 sendRequest(id: any) {
     return this.http.post<any>(`https://lets-jam-be.fly.dev/api/v1/users/1/connections/${id}`, '')
  }

}