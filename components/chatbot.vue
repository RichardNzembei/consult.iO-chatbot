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
    { sender: 'bot', text: 'Hello! I’m your farm consultation assistant. How can I assist you today?' }
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

    // Greeting responses
    if (lowerInput.includes('hi') || lowerInput.includes('hello')) {
        return 'Hi there! What can I help you with today?'
    }

    // Planting suggestions (for season-related questions)
    if (
        lowerInput.includes('plant') ||
        lowerInput.includes('what should i plant') ||
        lowerInput.includes('what should i grow') ||
        lowerInput.includes('this season') ||
        lowerInput.includes('seasonal crops') ||
        lowerInput.includes('recommend crops') ||
        lowerInput.includes('grow this season')
    ) {
        return 'I can suggest various crops depending on your climate and soil conditions. Can you tell me a bit about your climate and soil conditions?'
    }

    // Dry climate and sandy soil response
    if (lowerInput.includes('dry') && lowerInput.includes('sandy soil')) {
        return 'In dry and sandy areas, you can plant drought-tolerant crops like sorghum, millet, or beans. Would you like more details on any of these?'
    }

    // Millet care advice
    if (lowerInput.includes('millet')) {
        return 'Millet is drought-resistant and thrives in sandy soils. It needs minimal water and full sunlight. Water it deeply every 10-14 days. Would you like to know about fertilizers for millet?'
    }

    // Fertilizer advice
    if (lowerInput.includes('fertilizer')) {
        return 'Millet responds well to organic fertilizers like compost or manure. You can also use balanced granular fertilizers. Just don’t over-fertilize. Need help with pest control or irrigation?'
    }

    // Pest control advice
    if (lowerInput.includes('pest')) {
        return 'Common pests for millet include aphids and grasshoppers. You can use natural predators like ladybugs or neem oil. Regularly check your crops for pests. Would you like more tips on natural pest control?'
    }

    // Farewell messages
    if (lowerInput.includes('thank you') || lowerInput.includes('thanks')) {
        return 'You’re welcome! Feel free to ask anytime. Good luck with your farm!'
    }

    if (lowerInput.includes('goodbye') || lowerInput.includes('bye')) {
        return 'Goodbye! Have a great day, and happy farming!'
    }

    // Default fallback
    return "I’m not sure about that. Could you try asking something else or provide more details?"
}

</script>

<style scoped>
.chatbot-container {
    font-family: 'Arial', sans-serif;
}
</style>