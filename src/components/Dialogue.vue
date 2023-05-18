<template>
  <div class="dialogue">
    <div class="dialogue-header">
      <div class="dialogue-header-icon">
        <span class="material-symbols-outlined">groups</span>
      </div>
      <div class="dialogue-header-main">
        <h3 class="dialogue-title">{{ dialogueBody.title }}</h3>
        <div class="dialogue-description">
          <p>{{ dialogueBody.description }}</p>
        </div>
      </div>
      <div class="dialogue-header-actions">
        <a href="#" class="btn">
          <span class="material-symbols-outlined">play_arrow</span>
        </a>
        <p>Play</p>
      </div>
    </div>
    <div class="dialogue-main">
      <div class="dialogue-line" v-for="line in dialogueBody.lines" v-bind:key="line.lineNumber">
        <div class="dialogue-line-speaker">{{ line.speaker }}</div>
        <div class="dialogue-line-message">{{ line.message }}</div>
      </div>
    </div>
    <Transition>
    <div class="dialogue-vocabulary" v-if="isVisible.value">
      <div class="dialogue-vocabulary-line" v-for="word in dialogueBody.vocabulary" v-bind:key="word">
        <p>{{ word.danish }}</p>
        <p>{{ word.english }}</p>
      </div>
    </div>
    </Transition>
    <a class="btn btn-show" @click="showHideVocabulary(isVisible)">
      <p>{{ isVisible.text}} vocabulary</p>
    </a>
  </div>
</template>

<script setup>
import { defineProps, ref, reactive } from 'vue';

const props = defineProps({
  dialogueBody: Object,
})

const isVisible = reactive({
  value: false,
  text: 'Show'
})

function showHideVocabulary(a) {
  a.value == false ? a.value = true : a.value = false;
  a.text == 'Show' ? a.text = 'Hide' : a.text = 'Show'
}


</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}</style>