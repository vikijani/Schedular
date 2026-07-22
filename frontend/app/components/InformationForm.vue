<script setup>
import { reactive, ref } from 'vue';

const informations = reactive({
  name: '',
  birthday: '',
  email: '',
  phone: ''
});

const isLoading = ref(false);
const message = ref('');

// Regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^09\d{9}$/;

async function handleSubmit() {
 
  if (!informations.name || !informations.birthday) {
    message.value = '❌ Name and Birthday are required!';
    setTimeout(() => message.value = '', 3000);
    return;
  }

  if (informations.email && !emailRegex.test(informations.email)) {
    message.value = '❌ Email is invalid!';
    setTimeout(() => message.value = '', 3000);
    return;
  }

  if (informations.phone && !phoneRegex.test(informations.phone)) {
    message.value = '❌ Phone number is invalid! (Format: 09xxxxxxxxx)';
    setTimeout(() => message.value = '', 3000);
    return;
  }

  isLoading.value = true;
  message.value = '';

  try {
    const res = await $fetch('/send', {
      baseURL: 'http://127.0.0.1:8000/api',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: {
        name: informations.name,
        birthday: informations.birthday,
        email: informations.email,
        phone: informations.phone,
      }
    });

    message.value = res.message || '✅ The form was submitted successfully!';
    
    informations.name = '';
    informations.birthday = '';
    informations.email = '';
    informations.phone = '';

  } catch (error) {
    console.error('Error:', error);
    if (error.response) {
      message.value = `❌ Error: ${error.response.data?.message || error.response.statusText}`;
    } else {
      message.value = '❌ Network error! Please try again.';
    }
  } finally {
    isLoading.value = false;
    setTimeout(() => message.value = '', 4000);
  }
}
</script>

<template>
  <form @submit.prevent="handleSubmit" 
        class="bg-white/95 backdrop-blur-[10px] p-10 max-sm:p-[30px] max-[480px]:p-[25px] 
               rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15),inset_0_0_0_1px_rgba(255,255,255,0.5),inset_0_0_0_2px_rgba(200,180,160,0.1)]
               border border-white/30 max-w-[450px] w-[90%] max-[480px]:w-[95%]
               transition-all duration-300 hover:shadow-[0_30px_80px_rgba(0,0,0,0.2),inset_0_0_0_1px_rgba(255,255,255,0.6)] 
               hover:-translate-y-1">
    
    <!-- Name -->
    <label class="block text-[12px] font-semibold text-[#4a3f3a] mb-1.5 tracking-wider uppercase opacity-80">
      *Name: <span class="opacity-50 text-xs">✨</span>
    </label>
    <input v-model="informations.name" type="text" required :disabled="isLoading"
           class="w-full px-4 py-3 mb-[18px] border-2 border-[#e8e0d8] rounded-xl text-[15px] 
                  bg-[#faf8f6] text-[#2d2a27] outline-none transition-all duration-300 font-sans
                  focus:border-[#f5a623] focus:bg-white focus:shadow-[0_0_0_4px_rgba(245,166,35,0.15)] focus:scale-[1.01]
                  hover:border-[#d4c8be] hover:bg-white
                  disabled:opacity-60 disabled:cursor-not-allowed">

    <!-- Birthday -->
    <label class="block text-[12px] font-semibold text-[#4a3f3a] mb-1.5 tracking-wider uppercase opacity-80">
      *Birthday: <span class="opacity-50 text-xs">✨</span>
    </label>
    <input v-model="informations.birthday" type="date" required :disabled="isLoading"
           class="w-full px-4 py-3 mb-[18px] border-2 border-[#e8e0d8] rounded-xl text-[15px] 
                  bg-[#faf8f6] text-[#2d2a27] outline-none transition-all duration-300 font-sans
                  focus:border-[#f5a623] focus:bg-white focus:shadow-[0_0_0_4px_rgba(245,166,35,0.15)] focus:scale-[1.01]
                  hover:border-[#d4c8be] hover:bg-white
                  disabled:opacity-60 disabled:cursor-not-allowed">

    <!-- Email -->
    <label class="block text-[12px] font-semibold text-[#4a3f3a] mb-1.5 tracking-wider uppercase opacity-80">
      Email: <span class="opacity-50 text-xs">✨</span>
    </label>
    <input v-model="informations.email" type="email" :disabled="isLoading"
           class="w-full px-4 py-3 mb-[18px] border-2 border-[#e8e0d8] rounded-xl text-[15px] 
                  bg-[#faf8f6] text-[#2d2a27] outline-none transition-all duration-300 font-sans
                  focus:border-[#f5a623] focus:bg-white focus:shadow-[0_0_0_4px_rgba(245,166,35,0.15)] focus:scale-[1.01]
                  hover:border-[#d4c8be] hover:bg-white
                  disabled:opacity-60 disabled:cursor-not-allowed">

    <!-- Phone -->
    <label class="block text-[12px] font-semibold text-[#4a3f3a] mb-1.5 tracking-wider uppercase opacity-80">
      Phone: <span class="opacity-50 text-xs">✨</span>
    </label>
    <input v-model="informations.phone" type="tel" :disabled="isLoading"
           class="w-full px-4 py-3 mb-[18px] border-2 border-[#e8e0d8] rounded-xl text-[15px] 
                  bg-[#faf8f6] text-[#2d2a27] outline-none transition-all duration-300 font-sans
                  focus:border-[#f5a623] focus:bg-white focus:shadow-[0_0_0_4px_rgba(245,166,35,0.15)] focus:scale-[1.01]
                  hover:border-[#d4c8be] hover:bg-white
                  disabled:opacity-60 disabled:cursor-not-allowed">

    <!-- Button -->
    <button type="submit" :disabled="isLoading"
            class="w-full py-[14px] bg-gradient-to-br from-[#f5a623] to-[#f7c948] 
                   border-none rounded-xl text-white text-[17px] font-bold 
                   cursor-pointer transition-all duration-300 tracking-wider uppercase
                   shadow-[0_4px_15px_rgba(245,166,35,0.3)] font-sans mt-2
                   hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_8px_25px_rgba(245,166,35,0.45)]
                   hover:bg-gradient-to-br hover:from-[#f7c948] hover:to-[#f5a623]
                   active:scale-95 active:shadow-[0_2px_10px_rgba(245,166,35,0.2)]
                   disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:transform-none">
      <span v-if="!isLoading">🎉 Send</span>
      <span v-else>⏳ Sending...</span>
    </button>

    <!-- Message -->
    <p v-if="message" 
       class="mt-[15px] p-3 rounded-lg text-center font-medium animate-[fadeIn_0.3s_ease]"
       :class="message.includes('✅') ? 'bg-[#d4edda] text-[#155724] border border-[#c3e6cb]' : 'bg-[#f8d7da] text-[#721c24] border border-[#f5c6cb]'">
      {{ message }}
    </p>
  </form>
</template>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Hide br */ 
form br {
  display: none;
}
</style>