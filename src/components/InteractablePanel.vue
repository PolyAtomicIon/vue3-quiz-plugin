<script>
import { h, resolveComponent } from "vue";

import MultipleAnswers from './InteractablePanels/MultipleAnswers.vue'
import DragDropMatching from './InteractablePanels/DragDropMatching.vue'
import DragDropSentence from './InteractablePanels/DragDropSentence.vue'
import MultipleChoice from './InteractablePanels/MultipleChoice.vue'

export default {
  props: {
      question: {
        type: Object,
        default() {
            return {}
        }
      }
  },
  components: {
    MultipleChoice,
    MultipleAnswers,
    DragDropMatching,
    DragDropSentence,
  },
  setup(props) {

    const capitalize = ([firstLetter, ...restOfWord]) =>
      firstLetter.toUpperCase() + restOfWord.join('')

    const getInteractableName = (stringToSplit, separator = '-') => {        
        return stringToSplit.split(separator).map(capitalize).join('');
    };

    return () =>
      h(
        resolveComponent(getInteractableName(props.question.type)), {
            questionId: props.question.id,
            options: props.question.options,
            labelsToMatch: props.question.labelsToMatch,
            sentence: props.question.sentence,
        }
      )
  },
  
};
</script>

<style scoped>
.choosableOption {
  -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);

  border-radius: 5px;

  height: 100px;
  min-width: 100px;

  padding: 20px;
  margin: 10px;

}

.active {
    border: 3px solid red;
}

</style>
