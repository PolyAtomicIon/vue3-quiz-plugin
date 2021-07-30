<template>
  <div class="row">
    <div class="column">
      <h3>Options</h3>
      <draggable
        class="options-group"
        :list="options"
        :move="checkMove"
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
    this.recievedAnswers.value[this.questionId] = new Array(this.options.length).fill(null).map(()=> (new Array()))
    console.log(this.recievedAnswers.value[this.questionId])
  },
  methods: {
    
    log: function(evt) {
      window.console.log(evt);
    },

    checkMove: function(evt){
      console.log("fdsf")
      console.log(evt.relatedContext.list)
      return (evt.relatedContext.list.length === 0);
    },

  }
};
</script>
       
<style scoped>

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
        background: indigo;
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