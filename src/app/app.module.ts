
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule,HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from '@angular/cdk/layout';
import {MatInputModule} from '@angular/material/input';
// used to create fake backend
import { fakeBackendProvider } from './_helpers';
import {MatSelectModule} from '@angular/material/select';
import { HomeComponent } from './home/home.component';
import { MileStoneComponent } from './mile-stone/mile-stone.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DonateComponent } from './donate/donate.component';
import { GovSchemesComponent } from './gov-schemes/gov-schemes.component';
import { FeedComponent } from './feed/feed.component';
import { FilterPipe } from './filter.pipe';
import { GoogleChartsModule } from 'angular-google-charts';
//for translation
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeFrExtra from '@angular/common/locales/extra/fr';
import { ResearchPaperComponent } from './research-paper/research-paper.component';
import { WhereToGoComponent } from './where-to-go/where-to-go.component';
import { AboutGddComponent } from './about-gdd/about-gdd.component';
import { ProfileComponent } from './profile/profile.component';
import { AppComponent }  from './app.component';
import { routing }        from './app.routing';
import {
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
  } from '@angular/material';
  
import { AlertComponent } from './_components';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { MainNavComponent } from './main-nav/main-nav.component';
import { FeedFormComponent} from './feed-form/feed-form.component';
import{ ContactFormComponent} from './contact-form/contact-form.component';
import{ DashboardComponent} from './dashboard/dashboard.component';
// MDB Angular Free
import { WavesModule, ButtonsModule, InputsModule } from 'angular-bootstrap-md';
@NgModule({
    imports: [
        
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        routing,
        MDBBootstrapModule.forRoot(),
        WavesModule,
        ButtonsModule,
        InputsModule,
        LayoutModule,
        FormsModule,
        MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatCardModule, 
    MatSelectModule,
    GoogleChartsModule
    ],
    declarations: [
        HomeComponent,
    MileStoneComponent,
    AboutUsComponent,
    DonateComponent,
    GovSchemesComponent,
    FeedComponent,
    FeedFormComponent,
    ContactFormComponent,
    FilterPipe,
    ResearchPaperComponent,
    WhereToGoComponent,
    DashboardComponent,
    AboutGddComponent,
    AppComponent,
    AlertComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
        MainNavComponent    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        { provide: LOCALE_ID, useValue: 'fr' }
      
        // provider used to create fake backend
       // fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
