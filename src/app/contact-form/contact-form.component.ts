import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../connection.service';
import {  HostListener } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { locales } from './locales.values';
import {  Inject, LOCALE_ID } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  locales = [];
  id: number;
  name: string;
  email: string;
  phone?: string;
  message: string;

currentUrl = "";

contactForm: FormGroup;
disabledSubmitButton: boolean = true;
optionsSelect: Array<any>;

@HostListener('input') oninput() {

if (this.contactForm.valid) {
  this.disabledSubmitButton = false;
  }
}

constructor(
  @Inject(LOCALE_ID) public locale: string,
  private router: Router,private fb: FormBuilder, private connectionService: ConnectionService
) {this.contactForm = fb.group({
  'contactFormName': ['', Validators.required],
  'contactFormEmail': ['', Validators.compose([Validators.required, Validators.email])],
  'contactFormSubjects': ['', Validators.required],
  'contactFormMessage': ['', Validators.required],
  'contactFormCopy': [''],
  }); }

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


