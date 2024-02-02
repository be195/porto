<script setup lang="ts">
const router = useRouter();
const { toc } = useContent();
const notMain = ref(false);

function checkAndSwitch(route: any) {
  notMain.value = route.fullPath.split('#')[0] !== '/';
}

router.afterEach(checkAndSwitch);
checkAndSwitch(unref(router.currentRoute));
</script>

<template>
  <div class="bg-zinc-100 text-zinc-700 dark:bg-zinc-950 dark:text-zinc-300 min-h-screen">
    <vheader></vheader>
    <main class="
      px-4
      max-w-5xl
      m-auto
    ">
      <div class="
        grid
        gap-8
        main-content
        max-md:flex
        max-md:flex-col-reverse
      ">
        <div class="
          prose
          prose-hr:border-zinc-900
          lg:prose-xl
          dark:prose-invert
          prose-zinc
          prose-rose
          prose-img:rounded-2xl
          prose-img:border
          prose-img:border-zinc-900
          prose-headings:text-rose-600
          dark:prose-headings:text-rose-500
          col-auto
        ">
          <ContentDoc />
        </div>
        <navigation v-if="toc && toc.links.length > 0" />
      </div>
    </main>
  </div>
</template>
