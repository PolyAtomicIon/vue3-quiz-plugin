<template>
  <div>
    <div class="row">
      <div class="column">
        <h3>Options</h3>
        <draggable
          class="options-group"
          :move="isOptionDroppable"
          :list="optionsCopy"
          v-bind="dragOptions"
          group="people"
          itemKey="name"
        >
          <template #item="{ element }">
            <div class="options-group-item">
              {{ element }}
            </div>
          </template>
        </draggable>
      </div>
    </div>

    <div>
      <div class="row">
        <div class="paragraph">
          <div
            v-for="word in processedSentece"
            :key="word"
            class="sentence"
          >

            <div 
              v-if="!isEmpty(word)"
              class="text-container"
            >
              {{word}}
            </div>

            <draggable
              v-else
              class="list-group"
              :list="answers[word.index]"
              :move="isOptionDroppable"
              v-bind="dragOptions"
              group="people"
              @change="[checkAndCleanUpDraggables, updateAnswers]"
              itemKey="name"
            >
              <template #item="{ element, index }">
                <div class="list-group-item">
                  {{ element }} {{ index }}</div>
              </template>
            </draggable>

          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import DragDropBase2 from './DragDropBase.vue'

export default {
  name: "DragDropSentence",
  extends: DragDropBase2,
  props: {
    sentence: String,
  },
  data(){
    return {
      processedSentece: []
    }
  },
  created(){
    this.processedSentece = this.sentence.split(" ")

    let counter = 0;
    for(let i = 0; i < this.processedSentece.length; i++)
      if(this.processedSentece[i] === '[empty]'){
        this.processedSentece[i] = {'value' : this.processedSentece[i], 'index': counter};
        counter++;
      }
    
    console.log(this.answers)
  },
  methods: {
    isEmpty(word){
      return typeof word === 'object' && word !== null
    }
  },
}
</script>
       
<style scoped>

  .row {
    background: indigo;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .column {
    background: lightcoral;
    width: 350px;
    padding: 5px
  }

  .options-group {
    display: flex;
    min-height: 96px;
    background: indigo;
  }

  .options-group-item {
    background: darksalmon;
    padding: 20px;
    margin: 10px;
  }

  .options-group-item:hover {
    background: darkseagreen;
  }

  .chosen-ticket {
    background: darkorange !important;
    opacity: 1;
  }
  .dragging-ticket {
    background: darkred !important;
    background-color: darkred !important;
    opacity: 1 !important;
    box-shadow: none !important;
    border: 2px solid black;
  }
  .ghost-ticket {
  } 

  .text-container {
    padding: 20px;
    background: orange;
  }

  .two-row {
    display: flex;
    justify-content: space-between;
    background: lightcyan;
    margin: 2px 0px;
  }

  .list-group {
    background: chartreuse;
    width: 96px;
    height: 96px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .list-group-item {
    background: lightseagreen;
    border: solid 2px rgb(78, 75, 75);
    text-align: center;
    font-weight: bold;
    cursor: move;
    padding: 5px;
  }

  .list-group-item:hover {
    background: green;
  }

  .paragraph {
    display: flex;
    max-width: 100%;
    flex-flow: row wrap;
    margin: 20px;
    background: khaki;
  }
  .sentence {
  }

</style>