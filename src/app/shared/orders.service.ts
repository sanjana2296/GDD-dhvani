import { Injectable } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { AngularFirestore } from "@angular/fire/firestore";
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { User } from '../_models';
import { UserService, AuthenticationService } from '../_services';
import { NavigationCancel,
  Event,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router } from '@angular/router';
import { formArrayNameProvider } from "@angular/forms/src/directives/reactive_directives/form_group_name";

@Injectable({
  providedIn: "root"
})
export class OrdersService {
  currentUser: User;
  some:String;
  currentUserSubscription: Subscription;
  constructor(private firestore: AngularFirestore, private authenticationService: AuthenticationService,
    private userService: UserService, private _router: Router
  )
  {
   this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
  this.currentUser = user;
  this.some=this.currentUser.firstName;
  
 // OrdersComponent.user=this.currentUser.firstName;
  console.log("firstname:"+this.some);
  }); 
   this._router.events.subscribe((event: Event) => {
      //  this.navigationInterceptor(event);
      });}

  form = new FormGroup({
    userName: new FormControl(""),
    parentType: new FormControl(null),
    DOB: new FormControl(""),
    age: new FormControl(""),
    NoOfChildren: new FormControl(""),
    Marital: new FormControl(""),
    childName: new FormControl(""),
    childDOB: new FormControl(""),
    childage: new FormControl(""),
    symtoms: new FormControl(""),
    city: new FormControl(""),
    state: new FormControl(""),
    country: new FormControl(""),
    completed: new FormControl(false)
  });

  //Firestore CRUD actions example
  createCoffeeOrder(data) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("coffeeOrders")
        .add(data)
        .then(res => {}, err => reject(err));
    });
  }
  createUserOrder(data) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("UserOrders")
        .add(data)
        .then(res => {}, err => reject(err));
    });
  }

  updateCoffeeOrder(data) {
    return this.firestore
      .collection("coffeeOrders")
      .doc(data.payload.doc.id)
      .set({ completed: true }, { merge: true });
  }

  getCoffeeOrders() {
    return this.firestore.collection("coffeeOrders").snapshotChanges();
  }

  deleteCoffeeOrder(data) {
    return this.firestore
      .collection("coffeeOrders")
      .doc(data.payload.doc.id)
      .delete();
  }
  updateUserOrder(data) {
    return this.firestore
      .collection("UserOrders")
      .doc(data.payload.doc.id)
      .set({ completed: true }, { merge: true });
  }

  getUserOrders() {
    return this.firestore.collection("UserOrders").snapshotChanges();
  }

  deleteUserOrder(data) {
    return this.firestore
      .collection("UserOrders")
      .doc(data.payload.doc.id)
      .delete();
  }
  
}