<template>
    <div class="container">
        <h3 class="login-title">Login</h3>

        <span class="email-title">Email</span>
        <input type="text" placeholder="enter your email" class="email-input">

        <span class="password-title">Password</span>
        <input type="password" placeholder="enter your password" class="password-input">

        <div class="remember-me-box">
            <input type="checkbox" class="remember-me">
            <label for="remember-me" class="remember-me-label">Remember me</label>
        </div>

        <a href="/register" class="signup-link">Create account?</a>

        <button class="send-button">Send</button>
    </div>
</template>

<script src="./login.js"></script>

<style src="./login.css"></style>