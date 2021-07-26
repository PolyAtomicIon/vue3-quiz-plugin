<script>
    import {h, resolveComponent} from 'vue'
    import AudioLabel from './Labels/AudioLabel.vue'
    import ImageLabel from './Labels/ImageLabel.vue'

    export default {

        // We can simplify this
        props: {
            option: String,
            source: String,
        },
        components: {
            AudioLabel,
            ImageLabel
        },
        setup(props) {
            console.log(props.option)
            return () =>  h( 
                resolveComponent(props.option),
                {
                    class: 'choosableOption',
                    source: props.source
                }
            )
        }

    }

</script>

<style scoped>

    .choosableOption {
        -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
        -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
        box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);

        border-radius: 5px;

        margin: 10px;
        height: 500px;
    }

</style>
