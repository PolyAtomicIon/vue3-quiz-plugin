<script>

    import ChoosableOptionLabel from './ChoosableOptionLabel.vue'
    import InteractableBase from '../InteractableBase.vue'

    export default {
        extends: InteractableBase,
        data(){
            return {
            }
        },
        props: {
            options: Array,
        },      
        created() {
            this.userInput = []
        },
        components: {
            ChoosableOptionLabel
        },
        setup() {
        },
        methods: {
            isOptionChosen(variant){
                return this.userInput.includes(variant);
            },
        },
        computed: {
        }
    }

</script>

<style scoped>

    .interactable {
        background: lightgreen;
    }

</style>