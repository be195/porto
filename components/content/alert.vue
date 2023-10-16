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
    <component v-if="props.type" :is="components[props.type]" class="h-5 w-auto flex-shrink-0"></component>
    <ContentSlot :use="$slots.default" unwrap="p" />
  </div>
</template>

<style lang="postcss" scoped>
.warning {
  @apply border-amber-500 bg-amber-200 dark:bg-amber-950 dark:border-amber-800;
}

.info {
  @apply border-blue-500 bg-blue-200 dark:bg-blue-950 dark:border-blue-800;
}
</style>