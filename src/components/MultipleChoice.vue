<script>

    import {h} from 'vue'
    import ChoosableOptionLabel from './ChoosableOptionLabel.vue'

    export default {

        // We can simplify this
        props: {
            options: Array,
        },
        components: {
            ChoosableOptionLabel
        },
        setup(props) {
            console.log(props.options)
            return () =>  h('div', props.options.map((item) => {
                return  h( 
                            ChoosableOptionLabel,
                            {
                                option: item.option,
                                source: item.source
                            }
                        )
            }))
        }
    }

</script>

<style scoped>

    button {
        background: red;
    }

</style>
