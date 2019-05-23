
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import {  LOCALE_ID, Inject } from '@angular/core';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import {ChatroomComponent} from '../chatroom/chatroom.component';
import {ContactFormComponent} from '../contact-form/contact-form.component';
import { User } from '../_models';
import { UserService, AuthenticationService } from '../_services';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {
  currentUser: User;
  currentUserSubscription: Subscription;
  users: User[] = [];
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(@Inject(LOCALE_ID) protected localeId: string, private router: Router,private breakpointObserver: BreakpointObserver,private authenticationService: AuthenticationService,
    private userService: UserService) {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
      this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
     this.currentUser = user;
     ChatroomComponent.user=this.currentUser.firstName;
     ContactFormComponent.user=this.currentUser.firstName;
console.log("firstname:"+ChatroomComponent.user);
   }); }
   
   ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription.unsubscribe();
}

deleteUser(id: number) {
    this.userService.delete(id).pipe(first()).subscribe(() => {
        this.loadAllUsers()
    });
}

private loadAllUsers() {
    this.userService.getAll().pipe(first()).subscribe(users => {
        this.users = users;
    });
}

  
logout() {
  this.authenticationService.logout();
  this.router.navigate(['/login']);
}
}
