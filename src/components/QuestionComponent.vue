<script>
import { h, resolveComponent } from "vue";
import AudioLabel from "./Interactables/Labels/AudioLabel.vue";
import ImageLabel from "./Interactables/Labels/ImageLabel.vue";
import TextLabel from "./Interactables/Labels/TextLabel.vue";

export default {
  props: {
    type: String,
    content: String,
  },
  components: {
    AudioLabel,
    ImageLabel,
    TextLabel
  },
  setup(props) {

    const capitalize = ([firstLetter, ...restOfWord]) =>
      firstLetter.toUpperCase() + restOfWord.join('')
    const getLabelName = (val) => {return capitalize(val)+'Label'};

    return () =>
      h(
        "div",
        { 
            class: "question" 
        },
        h(resolveComponent(getLabelName(props.type)), {
          source: props.content,
        })
      );
  },
  
};
</script>

<style scoped>
</style>
