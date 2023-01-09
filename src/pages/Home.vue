<script setup>
    window.onload = event => {
        document.getElementById('env').innerHTML = import.meta.env.VITE_KEY_TEST;
    }
</script>
<template>
    <div class="mx-auto container mt-10">
        <div class="">
            <h1>iDEA.org.uk</h1>
            <p id="env"></p>
        </div>
    </div>
</template>