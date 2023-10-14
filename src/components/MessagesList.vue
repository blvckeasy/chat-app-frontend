<template>
    <ul class="chat-dashboard" ref="chatDashboardRef">
        <Message :message="message" :className="myMessage"/>
        <Message :message="message"/>
    </ul>
</template>

<script>
    import Message from '@/components/Message.vue';
    import { ref } from 'vue'

    export default {
        components: {
            Message,
        },
        setup() {
            const users = ref([])
            const access_token = JSON.parse(localStorage.getItem("token") || "{}").access_token

            if (!access_token) {
                return window.location.href = '/login'
            }

            return {
                user: {
                    fullname: "islom"
                },
                message: {
                    message: "nimadur",
                    time: "19:99",
                    isMyMessage: true
                },
                myMessage: "my-message"
            }
        
        }
    }
</script>

<style scoped>
    .chat-dashboard {
        display: flex;
        flex-direction: column;
        background-image: url('https://blog.1a23.com/wp-content/uploads/sites/2/2020/02/Desktop.png');
        height: 94%;
        background-repeat: no-repeat;
        background-size: auto 750px;
        border: 1px solid orange;
    }
</style>