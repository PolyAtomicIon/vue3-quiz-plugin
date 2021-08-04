
<script>
import draggable from "vuedraggable";
import InteractableBase from './InteractableBase.vue'

export default {
  name: "DragDropBase2",
  extends: InteractableBase,
  components: {
    draggable
  },
  props: {
    options: {
      type: Array,
      default(){
        return new Array();
      }
    },
  },
  data() {
    return {
      optionsCopy: [],
      answers: [],
      numberOfLabels: -1
    };
  },
  created(){
    // create Arrays for every option (label to match)
    this.optionsCopy = this.options;
    this.numberOfLabels = this.options.length;
    this.answers = Array.from(Array(this.numberOfLabels), () => new Array())
  },
  methods: {
    
    checkAnswers(){
      console.log("CheckAnswers 23")
    },
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

      for(let i = 0; i < this.numberOfLabels; i++){
        if(this.answers[i].length > 1) {
          this.swapLabels(i, elementToBeSaved);
        }
      }
    },
    swapLabels: function(index, elementToBeSaved){
      // there will be only 2 elements in array, guarantee
      const element = this.removeFromArrayByValueReturnArray(this.answers[index], elementToBeSaved)[0];
      this.addElementToOptions(element);

      // create array with only one value
      this.answers[index] = [elementToBeSaved];
    },
    addElementToOptions: function(element){   
      this.optionsCopy.push(element)
    },
    removeFromArrayByValueReturnArray(items, value){
      return items.filter(item => item !== value)
    },
    updateAnswers(){
      this.recievedAnswers.value[this.questionId] = this.answers;
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