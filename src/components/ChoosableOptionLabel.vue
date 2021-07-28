<script>
import { h, resolveComponent } from "vue";
import AudioLabel from "./Labels/AudioLabel.vue";
import ImageLabel from "./Labels/ImageLabel.vue";

export default {
  // We can simplify this
  props: {
    type: String,
    source: String,
  },
  components: {
    AudioLabel,
    ImageLabel,
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
.choosableOption {
  -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);

  border-radius: 5px;

  height: 100px;

  padding: 20px;
  margin: 10px;

}

.active {
    border: 3px solid red;
}

</style>
