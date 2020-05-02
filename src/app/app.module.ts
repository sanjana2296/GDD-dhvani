
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
import {NgxPaginationModule} from 'ngx-pagination'; 
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
//import { ChatroomComponent} from './chatroom/chatroom.component';
//import { PageNotFoundComponent} from './page-not-found/page-not-found.component';
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
  import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
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
import { ChatroomComponent } from './chatroom/chatroom.component';
import { BenchmarkComponent } from './benchmark/benchmark.component';
import { MilestoneForNormalChildComponent } from './milestone-for-normal-child/milestone-for-normal-child.component';
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
import{TipsForParentsComponent} from './tips-for-parents/tips-for-parents.component';
import { GstAddComponent } from './gst-add/gst-add.component';
import { GstGetComponent } from './gst-get/gst-get.component';
import { GstEditComponent } from './gst-edit/gst-edit.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { BusinessService } from './business.service';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import { Picture } from './components/picture/picture';
import { PictureUpload } from './components/picture_upload/picture_upload';
import { CosmicConfigService } from './services/cosmic_config';
import { OrdersComponent } from './orders/orders.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrdersService } from "./shared/orders.service";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { environment } from "src/environments/environment";
import { IonicStorageModule } from '@ionic/storage';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { RouterModule, RouteReuseStrategy, Routes } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { StoryFeedComponent } from './story-feed/story-feed.component';
import { StoryComponent } from './story/story.component';
import { QuicknotesComponent } from './quicknotes/quicknotes.component';
import { EmojiPickerModule } from 'ng-emoji-picker';
@NgModule({
    imports: [
        
        BrowserModule,
        AppRoutingModule,
        
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
        ReactiveFormsModule,
        HttpClientModule,
        routing,
        MDBBootstrapModule.forRoot(),
        WavesModule,
        ButtonsModule,
        InputsModule,
        EmojiPickerModule,
        LayoutModule,
        FormsModule,
      //  ChatroomComponent,
        //PageNotFoundComponent,
        MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatCardModule, 
    MatTabsModule,
    MatTableModule,
    NgxPaginationModule,
    MatSelectModule,
    MatSnackBarModule,
    MatButtonModule,
MatCheckboxModule,
MatCardModule,
MatInputModule,
    BrowserAnimationsModule,
    GoogleChartsModule,
    SlimLoadingBarModule,
    InfiniteScrollModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
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
        MainNavComponent ,
        ChatroomComponent ,
        BenchmarkComponent ,
        MilestoneForNormalChildComponent ,
        VaccinateYourChildComponent,
        DoctorVisitComponent,
        ThingsToKnowComponent,
        InspirationComponent,
        DisclaimerComponent,
        WhatAreMilestonesComponent,
        CheckYourMilestonesComponent ,
        RehabilateComponent ,
        PhysiotherapyComponent ,
        OccupationaltherapyComponent ,
        SpeechtherapyComponent,
        AdditionalmonetaryComponent,
        BecomeDonorComponent,
        DonorSheetComponent,
        AcknowledgementComponent,
        TipsForParentsComponent,
        GstAddComponent,
        GstGetComponent,
        GstEditComponent,
        PhotoGalleryComponent,
        Picture,
        PictureUpload,
        OrdersComponent,
        OrderListComponent,
        StoryFeedComponent,
        StoryComponent,
        QuicknotesComponent],
       
        
    providers: [BusinessService,CosmicConfigService,OrdersService,
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        { provide: LOCALE_ID, useValue: 'fr' },
        StatusBar,
        SplashScreen,
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
      
        // provider used to create fake backend
       // fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
