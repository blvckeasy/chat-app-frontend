<template>
    <div class="container">
        <h3 class="register-title">Register</h3>

        <span class="email-title">Email</span>
        <input type="text" placeholder="enter your email" class="email-input">

        <span class="password-title">Password</span>
        <input type="password" placeholder="enter your password" class="password-input">

        <span class="confirm-password-title">Confirm Password</span>
        <input type="password" placeholder="retry password" class="confirm-password-input">

        <div class="remember-me-box">
            <input type="checkbox" class="remember-me">
            <label for="remember-me" class="remember-me-label">Remember me</label>
        </div>

        <a href="/login" class="signin-link">Do you have already account?</a>

        <button class="send-button">Send</button>
    </div>
</template>

<script src="./register.js"></script>

<style src="./register.css"></style>