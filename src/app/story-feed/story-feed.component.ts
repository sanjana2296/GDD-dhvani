import { Component, OnInit } from '@angular/core';
import { OrdersService } from "../shared/orders.service";
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { User } from '../_models';
import { UserService, AuthenticationService } from '../_services';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-story-feed',
  templateUrl: './story-feed.component.html',
  styleUrls: ['./story-feed.component.scss']
})
export class StoryFeedComponent implements OnInit {
  coffees = ["Americano", "Flat White", "Cappuccino", "Latte", "Espresso", "Machiato", "Mocha", "Hot Chocolate", "Tea"];
  coffeeOrder = [];
  currentUserName: User;
  currentUserSubscription: Subscription;
  //users: User[] = [];
  title = 'Angular Chatroom';
  users = [];
  static user:string;

addCoffee = coffee => this.coffeeOrder.push(coffee);
removeCoffee = coffee => {
    let index = this.coffeeOrder.indexOf(coffee);
    if (index > -1) this.coffeeOrder.splice(index, 1);
};
  constructor(public snackBar: MatSnackBar,public ordersService:OrdersService,private authenticationService: AuthenticationService,
    private userService: UserService) { 
      this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
        this.currentUserName = user;
        StoryFeedComponent.user=this.currentUserName.username;
        this.ordersService.form.value.userName = StoryFeedComponent.user;
        //this.userName=OrdersComponent.user;
        console.log("firstname:"+StoryFeedComponent.user);
        });
    }
  onSubmit() {
    this.ordersService.form.value.user = this.coffeeOrder;
    let data = this.ordersService.form.value;
    this.openSnackBar();
    //this.snackBar.open('Data Stored', 'Undo');
   this.ordersService.createUserOrder(data)
       .then(res => {
           /*do something here....
           maybe clear the form or give a success message*/
        
       });
}
openSnackBar() {
  this.snackBar.open("Data Stored", "close", {
    duration: 5000,
  });
}
  ngOnInit() {
  }
 
}
