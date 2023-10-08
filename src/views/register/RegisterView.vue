<template>
    <Box class="container">
        <PageTitle>Register</PageTitle>

        <InputTitle>Email</InputTitle>
        <Input type="text" @input="usernameChanged" placeholder="Enter your email"/>

        <InputTitle>Password</InputTitle>
        <Input type="password" @input="passwordChanged" placeholder="Enter your password"/>

        <InputTitle>Confirm Password</InputTitle>
        <Input type="password" @input="confirmPasswordChanged" placeholder="Retry password"/>

        <RememberMe/>
        <Link href="/login">Create account?</Link>
        <Button @click="sendData">Send</Button>
    </Box>
</template>

<script src="./register.js"></script>

<style src="./register.css" scoped></style>