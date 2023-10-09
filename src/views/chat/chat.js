import ChatUser from '@/components/ChatUser.vue'
import { backendURL } from '@/../config.js'
import { socket } from '@/socket.js'


export default {
    components: {
        ChatUser,
    },
    data() {
        return {
            users: [],
            access_token: null
        }
    },
    setup() {
        return {
            user: {
                fullname: "islom abdurahmonov",
                lastMessage: "hello",
                sendedDate: "19:42",
                newMessageCount: 1,
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

        this.getUsers();
    },
    methods: {
        async getUsers() {
            const repsonse = await fetch(backendURL + '/user/all', {
                method: "GET",
                headers: {
                    token: this.access_token
                }
            });
            
            const { error, users } = await repsonse.json()
            if (error) return alert(error.message);

            console.log(users);
        },
    },
}