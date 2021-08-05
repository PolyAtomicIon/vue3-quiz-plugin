
<script>
    import {RecievedAnswer} from './RecievedAnswer.js'

    export default {
        data(){
            return {
                userInput: [],
                result: [],
            }
        },
        inject: ['showAnswers', 'recievedAnswers'],
        created() {
            this.recievedAnswers.value[this.questionId] = new RecievedAnswer();
        },
        props: {
            questionId: {
                type: Number,
                default: 0
            },
            answer: {
                type: Object,
                default: () => ({})
            },
        },
        watch: {
            showAnswers: {
                handler(){
                    if(this.isSubmitted()){
                        this.checkAnswers();
                        this.submitResult();
                    }
                },
                deep: true
            }
        },
        setup() {
        },
        methods: {
            isSubmitted(){
                return this.showAnswers.value[this.questionId] 
            },
            submitResult(){
                this.recievedAnswers.value[this.questionId].setUserInputAsArray(this.userInput)
                this.recievedAnswers.value[this.questionId].setResult(this.result)
            }
        },
        computed: {
        }
    }

</script>