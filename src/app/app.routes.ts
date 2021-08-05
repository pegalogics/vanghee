import { ModuleWithProviders } from '@angular/core';    
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './components/index/index.component'; 
import { AboutComponent } from './components/about/about.component';
import { FeaturesComponent } from './components/features/features.component';
import { FaqComponent } from './components/faq/faq.component';
import { ContactComponent } from './components/contact/contact.component'; 


export const appRoutes: Routes = [  
    { path: '', redirectTo: 'index', pathMatch: 'full' },    
    { path: 'index', component: IndexComponent },
    { path: 'about', component: AboutComponent },
    { path: 'features', component: FeaturesComponent },
    { path: 'faq', component: FaqComponent },
    { path: 'contact', component: ContactComponent }
];  
  