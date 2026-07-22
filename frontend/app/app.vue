<script setup>

</script>

<template>
  <div class="min-h-screen flex flex-col justify-center items-center bg-gradient-custom font-sans p-5 relative overflow-hidden">
  
    <div class="absolute top-[10%] left-[5%] text-6xl opacity-15 animate-float max-md:text-4xl max-md:top-[5%] max-md:left-[3%]">
      🎈
    </div>
    <div class="absolute bottom-[10%] right-[5%] text-7xl opacity-15 animate-float-reverse max-md:text-4xl max-md:bottom-[5%] max-md:right-[3%]">
      🎉
    </div>

    <!-- Header -->
    <div class="text-center mb-[30px] animate-slide-down">
      <h1 class="text-[48px] max-md:text-[36px] max-sm:text-[28px] font-extrabold text-gradient-gold animate-shimmer mb-2.5 tracking-tight">
        Hi dude! 👋
      </h1>
      
      <div class="w-20 h-1 line-gradient-gold mx-2.5 my-auto rounded animate-expand-width"></div>
      
      <h2 class="text-[28px] max-md:text-[22px] max-sm:text-[18px] font-semibold text-[#4a3f3a] mt-2.5 tracking-wide">
        🎂 Enter your date of birth:
      </h2>
      
      <p class="text-base max-md:text-sm max-sm:text-xs text-[#8a7e76] mt-2 font-normal opacity-80 tracking-wide">
        Let's celebrate your special day!
      </p>
    </div>

    <InformationForm />

    <div class="mt-[30px] text-sm max-sm:text-xs text-[#8a7e76] font-medium opacity-70 tracking-wide animate-fade-in-up">
      ✨ We'll send you birthday surprises ✨
    </div>
  </div>
</template>

<style scoped>

</style>