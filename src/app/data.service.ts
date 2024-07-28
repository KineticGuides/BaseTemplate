import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpEventType } from '@angular/common/http';
import { Observable, of, map, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  uid: any;
  role: any;
  session: any;
t: any; 


  url: any = 'https://api.kineticcloud.ai/api/kmd_router.php'

  constructor(private http: HttpClient) { }

  getLocalStorage() {
    if (localStorage.getItem('uid')===null) {
      this.uid="0";
    } else {
      this.uid=localStorage.getItem('uid')
    }
    if (localStorage.getItem('role')===null) {
      this.role="0";
    } else {
      this.role=localStorage.getItem('role')
    }
    if (localStorage.getItem('session')===null) {
      this.session="0";
    } else {
      this.session=localStorage.getItem('session')
    }


  }

  getPage(params: any) {    
      // Called from Resolver
      // Parameter is the path of the URL.
      this.getLocalStorage();
      params['uid'] = this.uid;
      params['role'] = this.role;
      params['session'] = this.session;
      return this.http.post(this.url, params);
  }

  getData(q: any, id: any, id2: any, id3: any ) {    

    // Called from Component
    // q what query to call.
    const params = {
      uid: '',
      role: '',
      session: '',
      q: '',
      id: '',
      id2: '',
      id3: ''
    }

    this.getLocalStorage();
    params['uid'] = this.uid;
    params['role'] = this.role;
    params['session'] = this.session;
    params['q'] = q,
    params['id'] = id,
    params['id2'] = id2,
    params['id3'] = id3
    this.t = this.http.post(this.url, params);
    return this.t;
}


}
