import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarMenuComponent } from './layout/sidebar-menu/sidebar-menu.component';
import { PageHeaderComponent } from './layout/page-header/page-header.component';
import { PageFooterComponent } from './layout/page-footer/page-footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarMenuComponent, PageHeaderComponent, PageFooterComponent, HomePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BaseTemplate';
}
