import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import {ChatroomComponent} from '../chatroom/chatroom.component';
import { User } from '../_models';
import {OrdersComponent} from '../orders/orders.component';
import { UserService, AuthenticationService } from '../_services';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import { NavigationCancel,
        Event,
        NavigationEnd,
        NavigationError,
        NavigationStart,
        Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  currentUser: User;
  currentUserSubscription: Subscription;
  users: User[] = [];

constructor( private authenticationService: AuthenticationService,
  private userService: UserService,private _loadingBar: SlimLoadingBarService, private _router: Router
)
{
 this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
this.currentUser = user;
ChatroomComponent.user=this.currentUser.firstName;
OrdersComponent.user=this.currentUser.firstName;
console.log("firstname:"+ChatroomComponent.user);
}); 
 this._router.events.subscribe((event: Event) => {
      this.navigationInterceptor(event);
    });}

ngOnInit() {  console.log("in init"); this.loadAllUsers();
}
ngOnDestroy() {
  console.log("in destroy");
  // unsubscribe to ensure no memory leaks
  this.currentUserSubscription.unsubscribe();
}

deleteUser(id: number) {
  this.userService.delete(id).pipe(first()).subscribe(() => {
      this.loadAllUsers()
  });
}

private loadAllUsers() {
console.log("in users");
  this.userService.getAll().pipe(first()).subscribe(users => {
      this.users = users;
  });
}

private navigationInterceptor(event: Event): void {
  if (event instanceof NavigationStart) {
    this._loadingBar.start();
  }
  if (event instanceof NavigationEnd) {
    this._loadingBar.complete();
  }
  if (event instanceof NavigationCancel) {
    this._loadingBar.stop();
  }
  if (event instanceof NavigationError) {
    this._loadingBar.stop();
  }
}
}

