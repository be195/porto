<script setup lang="ts">
const { toc } = useContent();

/*
console.log(toc);

const currentlyActiveToc: Ref<string | null> = ref(null);

let observer: IntersectionObserver | undefined;

function tocUpdate() {
  console.log('toc update');
  observer?.disconnect();

  document.querySelectorAll('div.prose h2[id], div.prose h3[id]')
    .forEach(title => observer?.observe(title));
}

onMounted(() => {
  observer = new IntersectionObserver(entries =>
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      if (entry.isIntersecting)
        currentlyActiveToc.value = id;
    })
  );

  tocUpdate();
});

onBeforeUnmount(() => {
  observer?.disconnect();
  observer = undefined;
});
*/
</script>

<template>
  <nav class="
    text-lg
    sticky
    max-md:static
    top-20
    col-auto
    h-fit
    p-8
    border
    border-zinc-800
    bg-zinc-900
    rounded-2xl
  ">
    <h3 class="mb-2 font-bold">Table of Contents</h3>

    <ul v-if="toc && toc.links" class="text-rose-500">
      <li v-for="link of toc.links" :key="link.id">
        <a :href="`#${link.id}`">{{ link.text }}</a>
      </li>
    </ul>
  </nav>
</template>