import PageTitle from '@/components/PageTitle.vue'
import Input from '@/components/Input.vue'
import RememberMe from '@/components/RememberMe.vue'
import Button from '@/components/Button.vue'
import Link from '@/components/Link.vue'
import InputTitle from '@/components/InputTitle.vue'
import Box from '@/components/Box.vue'
import { backendApiURL } from '@/../config.js'

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
      rememberMe: false
    }
  },
  // page ishlaganda ishlidi.
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      const data = await fetch(backendApiURL, {
        method: "GET",
      });
      console.log(await data.json());
    },
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
    async sendData() {
      console.log('hello')
      const response = await fetch(backendApiURL + '/auth/signin', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: this.username,
          password: this.password,
        })
      })

      const { user, token, error } = await response.json();

      if (error) return alert(error.message)

      console.log(user)
      console.log(token)
      
      localStorage.setItem("user", JSON.stringify(user))
      localStorage.setItem("token", JSON.stringify(token))
      window.location.href = '/chat'
    },
    rememberMeChecked (event) {
      this.rememberMe = event.target.checked
    }
  }
}
