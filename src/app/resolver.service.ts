import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from './data.service'; 
import { catchError, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ResolverService {

  r: any; 
  p = {
    q: '',
    id: '',
    id2: '',
    id3: '' 
  }

  constructor(private dataService: DataService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

    this.p.q = '';
    this.p.id = '';
    this.p.id2 = '';
    this.p.id3 = '';
    
    if (state.url!==undefined) {
      this.p.q = state.url;
    }

    this.r=this.dataService.getData(this.p).pipe(catchError(err=> 
      { 
        console.log(err);
        return of(null);
      }));
      console.log(this.r);
    return (this.r)

    
  }

}
