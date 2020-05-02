import { Component, OnInit } from '@angular/core';
import { OrdersService } from "../shared/orders.service";

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {
p:string;
  constructor(private ordersService: OrdersService) { }
  ngOnInit() {
    this.getUserOrders();
  }

  coffeeOrders;

  getUserOrders = () =>
    this.ordersService
      .getUserOrders()
      .subscribe(res => (this.coffeeOrders = res));

  deleteOrder = data => this.ordersService.deleteUserOrder(data);

  markCompleted = data => this.ordersService.updateUserOrder(data);

}
