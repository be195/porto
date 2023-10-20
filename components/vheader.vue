<script setup lang="ts">
const router = useRouter();
const notMain = ref(false);

function checkAndSwitch(route: any) {
  notMain.value = route.fullPath.split('#')[0] !== '/';
}

router.afterEach(checkAndSwitch);
checkAndSwitch(unref(router.currentRoute));
</script>

<template>
  <header :class="{
    'mb-8': true,
    'sticky': notMain,
    'top-0': true,
    'bg-zinc-100/75': true,
    'dark:bg-zinc-950/75': true,
    'backdrop-blur-md': true,
  }">
    <div class="max-w-5xl m-auto">
      <div class="px-4 py-2">
        <div
          v-if="notMain"
          @click="router.push({ path: '/' })"
          class="
            w-12
            h-12
            p-2
            -ml-3
            text-rose-600
            dark:text-rose-500
            cursor-pointer
            transition-colors
            relative
            group
          "
        >
          <div class="
            to-rose
            w-gradient
            blur-lg
            w-full
            h-full
            top-0
            left-0
            absolute
          "></div>
          <arrowlefticon class="z-0 group-hover:-translate-x-2 transition-transform"></arrowlefticon>
        </div>
        <div v-else class="w-12 h-12"></div>
      </div>
      <div :class="{
        'h-px': true,
        'bg-gradient-to-r': notMain,
        'bg-transparent': !notMain,
        'from-transparent': true,
        'via-zinc-200': true,
        'dark:via-zinc-900': true,
        'to-transparent': true
      }"></div>
    </div>
  </header>
</template>