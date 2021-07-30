
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
      optionsCopy: [],
      answers: []
    };
  },
  created(){
    // create Arrays for every option (label to match)
    this.optionsCopy = this.options;
    this.answers = Array.from(Array(this.options.length), () => new Array())
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