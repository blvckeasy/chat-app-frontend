<template>
    <div class="container">
        <div class="menu">
            <div class="search-bar">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" class="fa-bar">
                    <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
                </svg>
                <input type="text" placeholder="Search" class="search-input">
            </div>
            <ul class="users-list">
                <ChatUser :user="user" class="user-chat-active"/>
                <ChatUser :user="user" />
                <ChatUser :user="user" />
                <ChatUser :user="user" />
                <ChatUser :user="user" />
                <ChatUser :user="user" />
                <ChatUser :user="user" />
                <ChatUser :user="user" />
                <ChatUser :user="user" />
                <ChatUser :user="user" />
                <ChatUser :user="user" />
                <ChatUser :user="user" />
                <ChatUser :user="user" />
            </ul>
        </div>
        <div class="chat">
            <div class="user-footer">
                <img src="https://picsum.photos/500/500" alt="profile image" class="user-info-profile-image">
                <div class="user-info-username-status">
                    <h3 class="user-info-username">David Moore</h3>
                    <p class="user-info-status">last seen 5 mins ago</p>
                </div>
            </div>
            <div class="chat-dashboard"></div>
        </div>
    </div>
</template>

<script src="./chat.js"></script>

<style src="./chat.css" scoped></style>