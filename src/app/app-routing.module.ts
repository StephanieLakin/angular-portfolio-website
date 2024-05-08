import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  { path: 'home', component: PortfolioComponent },
  { path: 'portfolio', component:PortfolioComponent },
  { path: 'resume', component:ResumeComponent },
  { path: 'contact', component:ContactComponent },
  { path: '**' , component: PortfolioComponent, pathMatch: 'full'} // default to display home for security 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
