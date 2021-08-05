<script>
import { h, resolveComponent } from "vue";

import MultipleAnswers from './Interactables/Choosable/MultipleAnswers.vue'
import MultipleChoice from './Interactables/Choosable/MultipleChoice.vue'
import DragDropMatching from './Interactables/DragDrop/DragDropMatching.vue'
import DragDropSentence from './Interactables/DragDrop/DragDropSentence.vue'
import FillIn from './Interactables/FillIn.vue'

export default {
  props: {
      question: {
        type: Object,
        default: () => ({})
      },
      answer: {
        type: Object,
        default: () => ({})
      },
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
            answer: props.answer,

            options: props.question.options,
            labelsToMatch: props.question.labelsToMatch,
            sentence: props.question.sentence,
        }
      )
  },
  
};
</script>
