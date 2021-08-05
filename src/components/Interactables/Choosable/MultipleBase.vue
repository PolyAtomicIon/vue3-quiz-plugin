<script>

    import ChoosableOptionLabel from './ChoosableOptionLabel.vue'
    import InteractableBase from '../InteractableBase.vue'
    import * as Utils from '../../../Utils.js'

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
                
                return result
            },
            checkAnswers(){
                this.recievedAnswer.isCorrect = Utils.arraysEqual(this.answer.answer, this.recievedAnswer.userInput) 
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