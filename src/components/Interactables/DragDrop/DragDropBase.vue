
<script>
import draggable from "vuedraggable";
import InteractableBase from '../InteractableBase.vue'
import * as Utils from '../../../Utils.js'

export default {
  name: "DragDropBase2",
  extends: InteractableBase,
  components: {
    draggable
  },
  props: {
    options: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      optionsCopy: [],
      numberOfLabels: -1,
      unorderedUserInput: null
    };
  },
  created(){
    // create Arrays for every option (label to match)
    this.optionsCopy = this.options;
    this.numberOfLabels = this.options.length;
    this.recievedAnswer.userInput = Array.from(Array(this.numberOfLabels), () => new Array())
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

      for(let i = 0; i < this.numberOfLabels; i++){
        if(this.recievedAnswer.userInput[i].length > 1) {
          this.swapLabels(i, elementToBeSaved);
        }
      }
    },
    swapLabels: function(index, elementToBeSaved){
      // there will be only 2 elements in array, guarantee
      const element = this.removeFromArrayByValueReturnArray(this.recievedAnswer.userInput[index], elementToBeSaved)[0];
      this.addElementToOptions(element);

      // create array with only one value
      this.recievedAnswer.userInput[index] = [elementToBeSaved];
    },
    addElementToOptions: function(element){   
      this.optionsCopy.push(element)
    },
    removeFromArrayByValueReturnArray(items, value){
      return items.filter(item => item !== value)
    },
    checkAnswers(){
      let answersArray = this.answersToOnlyVariantArray();
      console.log(answersArray);
      this.recievedAnswer.isCorrect = Utils.orderedArraysEqual(this.answer.answer, answersArray); 
      
      setTimeout(() => this.reorderLabelsToShowRightAnswer(), 1250);
    },
    answersToOnlyVariantArray(){
      return this.recievedAnswer.userInput.map((val) => {return val[0]?.variant});
    },
    reorderLabelsToShowRightAnswer(){
      let tempArr = []

      this.answer.answer.forEach( curVariant => {
        this.recievedAnswer.userInput.forEach( label => {
          if( label[0] && label[0]?.variant === curVariant )
            tempArr.push(label);
        } );

        this.optionsCopy.forEach( label => {
          if( label?.variant === curVariant )
            tempArr.push([label]);
        } );
      } )

      console.log("reoredered ", tempArr)
      this.unorderedUserInput = this.recievedAnswer.userInput
      this.optionsCopy = []
      this.recievedAnswer.userInput = tempArr;
    },
    isLabelInRightPlace(label, index){
      return this.answer.answer[index] === label?.variant
    },
    labelStatusToClass(index){
      let label = this.getOriginalLabelByIndex(index)

      let result = ''
      if( this.isSubmitted ){
        if( this.isLabelInRightPlace(label, index) )
          result += 'list-group-item-right-choice '
        else if( !this.unorderedUserInput )
          result += 'list-group-item-wrong-choice '
      }
      return result
    },
    getOriginalLabelByIndex(index){
      let label = this.recievedAnswer.userInput[index][0]
      if( this.unorderedUserInput )
        label = this.unorderedUserInput[index][0]

      return label
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