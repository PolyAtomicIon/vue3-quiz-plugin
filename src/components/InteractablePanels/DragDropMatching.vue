<template>
  <div class="row">
    <div class="column">
      <h3>Draggable 1</h3>
      <draggable
        class="list-group"
        :list="list1"
        group="people"
        @change="log"
        itemKey="name"
      >
        <template #item="{ element, index }">
          <div class="list-group-item">{{ element.name }} {{ index }}</div>
        </template>
      </draggable>
    </div>

    <div class="column">
      <h3>Draggable 2</h3>  
      <draggable
        class="list-group"
        :list="list2"
        group="people"
        @change="log"
        itemKey="name"
      >
        <template #item="{ element, index }">
          <div class="list-group-item">{{ element.name }} {{ index }}</div>
        </template>
      </draggable>
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
        questionId: Number,
    },
  data() {
    return {
      list1: [
        { name: "John", id: 1 },
        { name: "Joao", id: 2 },
        { name: "Jean", id: 3 },
        { name: "Gerard", id: 4 }
      ],
      list2: [
        { name: "Juan", id: 5 },
        { name: "Edgard", id: 6 },
        { name: "Johnson", id: 7 }
      ]
    };
  },
  methods: {
   
    log: function(evt) {
      window.console.log(evt);
    }
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

    .list-group {
        background: indigo;
        min-height: 300px;
    }

    .list-group-item {
        background: lightseagreen;
        margin: 5px;
        border: solid 2px black;
        text-align: center;
        font-weight: bold;
        padding: 20px;
    }

</style>