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
          <template #item="{ element, index }">
            <div class="options-group-item">
              {{ element.value }} {{ index }}
            </div>
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
            :list="answers[Id-1]"
            :move="isOptionDroppable"
            v-bind="dragOptions"
            group="people"
            @change="[checkAndCleanUpDraggables, updateAnswers]"
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
  </div>
</template>

<script>
import DragDropBase2 from './DragDropBase.vue'

export default {
  name: "DragDropMatching",
  extends: DragDropBase2,
  props: {
    labelsToMatch: {
      type: Array,
      default: () => [],
    }
  }
}
</script>
       
<style scoped>

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

  .list-group-item:hover {
    background: green;
  }

</style>