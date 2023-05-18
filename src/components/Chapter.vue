<template>
  <div class="main fx-col-2">
    <div class="header fx-col-2">
      <div class="unitTitle">
        <div>
          <h1>{{ unit.title }}</h1>
          <h3>{{ unit.subtitle }}</h3>
        </div>
        <div class="unitNumber">
          <p>Unit 1.</p>
        </div>
      </div>
      
      <div class="chapter-description">
        <p>In this unit you will learn...</p>
        <ul>
          <li v-for="element in unit.description" v-bind:key="element">{{ element }}</li>
        </ul>
      </div>
    </div>
    <div class="chapter-sections">
      <div class="exercises-menu" v-if="activeDialogue.active">
        <p>Dialogue {{ activeDialogue.active.number }}.</p>
        <div class="buttons">
          <a class="btn" @click="previousDialogue()">
          <span class="material-symbols-outlined">arrow_back</span>
          </a>
          <a class="btn" @click="nextDialogue()">
            <span class="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>
      </div>
      <Dialogue :dialogueBody="activeDialogue.active"/>
      <!-- <Dialogue :dialogueBody="dialogueSecond"/> -->
      
    </div>
  </div>
</template>

<script setup> // will execute every time an instance of the component is created
import { ref, reactive } from 'vue';
import Dialogue from './Dialogue.vue';

const unit = reactive({
  title: "på banegården",
  subtitle: "at the railway station",
  description: [
    'how to form simple statements and questions',
    'hot to introduce yourself',
    'how to greet people'
  ]
})

// const dialogueFirst = reactive({
//   number: 1,
//   title: "Hello Kirsten!",
//   description: "At the main railway station in Copenhagen, Hans is waiting for the train to arrive from Esbjerg. George has traveled to Denmark by boat from Harwich to Esbjerg and is at the moment on the Inter City train. This is the boat train that brings the passengers to Copenhagen. Hans sees a neighbour on the platform.",
//   lines: [
//     {
//       speaker: 'Hans',
//       message: 'Dav Kirsten!'
//     },
//     {
//       speaker: 'Kirsten',
//       message: 'Hej Hans! Er det i dag, jeres venner fra England kommer?'
//     },
//     {
//       speaker: 'Hans',
//       message: 'Ja, George kommer i dag. Alison kommer på fredag. Hun flyver herover.'
//     },
//     {
//       speaker: 'Kirsten',
//       message: 'Min mor kommer også med toget fra Jylland. Hun skal bo hos os i en uge.'
//     },
//   ],
//   vocabulary: [
//     {
//       danish: 'dav',
//       english: 'hello'
//     },
//     {
//       danish: 'hej',
//       english: 'hello'
//     },
//     {
//       danish: 'er',
//       english: 'is'
//     },
//     {
//       danish: 'i dag',
//       english: 'today'
//     },
//     {
//       danish: 'jeres',
//       english: 'your (plural)'
//     },
//     {
//       danish: 'venner',
//       english: 'friends'
//     },
//     {
//       danish: 'fra',
//       english: 'from'
//     },
//     {
//       danish: 'kommer',
//       english: 'are/is comming'
//     },
//     {
//       danish: 'ja',
//       english: 'yes'
//     },
//     {
//       danish: 'pa fredag',
//       english: 'on Friday'
//     },
//     {
//       danish: 'hun',
//       english: 'she'
//     },
//     {
//       danish: 'flyver',
//       english: 'is flying, will fly'
//     },
//     {
//       danish: 'herover',
//       english: 'over here'
//     },
//     {
//       danish: 'min mor',
//       english: 'my mother'
//     },
//     {
//       danish: 'ogsa',
//       english: 'also'
//     },
//     {
//       danish: 'med toget',
//       english: 'by train'
//     },
//     {
//       danish: 'med',
//       english: 'here/by'
//     },
//     {
//       danish: 'skal',
//       english: 'is going to'
//     },
//     {
//       danish: 'bo',
//       english: 'stay, live'
//     },
//     {
//       danish: 'hos os',
//       english: 'with us'
//     },
//     {
//       danish: 'i en uge',
//       english: 'for a week'
//     },

//   ]
// })

// const dialogueSecond = reactive({
//   number: 2,
//   title: "Hello Geogre!",
//   description: "Kirsten leaves and the train arrives shortly afterwards.",
//   lines: [
//     {
//       speaker: 'Hans',
//       message: 'Hej Geogre! Vellkommen til Denmark!'
//     },
//     {
//       speaker: 'Geogre',
//       message: 'Hej Hans! Tak!'
//     },
//     {
//       speaker: 'Hans',
//       message: 'Det er en lang rejse med båd og tog fra England til Kobenhavn.'
//     },
//     {
//       speaker: 'George',
//       message: 'Ja, men det er en interessant rejse.'
//     },
//     {
//       speaker: 'Hans',
//       message: 'Min nabos mor skal kore med os til Holte.'
//     },
//   ]
// })

const dialogues = reactive([
{
  number: 1,
  title: "Hello Kirsten!",
  description: "At the main railway station in Copenhagen, Hans is waiting for the train to arrive from Esbjerg. George has traveled to Denmark by boat from Harwich to Esbjerg and is at the moment on the Inter City train. This is the boat train that brings the passengers to Copenhagen. Hans sees a neighbour on the platform.",
  lines: [
    {
      lineNumber: 1,
      speaker: 'Hans',
      message: 'Dav Kirsten!'
    },
    {
      lineNumber: 2,
      speaker: 'Kirsten',
      message: 'Hej Hans! Er det i dag, jeres venner fra England kommer?'
    },
    {
      lineNumber: 3,
      speaker: 'Hans',
      message: 'Ja, George kommer i dag. Alison kommer på fredag. Hun flyver herover.'
    },
    {
      lineNumber: 4,
      speaker: 'Kirsten',
      message: 'Min mor kommer også med toget fra Jylland. Hun skal bo hos os i en uge.'
    },
  ],
  vocabulary: [
    {
      danish: 'dav',
      english: 'hello'
    },
    {
      danish: 'hej',
      english: 'hello'
    },
    {
      danish: 'er',
      english: 'is'
    },
    {
      danish: 'i dag',
      english: 'today'
    },
    {
      danish: 'jeres',
      english: 'your (plural)'
    },
    {
      danish: 'venner',
      english: 'friends'
    },
    {
      danish: 'fra',
      english: 'from'
    },
    {
      danish: 'kommer',
      english: 'are/is comming'
    },
    {
      danish: 'ja',
      english: 'yes'
    },
    {
      danish: 'pa fredag',
      english: 'on Friday'
    },
    {
      danish: 'hun',
      english: 'she'
    },
    {
      danish: 'flyver',
      english: 'is flying, will fly'
    },
    {
      danish: 'herover',
      english: 'over here'
    },
    {
      danish: 'min mor',
      english: 'my mother'
    },
    {
      danish: 'ogsa',
      english: 'also'
    },
    {
      danish: 'med toget',
      english: 'by train'
    },
    {
      danish: 'med',
      english: 'here/by'
    },
    {
      danish: 'skal',
      english: 'is going to'
    },
    {
      danish: 'bo',
      english: 'stay, live'
    },
    {
      danish: 'hos os',
      english: 'with us'
    },
    {
      danish: 'i en uge',
      english: 'for a week'
    },

  ]
},
{
  number: 2,
  title: "What is your mother called?",
  description: "Kirsten wants to do some shopping before the shops close and ask if Hans can give her mother a lift. Hans is pleased to help, but does not know her mother.",
  lines: [
    {
      lineNumber: 1,
      speaker: 'Hans',
      message: 'Hvad hedder din mor?'
    },
    {
      lineNumber: 2,
      speaker: 'Kirsten',
      message: 'Hun hedder Marie Sorensen, og hun kommer fra Herning.'
    }
  ],
  vocabulary: [
    {
      danish: 'Hvad hedder din mor?',
      english: `What is your mother's name?`
    },
    {
      danish: 'og',
      english: 'and'
    }
  ]
},
{
  number: 3,
  title: "Hello Geogre!",
  description: "Kirsten leaves and the train arrives shortly afterwards.",
  lines: [
    {
      lineNumber: 1,
      speaker: 'Hans',
      message: 'Hej Geogre! Vellkommen til Denmark!'
    },
    {
      lineNumber: 2,
      speaker: 'Geogre',
      message: 'Hej Hans! Tak!'
    },
    {
      lineNumber: 3,
      speaker: 'Hans',
      message: 'Det er en lang rejse med båd og tog fra England til Kobenhavn.'
    },
    {
      lineNumber: 4,
      speaker: 'George',
      message: 'Ja, men det er en interessant rejse.'
    },
    {
      lineNumber: 5,
      speaker: 'Hans',
      message: 'Min nabos mor skal kore med os til Holte.'
    },
  ],
  vocabulary: [
    {
      danish: 'Velkommen til Danmark!',
      english: `Welcome to Denmark!`
    },
    {
      danish: 'Tak!',
      english: 'Thank you!'
    },
    {
      danish: 'lang',
      english: 'long'
    },
    {
      danish: 'rejse',
      english: 'journey'
    },
    {
      danish: 'med bad og tog',
      english: 'by boat and train'
    },
    {
      danish: 'til',
      english: 'to'
    },
    {
      danish: 'Kobenhavn',
      english: 'Copenhagen'
    },
    {
      danish: 'men',
      english: 'but'
    },
    {
      danish: 'en interessant rejse',
      english: 'an interesting journey'
    },
    {
      danish: 'min nabos mor',
      english: `my neighbour's mother`
    },
    {
      danish: 'nabo',
      english: 'neighbour'
    },
    {
      danish: 'kore',
      english: 'go, drive, ride, travel'
    },
    {
      danish: 'med os',
      english: 'with us'
    },
    {
      danish: 'Holte',
      english: 'a suburb of Copenhagen'
    }
  ]
}
])

const activeDialogue = reactive({
  active: dialogues[0]
})

function previousDialogue() {
  let dialoguesLength = dialogues.length // 2
  if (activeDialogue.active.number > 1) {
    let activeDialogueNumber = activeDialogue.active.number - 2
    activeDialogue.active = dialogues[activeDialogueNumber]
  }
}

function nextDialogue() {
  let dialoguesLength = dialogues.length // 2
  if (activeDialogue.active.number < dialoguesLength) {
    let activeDialogueNumber = activeDialogue.active.number
    activeDialogue.active = dialogues[activeDialogueNumber]
  }
}

//console.log(dialogues)

</script>

<style>

.fx-col-2 {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.main {
  padding: 4rem;
  background-color: var(--color-background-soft-secondary);
  border-radius: 4rem;
}


.unitTitle {
  display: flex;
  justify-content: space-between;
}

.exercises-menu {
  display: flex;
  align-items: center;
}

#right {
  opacity: 0;
}

.exercises-menu p {
  color: var(--text-color-grey);
  font-size: 1.5rem;
  font-weight: bold;
  padding-right: 3rem;
}

.buttons {
  display: flex;
  gap: 1rem;
}

.btn {
  cursor: pointer;
  background-color: white;
  border-radius: 25%;
  display: flex;
  padding: 0.4rem;
  font-weight: bold;
}

.btn span {
  font-size: 1rem;
}

.unitNumber{
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--text-color-blue);
  border-radius: 1rem;
  color: white;
  font-weight: bold;  
}

.unitNumber p {
  font-size: 2rem;
  padding: 0.8rem;
}

.chapter-description {
  color: var(--text-color-grey);
}

.chapter-sections {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

h1 {
  font-size: 2.5rem;
  margin: 0;
}

h3 {
  margin: 0;
  color: var(--text-color-blue);
}

p {
  margin: 0;
}

ul {
  margin: 0;
}

a {
  text-decoration: none;
}

/* styles for dialogue */
.dialogue {
  background-color: var(--color-background-blue);
  border-radius: 2.25rem;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.btn-show {
  border-radius: 2rem;
  width: 10rem;
  align-self: center;
  text-decoration: none;
  color: black;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  padding: 1rem;
}

.dialogue-header {
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  justify-content: space-between;
}

.dialogue-header div:last-of-type{
  margin-left: auto;
}

.dialogue-header-main {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.dialogue-header-icon span {
  color: white;
  font-size: 5rem;
  top: -10px;
  position: relative;
}

.dialogue-header-actions {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
}

.dialogue-header-actions p {
  color: white;
  font-weight: bold;
  font-size: 1.25rem;
}

.dialogue-header-actions .btn span {
  font-size: 3rem;
  color: black;
}

.dialogue-title {
  color: white;
  font-size: 2rem;
}

.dialogue-description p {
  color: white;
  text-align: justify;
  text-justify: inter-word;
  font-style: italic;
  opacity: 0.85;
}

.dialogue-main {
  font-size: 1.25rem;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.dialogue-line {
  display: grid;
  grid-template-columns: 7rem auto;
}

.dialogue-line-speaker {
  font-weight: bold;
  color: white;
}

.dialogue-line-message {
  text-align: justify;
  text-justify: inter-word;
  color: white
}

.dialogue-vocabulary {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--color-background-soft-secondary);
  border-radius: 2.25rem;
  padding: 2rem;
  gap: 0.5rem;
}

.dialogue-vocabulary-line {
  display: grid;
  grid-template-columns: 13rem 13rem;
  gap: 1rem;
  font-size: 1.25rem;
}

.dialogue-vocabulary-line p:first-child {
  justify-self: end;
  text-align: right;
  font-weight: bold;
}

</style>