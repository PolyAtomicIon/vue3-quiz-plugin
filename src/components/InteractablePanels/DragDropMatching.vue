<template>
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
        <template #item="{ element, index }">
          <div class="options-group-item">{{ element.value }} {{ index }}</div>
        </template>
      </draggable>
    </div>
  </div>

  <div class="row">
    <div class="column">
      <h3>Match the gaps</h3>
      <div
        v-for="Id in labelsToMatch.length"
        :key="Id"
        class="two-row"
      >

        <div class="text-container">{{labelsToMatch[Id-1]}}</div>

        <draggable
          class="list-group"
          :list="recievedAnswers.value[questionId][Id-1]"
          :move="isOptionDroppable"
          v-bind="dragOptions"
          group="people"
          @change="[checkAndCleanUpDraggables]"
          itemKey="name"
        >
          <template #item="{ element, index }">
            <div class="list-group-item">
              {{ element.value }} {{ index }}</div>
          </template>
        </draggable>

      </div>
    </div>

  </div>
</template>
<script>
import draggable from "vuedraggable";
export default {
  name: "two-lists",
  display: "Two Lists",
  order: 1,
  components: {
    draggable
  },
  inject: ["recievedAnswers"],
  props: {
      options: Array,
      labelsToMatch: Array,
      questionId: Number,
  },
  data() {
    return {
      optionsCopy: []
    };
  },
  created(){
    // create Arrays for every option (label to match)
    this.optionsCopy = this.options;
    this.recievedAnswers.value[this.questionId] = Array.from(Array(this.options.length), () => new Array())
  },
  methods: {
    
    log: function(evt) {
      window.console.log(evt);
    },

    isOptionDroppable: function(evt){
      // console.log(evt)
      
      if( evt.to.className === 'options-group' )
        return true
      
      if( evt.relatedContext.list.length === 0 )
        return true;

      if( evt.relatedContext.list.includes(evt.draggedContext.element) )
        return true
      
      if( evt.relatedContext.list.length > 0 ) {
        return true;
      }

      return false;
    },
    checkAndCleanUpDraggables: function(evt){

      if( !evt.added )
        return

      const elementToBeSaved = evt.added.element;

      for(let i = 0; i < this.labelsToMatch.length; i++){
        if(this.recievedAnswers.value[this.questionId][i].length > 1) {
          this.swapLabels(i, elementToBeSaved);
        }
      }
    },
    swapLabels: function(index, elementToBeSaved){
      // there will be only 2 elements in array, guarantee
      const element = this.removeFromArrayByValueReturnArray(this.recievedAnswers.value[this.questionId][index], elementToBeSaved)[0];
      this.addElementToOptions(element);

      // create array with only one value
      this.recievedAnswers.value[this.questionId][index] = [elementToBeSaved];
    },
    addElementToOptions: function(element){
      this.optionsCopy.push(element)
    },
    removeFromArrayByValueReturnArray(items, value){
      return items.filter(item => item !== value)
    }

  },
  computed: {
    dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost-ticket",
        chosenClass: "chosen-ticket",
        dragClass: "dragging-ticket",
      };
    }
  }
}
</script>
       
<style >

  .row {
    background: red;
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
    margin: 10px;
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
    min-height: 64px;
    max-height: 96px;
    width: 200px;
    margin: 10px
  }

  .list-group-item {
      background: lightseagreen;
      margin: 5px;
      border: solid 2px rgb(78, 75, 75);
      text-align: center;
      font-weight: bold;
      cursor: move;
      padding: 20px;
  }

</style>