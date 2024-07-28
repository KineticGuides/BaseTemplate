import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { PageHeaderComponent } from '../../layout/page-header/page-header.component';
import { PageFooterComponent } from '../../layout/page-footer/page-footer.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [PageHeaderComponent, PageFooterComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _dataService: DataService,
    private _router: Router,
    public http: HttpClient  // used by upload
) { }

  data: any;
  
  ngOnInit(): void {
    
    this._activatedRoute.data.subscribe(({ 
      data })=> { 
      this.data=data;
  }) 

  }

}
