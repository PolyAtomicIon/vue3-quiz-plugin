
<script>
    export default {
        data(){
            return {
            }
        },
        inject: ['showAnswers', 'recievedAnswers'],
        props: {
            questionId: {
                type: Number,
                default: 0
            },
        },
        watch: {
            showAnswers: {
                handler(){
                    if(this.isSubmitted()){
                        this.checkAnswers();
                    }
                },
                deep: true
            }
        },
        created() {
        },
        setup() {
        },
        methods: {
            isSubmitted(){
                return this.showAnswers.value[this.questionId] 
            }
        },
        computed: {
        }
    }

</script>