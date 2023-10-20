<script setup>
defineProps([ 'src' ]);
</script>

<template>
  <video :src="[src]" autoplay muted controls loop class="rounded-2xl w-full"></video>
</template>