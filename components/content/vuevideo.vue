<script setup>
defineProps([ 'src' ]);
</script>

<template>
  <video :src="[src]" autoplay muted controls loop class="rounded-lg w-full border-2 border-rose-500"></video>
</template>