<template>
    <Box class="container">
        <PageTitle>Login</PageTitle>

        <InputTitle>Username</InputTitle>
        <Input type="text" @input="usernameChanged" placeholder="Enter your username"/>

        <InputTitle>Password</InputTitle>
        <Input type="password" @input="passwordChanged" placeholder="Enter your password"/>

        <RememberMe @input="rememberMeChecked"/>
        <Link href="/register">Create account?</Link>
        <Button @click="sendData">Send</Button>
    </Box>
</template>

<script src="./login.js"></script>

<style src="./login.css" scoped></style>