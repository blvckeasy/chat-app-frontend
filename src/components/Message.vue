<template>
    <li class='message-item' :class="className"> 
        <p class="message">{{ message.message }}</p>
        <div class="message-utils">
            <p class="time">{{ message.time }}</p>
            <span class="readable">{{ message.isMyMessage ? message.readable: "" }}</span>
        </div>
    </li>
</template>

<script>
    export default {
        props: ['message', 'className'],
    }
</script>

<style>
.message-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5px;
    padding-left: 13px;
    padding-right: 13px;
    border-radius: 12px;  
    font-size: 18px;
    color: black;
    border: white;
    background-color: white;
    width: 300px;
    height: 50px;
    margin: 10px 20px;
}

.message-utils {
    display: flex;
    flex-direction: row;
    align-self: self-end;
    font-size: 12px;
    width: 70px;
    justify-content: space-around;
}

.my-message {
    background-color: #78E378;
    color: white;
    align-self: self-end;
}
</style>



