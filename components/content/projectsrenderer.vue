<template>
  <div class="grid grid-cols-3 gap-4 relative max-md:flex flex-col">
    <ContentList path="/projects" v-slot="{ list }">
      <project
        v-for="project in list"
        :key="project._path"
        :name="project.title"
        :image="project.thumb"
        :link="project._path"
      />
    </ContentList>
  </div>
</template>