import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { io, Socket } from "socket.io-client";
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SocketService {
	socket!: Socket;
    token = localStorage.getItem("access_token");

    constructor() {
        if (!this.token) return;

        this.socket = io(environment.socketUrl, {
            extraHeaders: {
                token: this.token,
            }
        });
        this.socket.emit("error", (error: any) => {
            console.log(error);
        })
    }

    emit(event: string, data: any) {
        this.socket.emit(event, data);
    }

    on(event: string): Observable<any> {
        return new Observable((observer) => {
            this.socket.on(event, (data) => {
                observer.next(data);
            });

            return () => {
                this.socket.off(event);
            };
        });
    }
}
