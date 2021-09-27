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
            :list="recievedAnswer.userInput[Id-1]"
            :move="isOptionDroppable"
            v-bind="dragOptions"
            group="people"
            @change="checkAndCleanUpDraggables"
            itemKey="name"
            :disabled="isSubmitted"
          >
            <template #item="{ element }">
              <div 
                class="list-group-item"
                :class="labelStatusToClass(Id - 1)"
              >
                {{ element.value }} {{ element.variant }} {{Id}} </div>
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
  },
  methods: {
  }
}
</script>
       
<style scoped>
</style>