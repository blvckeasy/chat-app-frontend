import PageTitle from '@/components/PageTitle.vue'
import Input from '@/components/Input.vue'
import RememberMe from '@/components/RememberMe.vue'
import Button from '@/components/Button.vue'
import Link from '@/components/Link.vue'
import InputTitle from '@/components/InputTitle.vue'
import Box from '@/components/Box.vue'
import { backendURL } from '@/../config.js'


export default {
    components: {
        PageTitle,
        Input,
        RememberMe,
        Button,
        Link,
        InputTitle,
        Box
    },
    data() {
        return {
            username: '',
            password: '',
            confirm_password: '',
        }
    },
    methods: {
        usernameChanged(event) {
          if (event.target.value) {
            this.username = event.target.value;
          }
        },
        passwordChanged(event) {
          if (event.target.value) {
            this.password = event.target.value;
          }
        },
        confirmPasswordChanged(event) {
          if (event.target.value) {
            this.confirm_password = event.target.value;
          }
        },
        
        async sendData() {
            const response = await fetch(backendURL + '/auth/signup', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: this.username,
                    password: this.password,
                    confirm_password: this.confirm_password
                })
            })

            const { user, token, error } = await response.json();

            if (error) return alert(error.message);
            console.log(user)
            console.log(token)

            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('token', JSON.stringify(token));
            window.location.href = '/'
        }
    },
}