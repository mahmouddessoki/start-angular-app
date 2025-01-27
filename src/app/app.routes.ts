import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent , title: 'Home' , },
  { path: 'about', title: 'About'
    , loadComponent: ()=> import('./components/about/about.component').then((c)=>c.AboutComponent)
  },
  { path: 'portfolio' , title: 'Portfolio',
    loadComponent: ()=> import('./components/portfolio/portfolio.component').then((c)=>c.PortfolioComponent)
  },
  { path: 'contact' , title: 'Contact'
    , loadComponent: ()=> import('./components/contact/contact.component').then((c)=>c.ContactComponent)
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent , title: 'Not Found'},
];
