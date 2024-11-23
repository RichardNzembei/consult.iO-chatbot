<template>
    <div class="flex justify-center items-center h-screen bg-green-50">
        <Chatbot />
    </div>
</template>
<script setup>
import { useHead } from '#app';

useHead({
    title: 'Crop Management - Consult.iO',
    meta: [
        { name: 'description', content: 'Detailed crop management advice for maximizing your yield.' },
        { property: 'og:title', content: 'Crop Management - Consult.iO' },
        { property: 'og:description', content: 'Expert crop management tips to improve farm productivity.' },
    ],
});
</script>
