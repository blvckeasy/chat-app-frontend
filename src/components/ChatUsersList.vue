<template>
    <ul class="users-list" v-for="userItem in users">
        <ChatUser :user="userItem" class="user-chat-active"/>
    </ul>
</template>

<script>
    import ChatUser from '@/components/ChatUser.vue'
    import { backendApiURL } from '@/../config.js'
    import { ref, onMounted } from 'vue';

    export default {
        components: {
            ChatUser,
        },
        setup() {
            const users = ref([])
            const access_token = JSON.parse(localStorage.getItem("token") || "{}").access_token

            if (!access_token) {
                return window.location.href = '/login'
            }

            onMounted(async () => {
                const repsonse = await fetch(backendApiURL + '/user/all', {
                    method: "GET",
                    headers: {
                        token: access_token
                    }
                });

                const { error, users: usersData } = await repsonse.json()
                if (error) return alert(error.message);

                console.log('usersData 123:',usersData);

                users.value = usersData
            })

            return {
                users,
            }
        }
    }
</script>

<style>
</style>