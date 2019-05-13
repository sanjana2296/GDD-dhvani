import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
providedIn: 'root'
})
export class ConnectionService {
url: string = 'http://192.168.43.15:3000/send';
constructor(private http: HttpClient) { }

sendMessage(messageContent: any) {
  console.log("json"+JSON.stringify(messageContent));
  return this.http.post(this.url,
  JSON.stringify(messageContent),
  { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' });

}
}