<script setup>
    import { useAuthStore } from './stores';
    const authStore = useAuthStore();
</script>

<template>
    <router-view></router-view>
</template>
