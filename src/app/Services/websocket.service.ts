import { Injectable } from '@angular/core';
import {webSocket} from "rxjs/webSocket";

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
    private readonly URL = 'ws://localhost:8080';
    private webSocketSubject = webSocket<string>(this.URL);
    public webSocket$ = this.webSocketSubject.asObservable();

    send(data: object):void{
        this.webSocketSubject.next(JSON.stringify(data));
    }
  constructor() { }
}
