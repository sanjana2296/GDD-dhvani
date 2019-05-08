
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

import { User } from '../_models';
import { UserService, AuthenticationService } from '../_services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentUser: User;
    currentUserSubscription: Subscription;
    users: User[] = [];

  constructor( private authenticationService: AuthenticationService,
    private userService: UserService
)
 {
   this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
  this.currentUser = user;
}); }

  ngOnInit() {  console.log("in init"); //this.loadAllUsers();
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
}
