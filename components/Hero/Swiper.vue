<script lang="ts" setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper modules
import { Pagination, Autoplay } from 'swiper'
// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
// Use Swiper modules
const modules = [ Pagination, Autoplay ]
</script>

<template>
  <div class="max-w-8xl lg:px-6">
    <swiper :loop="true"
            :autoplay="{
              delay: 5000,
              disableOnInteraction: false,
            }"
            :pagination="{
              clickable: true,
            }"
            :modules="modules"
            class="aspect-[830/390] md:aspect-auto rounded-b-lg">
      <swiper-slide>
        <img src="https://via.placeholder.com/1392x668" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="https://via.placeholder.com/1392x668" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="https://via.placeholder.com/1392x668" alt="">
      </swiper-slide>
    </swiper>
  </div>
</template>
