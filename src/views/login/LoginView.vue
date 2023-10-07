<template>
    <Box class="container">
        <PageTitle>Login</PageTitle>

        <InputTitle>Email</InputTitle>
        <Input type="text" placeholder="Enter your email"/>

        <InputTitle>Password</InputTitle>
        <Input type="password" placeholder="Enter your password"/>

        <RememberMe/>
        <Link href="/register">Create account?</Link>
        <Button>Send</Button>
    </Box>
</template>

<script src="./login.js"></script>

<style src="./login.css" scoped></style>