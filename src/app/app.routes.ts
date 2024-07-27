import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ResolverService } from './resolver.service';

export const routes: Routes = [
    { path: '', component: HomePageComponent, resolve: { data: ResolverService } },
    { path: 'login', component: LoginPageComponent, resolve: { data: ResolverService }  }
];
