import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../connection.service';
import {  HostListener } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { locales } from './locales.values';
import {  Inject, LOCALE_ID } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { User } from '../_models';
import { UserService, AuthenticationService } from '../_services';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  currentUserName: User;
  currentUserSubscription: Subscription;
  //users: User[] = [];
  title = 'Angular Chatroom';
  users = [];

  locales = [];
  id: number;
  name: string;
  email: string;
  phone?: string;
  message: string;
  static user:string;
currentUrl = "";

contactForm: FormGroup;
disabledSubmitButton: boolean = true;
optionsSelect: Array<any>;

@HostListener('input') oninput() {

if (this.contactForm.valid) {
  this.disabledSubmitButton = false;
  }
}

constructor(private authenticationService: AuthenticationService,
  private userService: UserService,
  @Inject(LOCALE_ID) public locale: string,
  private router: Router,private fb: FormBuilder, private connectionService: ConnectionService
) {
  this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
    this.currentUserName = user;
    ContactFormComponent.user=this.currentUserName.username;
    this.name=ContactFormComponent.user; 
    console.log("firstnameinchat:"+ContactFormComponent.user);
    });
    
    this.contactForm = fb.group({
  'contactFormName': [ContactFormComponent.user, Validators.required],
  'contactFormEmail': ['', Validators.compose([Validators.required, Validators.email])],
  'contactFormSubjects': ['', Validators.required],
  'contactFormMessage': ['', Validators.required],
  'contactFormCopy': [''],
  });
  this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
    this.currentUserName = user;
    ContactFormComponent.user=this.currentUserName.username;
    this.name=ContactFormComponent.user; 
    console.log("firstnameinchat:"+ContactFormComponent.user);
    });
  console.log("firsrnameded:"+ContactFormComponent.user);
  //this.name=ContactFormComponent.user; 
}

ngOnInit() {
  this.locales = locales;

  this.router.events
  .pipe(filter(event => event instanceof NavigationEnd))
   .subscribe((event:NavigationEnd) => {
     this.currentUrl = this.router.url;
   });

}
onSubmit() {
  console.log("submit");
  this.connectionService.sendMessage(this.contactForm.value).subscribe(() => {
    alert('Your message has been sent.');
    this.contactForm.reset();
    this.disabledSubmitButton = true;
  }, error => {
    console.log('Error', error);
  });
}
}


