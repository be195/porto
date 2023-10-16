<template>
  <div class="grid grid-cols-3 gap-4 relative max-md:flex flex-col">
    <ContentSlot :use="$slots.default" unwrap="p" />
  </div>
</template>