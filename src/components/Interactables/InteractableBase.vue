
<script>
    import {RecievedAnswer} from './RecievedAnswer.js'

    export default {
        data(){
            return {
                recievedAnswer: new RecievedAnswer(),
            }
        },
        inject: ['showAnswers', 'recievedAnswers'],
        created() {
            this.showAnswers[this.questionId] = false
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
                    if(this.isSubmitted){
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
            submitResult(){
                this.recievedAnswers[this.questionId] = this.recievedAnswer
            },
        },
        computed: {
            isSubmitted(){
                return this.showAnswers[this.questionId] 
            },
        }
    }

</script>