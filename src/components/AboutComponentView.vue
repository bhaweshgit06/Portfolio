<template>
  <section
    id="about"
    ref="sectionRef"
    class="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
  >
    <div class="max-w-6xl mx-auto">

      <!-- Header -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :enter="inView && { opacity: 1, y: 0 }"
        :transition="{ duration: 0.6 }"
      >
        <h2 class="text-4xl font-bold text-center mb-4">About Me</h2>
        <div class="w-20 h-1 bg-teal-600 mx-auto mb-6"></div>
      </div>

      <!-- Content -->
      <div class="grid md:grid-cols-2 gap-12">
        <div
          v-motion
          :initial="{ opacity: 0, x: -30 }"
          :enter="inView && { opacity: 1, x: 0 }"
          :transition="{ delay: 0.2 }"
        >
          <p class="text-lg text-stone-700">
            Passionate software developer with experience building modern apps.
          </p>
        </div>

        <div
          v-motion
          class="bg-white p-8 rounded-xl shadow"
          :initial="{ opacity: 0, x: 30 }"
          :enter="inView && { opacity: 1, x: 0 }"
          :transition="{ delay: 0.2 }"
        >
          <ul>
            <li v-for="fact in facts" :key="fact">▹ {{ fact }}</li>
          </ul>
        </div>
      </div>

      <!-- Features -->
      <div class="grid md:grid-cols-3 gap-8 mt-16">
        <div
          v-for="(feature, i) in features"
          :key="feature.title"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="inView && { opacity: 1, y: 0 }"
          :transition="{ delay: i * 0.15 }"
          class="bg-white p-6 rounded-xl shadow"
        >
          <component :is="feature.icon" class="w-8 h-8 mb-3 text-teal-600" />
          <h3 class="font-semibold">{{ feature.title }}</h3>
          <p class="text-sm text-stone-600">{{ feature.description }}</p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { useIntersectionObserver } from '@vueuse/core';
import { Code, Rocket, Users } from 'lucide-vue-next';

const sectionRef = ref(null);
const inView = ref(false);

useIntersectionObserver(
  sectionRef,
  ([{ isIntersecting }]) => {
    if (isIntersecting) inView.value = true;
  },
  { threshold: 0.2 }
);

const features = [
  { icon: Code, title: 'Clean Code', description: 'Maintainable code.' },
  { icon: Rocket, title: 'Fast Performance', description: 'Optimized apps.' },
  { icon: Users, title: 'Team Player', description: 'Great collaboration.' },
];

const facts = ['5+ years experience', '20+ projects', 'Open source contributor'];
</script>
