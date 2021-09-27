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
          :disabled="isSubmitted"
        >
          <template #item="{ element }">
            <div class="options-group-item">
              {{ element.value }}
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
              :list="recievedAnswer.userInput[word.index]"
              :move="isOptionDroppable"
              v-bind="dragOptions"
              group="people"
              @change="checkAndCleanUpDraggables"
              itemKey="name"
              :disabled="isSubmitted"
            >
              <template #item="{ element }" 
              >
                <div 
                  class="list-group-item"
                  :class="labelStatusToClass(word.index)"
                >
                  {{ element.value }} </div>
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
    sentence: {
      type: String,
      defauit: ''
    },
  },
  data(){
    return {
      processedSentece: [],
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
    
    console.log(this.recievedAnswer.userInput)
  },
  methods: {
    isEmpty(word){
      return typeof word === 'object' && word !== null
    },
  },
}
</script>
       
<style scoped>
</style>