<template>
    <div class="flex items-center justify-center min-h-screen">
        <div class="text-center">
            <p class="text-lg">Authenticating...</p>
            <div class="spinner mt-4"></div>
        </div>
    </div>
</template>


<script setup>
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAuthStore } from '../store/authStore'

const route = useRoute()
const router = useRouter()
const authStore = useAuthStore()

onMounted(async () => {
    try {
        const code = route.query.code
        if (code) {
            await authStore.login(code)
            router.push('/dashboard')
        } else {
            router.push('/')
        }
    } catch (error) {
        console.error('Authentication failed:', error)
        router.push('/')
    }
})
</script>

<style scoped>
.spinner {
    border: 4px solid #f3f3f3;
    border-top: 4px solid #3498db;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>