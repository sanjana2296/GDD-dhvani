import { Component, OnInit } from '@angular/core';

import Chatkit from '@pusher/chatkit-client';
import axios from 'axios';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  title = 'Angular Chatroom';
  messages = [];
  users = [];
  currentUser: any;

  _username: string = '';
  get username(): string {
    return this._username;
  }
  set username(value: string) {
    this._username = value;
  }

  _message: string = '';
  get message(): string {
    return this._message;
  }
  set message(value: string) {
    this._message = value;
  }

  sendMessage() {
    const { message, currentUser } = this;
    currentUser.sendMessage({
      text: message,
      roomId: '31218872',
    });
    this.message = '';
  }

  addUser() {
    const { username } = this;
    axios.post('https://us1.pusherplatform.io/services/chatkit/v2/:b3f948e1-58b3-41cd-b631-c88b1e8bf368/users', { username })
      .then(() => {
        const tokenProvider = new Chatkit.TokenProvider({
          url: 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/b3f948e1-58b3-41cd-b631-c88b1e8bf368/token'
        });

        const chatManager = new Chatkit.ChatManager({
          instanceLocator: 'v1:us1:b3f948e1-58b3-41cd-b631-c88b1e8bf368',
          userId: username,
          tokenProvider
        });

        return chatManager
          .connect()
          .then(currentUser => {
            currentUser.subscribeToRoom({
              roomId: '31218872',
              messageLimit: 100,
              hooks: {
                onMessage: message => {
                  this.messages.push(message);
                },
                onPresenceChanged: (state, user) => {
                  this.users = currentUser.users.sort((a, b) => {
                    if (a.presence.state === 'online') return -1;

                    return 1;
                  });
                },
              },
            });

            this.currentUser = currentUser;
            this.users = currentUser.users;
          });
      })
        .catch(error => console.error(error))
  }

  ngOnInit() {
  }

}

