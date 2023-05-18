<script setup>
import TheWelcome from "../components/TheWelcome.vue";
import Chapter from "../components/Chapter.vue";
import TableOfContent from "../components/TableOfContent.vue";
</script>

<template>
  <main class="container">
    <div class="left-menu">Left menu</div>
    <Chapter />
    <TableOfContent />
  </main>
</template>

<style>
.container {
  margin: 0.5rem;
  padding: 1rem;
  border-radius: 4rem;
  background-color: var(--color-background);

  display: grid;
  grid-template-columns: 0.67fr 2fr 1fr;
}


</style>
