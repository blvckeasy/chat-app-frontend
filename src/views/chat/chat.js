import ChatUser from '@/components/ChatUser.vue'
import Message from '@/components/Message.vue'
import MessagesList from '@/components/MessagesList.vue'
import ChatUsersList from '@/components/ChatUsersList.vue'
import { socket } from '@/socket.js'


export default {
    components: {
        ChatUser,
        Message,
        MessagesList,
        ChatUsersList,
    },
    data() {
        return {
            access_token: null
        }
    },
    setup() {
        return {
            user: {
                fullname: "blvckeasy",
                surname: "islom abdurahmonov",
                lastMessage: "hello world",
            }
        }
    },
    mounted() {
        const access_token = JSON.parse(localStorage.getItem("token") || "{}").access_token

        if (!access_token) {
            return window.location.href = '/login'
        }
        this.access_token = access_token

        socket.connect();
    },
}