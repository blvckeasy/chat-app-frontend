import { reactive } from "vue";
import { io } from "socket.io-client";
import { backendApiURL, productionBackendApiURL } from '../config.js'

const state = reactive({
  connected: false,
  fooEvents: [],
  barEvents: [],
});
const URL = process.env.NODE_ENV === "production" ? productionBackendApiURL : backendApiURL;
var socket;


async function main () {
    const access_token = JSON.parse(localStorage.getItem("token") || "{}").access_token

    if (!access_token) {
        return window.location.href = '/login'
    }

    socket = io(`${URL}?token=${access_token}`)

    socket.on("connect", () => {
        console.log('connected')
        state.connected = true;
    });

    socket.on("disconnect", () => {
        state.connected = false;
        console.log('disconnected')
    });

    socket.on("error", (error) => {
      console.log(error)
    });

    socket.emit('test', 123)
    socket.on('working', (data) => {
        console.log(data)
    })
}

main();
export { socket, state };