import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpEventType } from '@angular/common/http';
import { Observable, of, map, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  url: any = 'https://api.kineticcloud.ai/api/kmd_router.php'

  constructor(private http: HttpClient) { }

  getLocalStorage() {

  }

  getData(params: any) {
    
      this.getLocalStorage();
      return this.http.post(this.url, params);
  }

}
