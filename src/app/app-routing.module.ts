import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { MileStoneComponent } from './mile-stone/mile-stone.component';
import { AboutUsComponent}  from './about-us/about-us.component';
import { DonateComponent} from './donate/donate.component';
import { GovSchemesComponent} from './gov-schemes/gov-schemes.component';
import { FeedComponent} from './feed/feed.component';
import { ResearchPaperComponent} from './research-paper/research-paper.component';
import { WhereToGoComponent} from './where-to-go/where-to-go.component';
import { AboutGddComponent} from './about-gdd/about-gdd.component';
import { ProfileComponent} from './profile/profile.component';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';
import { FeedFormComponent} from './feed-form/feed-form.component';
import{ ContactFormComponent} from './contact-form/contact-form.component';
import{ DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [ 
{ path: 'home', component: HomeComponent },
{ path: 'mile-stone', component: MileStoneComponent },
{ path: 'about-us', component: AboutUsComponent },
{ path: 'donate', component: DonateComponent },
{ path: 'gov-schemes', component: GovSchemesComponent },
{ path: 'feed', component: FeedComponent },
{ path: 'research-paper', component: ResearchPaperComponent },
{ path: 'where-to-go', component:WhereToGoComponent},
{ path: 'about-gdd', component:AboutGddComponent},
{ path: '', component: HomeComponent, canActivate: [AuthGuard] },
{ path: 'login', component: LoginComponent },
{ path: 'contact', component: ContactFormComponent },
{ path: 'register', component: RegisterComponent },
{ path: 'profile', component: ProfileComponent },
{ path: 'new', component: FeedFormComponent },
{
  path: 'feed',
  component: FeedComponent,
},
{
  path: 'dashboard',
  redirectTo: '/dashboard',
  pathMatch: 'full',
},
{ path: 'dashboard', component: DashboardComponent },
// otherwise redirect to home
{ path: '**', redirectTo: '' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
