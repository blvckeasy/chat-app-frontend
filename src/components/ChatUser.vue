<template>
    <li class="users">
        <img class="message-profile-image" :src="'http://localhost:8080/' + (user.profile_img_url || 'profile.jpg')" alt="profile image">
        <div class="title">
            <div class="user-title">
                <h3 class="fullname">{{ user.username }}</h3>
                <p class="message">{{ user.lastMessage.message?.slice(0, 20) + (user.lastMessage.message?.length > 32 ? "..." : "") }}</p>
            </div>
            <div class="time-count">
                <p class="time">{{ user.sendedDate }}</p>
                <div class="message-count">{{ user.newMessageCount }}</div>
            </div>
        </div>
    </li>
</template>

<script>
    export default {
      props: ['user'],
    }
</script>

<style>
    .users { 
        display: flex;
        align-items: end;
        height: 72px;
        width: 365px;
    }

    .users > .message-profile-image {
        width: 48px;
        height: 48px;
        border-radius: 50px;
        background: #8BABD8;
        margin: 0 16px;
        align-self: center;
    }

    .users > .title > .user-title > .fullname {
        color: #011627;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 20px;
    }

    .users > .title > .user-title > .message {
        color: #707991;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 18px;
    }

    .time-count {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: space-between;
        height: 35px;
    }

    .time-count > .time {
        color: #707991;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 16px;
    }

    .time-count > .message-count {
        width: 16px;
        height: 16px;
        background-color: lightgreen;
        border-radius: 50%;
        flex-shrink: 0;
        color: #FFF;
        text-align: center;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 16px;
    }

    .users > .title {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 260px;
        height: 45px;
    }

    .user-chat-active {
        background-color: #d0d0d0;
    }

    .users:hover {
        background-color: #d8d8d8;
    }

    .users:active {
        background-color: #9d9d9d;
    }
</style>

how to put the value obtained from the parameter in props to the src parameter of the image?