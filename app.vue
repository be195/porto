<script setup lang="ts">
const router = useRouter();
const displayBack = ref(false);

function checkAndSwitch(route: any) {
  displayBack.value = route.fullPath.split('#')[0] !== '/';
}

router.afterEach(checkAndSwitch);
checkAndSwitch(unref(router.currentRoute));
</script>

<template>
  <div class="bg-zinc-100 dark:bg-zinc-900 min-h-screen p-5">
    <div class="max-w-[100ch] d m-auto pt-8">
      <header class="mb-8 h-12">
        <div
          v-if="displayBack"
          @click="router.back()"
          class="rounded-full w-12 h-12 p-2 -ml-3 text-rose-600 cursor-pointer hover:dark:bg-zinc-800 hover:bg-zinc-200 transition-colors"
        >
          <arrowlefticon></arrowlefticon>
        </div>
      </header>
      <main
        class="
          prose
          lg:prose-xl
          dark:prose-invert
          prose-rose
          prose-img:rounded-lg
          m-auto
          prose-img:border
          prose-img:border-rose-500
          prose-headings:text-rose-500
        "
      >
        <NuxtPage />
      </main>
    </div>
  </div>
</template>
