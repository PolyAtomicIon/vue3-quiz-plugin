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
        },
        components: {
            ChoosableOptionLabel
        },
        setup() {
        },
        methods: {
            isOptionChosen(variant){
                return this.recievedAnswer.userInput.includes(variant);
            },
            isVariantInAnswer(variant){
                return this.answer.answer.includes(variant)
            },
            labelStatusToClass(variant){
                let result = '';
                
                if( this.isOptionChosen(variant) )
                    result += ' active'

                if( this.isSubmitted ){
                    if( this.isVariantInAnswer(variant) )
                        result += ' right-choice'
                    else if( this.isOptionChosen(variant) )
                        result += ' wrong-choice'
                }
                
                console.log(result)
                return result
            }
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