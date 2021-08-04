<script>
import { h, resolveComponent } from "vue";

import MultipleAnswers from './Interactables/MultipleAnswers.vue'
import DragDropMatching from './Interactables/DragDropMatching.vue'
import DragDropSentence from './Interactables/DragDropSentence.vue'
import MultipleChoice from './Interactables/MultipleChoice.vue'
import FillIn from './Interactables/FillIn.vue'

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
    FillIn,
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
