<script>
import { h, resolveComponent } from "vue";
import AudioLabel from "./Labels/AudioLabel.vue";
import ImageLabel from "./Labels/ImageLabel.vue";
import TextLabel from "./Labels/TextLabel.vue";

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

    .question {
        -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
        -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
        box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);

        border-radius: 5px;

        min-width: 250px;

        padding: 20px;
        margin: 10px;
    }

</style>
