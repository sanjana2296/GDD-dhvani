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
import { ChatroomComponent} from './chatroom/chatroom.component';
import { BenchmarkComponent } from './benchmark/benchmark.component';
import{MilestoneForNormalChildComponent} from './milestone-for-normal-child/milestone-for-normal-child.component';
import { VaccinateYourChildComponent } from './vaccinate-your-child/vaccinate-your-child.component';
import { DoctorVisitComponent } from './doctor-visit/doctor-visit.component';
import { ThingsToKnowComponent } from './things-to-know/things-to-know.component';
import {InspirationComponent} from './inspiration/inspiration.component';
import{DisclaimerComponent} from './disclaimer/disclaimer.component';
import{ WhatAreMilestonesComponent} from './what-are-milestones/what-are-milestones.component';
import { CheckYourMilestonesComponent } from './check-your-milestones/check-your-milestones.component';
import { RehabilateComponent } from './rehabilate/rehabilate.component';
import { PhysiotherapyComponent } from './physiotherapy/physiotherapy.component';
import { OccupationaltherapyComponent } from './occupationaltherapy/occupationaltherapy.component';
import { SpeechtherapyComponent } from './speechtherapy/speechtherapy.component';
import { AdditionalmonetaryComponent } from './additionalmonetary/additionalmonetary.component';
import { BecomeDonorComponent } from './become-donor/become-donor.component';
import { DonorSheetComponent } from './donor-sheet/donor-sheet.component';
import { AcknowledgementComponent } from './acknowledgement/acknowledgement.component';
import { GstAddComponent } from './gst-add/gst-add.component';
import { GstEditComponent } from './gst-edit/gst-edit.component';
import { GstGetComponent } from './gst-get/gst-get.component';

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
{ path: 'chatroom', component:ChatroomComponent},
{ path: '', component: HomeComponent, canActivate: [AuthGuard] },
{ path: 'login', component: LoginComponent },
{ path: 'contact', component: ContactFormComponent },
{ path: 'register', component: RegisterComponent },
{ path: 'profile', component: ProfileComponent },
{ path: 'new', component: FeedFormComponent },
{ path: 'benchmark', component: BenchmarkComponent },
{ path: 'milestone-for-normal-child', component: MilestoneForNormalChildComponent },
{ path: 'vacinate-your-child', component: VaccinateYourChildComponent },
{ path: 'doctor-visit', component: DoctorVisitComponent },
{ path: 'things-to-know', component: ThingsToKnowComponent },
{ path: 'rehabilate', component: RehabilateComponent },
{ path: 'physiotherapy', component: PhysiotherapyComponent },
{ path: 'occupationaltherapy', component: OccupationaltherapyComponent },
{ path: 'speechtherapy', component: SpeechtherapyComponent },
{ path: 'additionalmonetarytherapy', component: AdditionalmonetaryComponent },
{ path: 'become-donor', component: BecomeDonorComponent },
{ path: 'donor-sheet', component: DonorSheetComponent },
{ path: 'acknowledgement', component: AcknowledgementComponent },
{
  path:'inspiration', component:InspirationComponent
},
{path:'disclaimer', component:DisclaimerComponent},
{path:'check-milestone', component:CheckYourMilestonesComponent},
{path:'what-are-mailestones', component:WhatAreMilestonesComponent},
{
  path: 'feed',
  component: FeedComponent,
},
{
  path: 'business/create',
  component: GstAddComponent
},
{
  path: 'business/edit/:id',
  component: GstEditComponent
},
{
  path: 'business',
  component: GstGetComponent
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
