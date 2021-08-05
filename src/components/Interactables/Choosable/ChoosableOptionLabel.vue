<script>
import { h, resolveComponent } from "vue";
import AudioLabel from "../Labels/AudioLabel.vue";
import ImageLabel from "../Labels/ImageLabel.vue";
import TextLabel from "../Labels/TextLabel.vue";

export default {
  props: {
    type: String,
    source: String,
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
        "button",
        { 
            onClick: function() {
              // alert(props.option);
              console.log(props.type)
            },
            class: "choosableOption" 
        },
        h(resolveComponent(getLabelName(props.type)), {
          source: props.source,
        })
      );
  },
  
};
</script>

<style scoped>
</style>
