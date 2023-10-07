<template>
    <button class="button">
        <slot></slot>
    </button>
</template>

<script></script>

<style>
    .button {
        display: flex;
        padding: 25px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        align-self: stretch;
        border-radius: 6px;
        background: var(--Primary, #4F46E5);
        box-shadow: 0px 30px 60px 0px rgba(79, 70, 229, 0.15);
        color: #FFF;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
    }
</style>