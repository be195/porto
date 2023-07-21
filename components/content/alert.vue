<script setup lang="ts">
const props = defineProps({
  type: { type: String }
});

const components = {
  warning: resolveComponent('exclamationtriangleicon'),
  info: resolveComponent('infocircledicon')
};
</script>

<template>
  <div :class="'py-2 px-4 gap-4 flex flex-row border rounded-lg items-center ' + props.type">
    <component v-if="props.type" :is="components[props.type]" class="h-5 w-auto"></component>
    <ContentSlot :use="$slots.default" unwrap="p" />
  </div>
</template>

<style lang="postcss" scoped>
.warning {
  @apply border-rose-500 bg-rose-200 dark:bg-rose-800;
}

.info {
  @apply border-blue-500 bg-blue-200 dark:bg-blue-800;
}
</style>