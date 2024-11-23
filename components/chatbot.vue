<template>
    <div class="chatbot-container bg-gray-100 p-4 rounded shadow-lg max-w-md mx-auto">
        <div class="chatbot-header bg-green-600 text-white p-2 rounded-t">
            <h2 class="text-lg font-bold">Farm Consultation Chatbot</h2>
        </div>
        <div class="chatbot-messages overflow-y-auto max-h-64 p-4 space-y-2">
            <div v-for="(message, index) in messages" :key="index"
                :class="{ 'text-right': message.sender === 'user', 'text-left': message.sender === 'bot' }" class="my-2">
                <div :class="{
                    'bg-blue-500 text-white p-2 rounded-lg inline-block': message.sender === 'user',
                    'bg-gray-300 text-black p-2 rounded-lg inline-block': message.sender === 'bot'
                }">
                    {{ message.text }}
                </div>
            </div>
        </div>
        <form @submit.prevent="sendMessage" class="mt-4 flex">
            <input v-model="userInput" type="text" placeholder="Ask about farming..."
                class="border rounded-l p-2 flex-grow" />
            <button type="submit" class="bg-green-600 text-white p-2 rounded-r hover:bg-green-700">
                Send
            </button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const messages = ref([
    { sender: 'bot', text: 'Hi! I am your farm consultation chatbot. How can I help you today?' }
])


const userInput = ref('')

const sendMessage = () => {
    if (userInput.value.trim() === '') return


    messages.value.push({ sender: 'user', text: userInput.value })


    const response = getBotResponse(userInput.value)
    messages.value.push({ sender: 'bot', text: response })

    userInput.value = ''
}


const getBotResponse = (input) => {
    const lowerInput = input.toLowerCase()

    if (lowerInput.includes('fertilizer')) {
        return 'For optimal results, use organic fertilizers like compost or manure.'
    } else if (lowerInput.includes('pest')) {
        return 'For pest control, you can use neem oil or natural predators like ladybugs.'
    } else if (lowerInput.includes('soil')) {
        return 'Healthy soil is key! Perform a soil test and add nutrients as needed.'
    } else if (lowerInput.includes('water')) {
        return 'Ensure regular watering early in the morning to minimize evaporation.'
    } else {
        return "I'm not sure about that. Can you rephrase your question?"
    }
}
</script>

<style scoped>
.chatbot-container {
    font-family: 'Arial', sans-serif;
}
</style>