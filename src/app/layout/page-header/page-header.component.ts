import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [],
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.css'
})
export class PageHeaderComponent implements OnInit  {
    @Input() data: any;

    ngOnInit(): void {
      console.log(this.data)
    }

}
