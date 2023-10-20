<script setup lang="ts">
const props = defineProps([ 'name', 'image', 'link' ]);

const img = computed(() => props.image ? '/images/thumbs/' + props.image : '/images/thumbs/personal.png')
</script>

<template>
  <NuxtLink :to="link">
    <div class="
      z-0
      border
      rounded-2xl
      border-zinc-900
      hover:border-zinc-800
      relative
      group
      aspect-video
      hover:scale-110
      max-md:hover:scale-100
      hover:z-10
      transition-all
      not-prose
    ">
      <div class="
        absolute
        top-0
        left-0
        -z-10
        w-gradient
        blur-3xl
        w-full
        h-full
      "></div>

      <div class="
        overflow-hidden
        rounded-2xl
        z-0
        relative
        w-full
        h-full
        top-0
        left-0
      ">
        <img :src="img" :alt="name" class="object-cover w-full h-full z-0 top-0 left-0 absolute">
        <div class="
          bg-gradient-to-b
          from-transparent
          to-zinc-950
          absolute
          bottom-0
          w-full
          py-4
          px-6
          text-lg
          translate-y-full
          group-hover:translate-y-0
          transition-transform
          z-10
          text-zinc-200
        ">
          {{ name }}
        </div>
      </div>
    </div>
  </NuxtLink>
</template>