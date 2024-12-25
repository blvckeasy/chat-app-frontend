import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { LinkComponent } from '../../components/link/link.component';
import { IUser } from '../../interfaces/user.interfaces';
import { UserService } from '../../services/user.service';
import { MessagesService } from '../../services/messages.service';
import { SocketService } from "../../services/socket.service";
import { IMessage } from '../../interfaces/message.interfaces';
import { environment } from '../../environment/environment';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
    selector: 'chat',
    standalone: true,
    imports: [
        LinkComponent,
        FormsModule,
    ],
    templateUrl: './chat.component.html',
    styleUrl: './chat.component.css',
    providers: [
        UserService,
        MessagesService,
        Router,
    ]
})
export class ChatComponent implements OnInit {
    @ViewChild('chatContainer') chatContainer!: ElementRef;
    @ViewChild('messageInput')  messageInput!: ElementRef;

    user = JSON.parse(localStorage.getItem("user") || "{}") as IUser;
    token = localStorage.getItem("access_token")
    active_user!: IUser;
    users: IUser[] = [];
    messages: IMessage[] = []
    backendPhotoUrl: string = environment.backendPhotoUrl;
    messageValue: string | null = null;

    constructor (
        private userService: UserService,
        private messageService: MessagesService,
        private router: Router,
        private socketService: SocketService,
    ) {}

    async ngOnInit(): Promise<void> {
        if (!this.token) {
            this.router.navigate(['/signup']);
            return;
        }

        this.userService
            .getUsers()
            .subscribe((data) => {
                this.users = data;
            })

        this.socketService.on("new:message")
            .subscribe((data) => this.newMessageArrived(data));
    }

    async sendMessage() {
        if (!this.messageValue) return;
        if (!this.active_user) return;
        
        const data = {
            to_user_id: this.active_user._id,
            message: this.messageValue,
        }
        this.socketService.emit("new:message", data);
        this.clearMessageInput()
    }

    async newMessageArrived (message: IMessage) {
        const { from_user_id, to_user_id } = message;
        
        if ([from_user_id, to_user_id].includes(this.active_user?._id)) {
            this.messages.push(message);
        }

        // message jo'natgan odamni scroli pastga bo'lishi uchun
        if (from_user_id == this.user._id) {
            this.scrollToBottom();
        }
    }

    async chatSelected(user: IUser) {
        this.active_user = user;
        
        this.messageService
            .getMessages(user._id)
            .subscribe((data) => {
                this.messages = data;
            })
    }

    scrollToBottom (): void {
        const container = this.chatContainer.nativeElement;
        container.scrollTop = container.scrollHeight;
    }

    clearMessageInput (): void {
        const input = this.messageInput.nativeElement;
        input.value = '';
    }
}
