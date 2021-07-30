<template>
  <div class="row">
    <div class="column">
      <h3>Options</h3>
      <draggable
        class="options-group"
        :move="isOptionDroppable"
        :list="options"
        v-bind="dragOptions"
        group="people"
        @change="log"
        itemKey="name"
      >
        <template #item="{ element, index }">
          <div class="list-group-item">{{ element.value }} {{ index }}</div>
        </template>
      </draggable>
    </div>

    <div class="column">
      <h3>Match the gaps</h3>
      <div
        v-for="Id in labelsToMatch.length"
        :key="Id"
      >
        <draggable
          class="list-group"
          :list="recievedAnswers.value[questionId][Id-1]"
          :move="isOptionDroppable"
          v-bind="dragOptions"
          group="people"
          @change="log"
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
    };
  },
  created(){
    // create Arrays for every option (label to match)
    this.recievedAnswers.value[this.questionId] = Array.from(Array(this.options.length), () => new Array())
  },
  methods: {
    
    log: function(evt) {
      window.console.log(evt);
    },

    isOptionDroppable: function(evt){
      console.log(evt)
      if( evt.to.className === 'options-group' )
        return true
      return (evt.relatedContext.list.length === 0) || evt.relatedContext.list.includes(evt.draggedContext.element);
    },

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
        display: flex;
        justify-content: space-between;
    }

    .column {
        background: lightcoral;
        width: 350px;
        padding: 5px
    }

    .options-group {
      min-height: 200px;
      background: indigo;
    }
    .button {
  margin-top: 35px;
}
.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.list-group {
  min-height: 20px;
}
.list-group-item {
  cursor: move;
}
.list-group-item i {
  cursor: pointer;
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

    .list-group {
      background: chartreuse;
      min-height: 64px;
      margin: 10px
    }

    .list-group-item {
        background: lightseagreen;
        margin: 5px;
        border: solid 2px rgb(78, 75, 75);
        text-align: center;
        font-weight: bold;
        padding: 20px;
    }

</style>