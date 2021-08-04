
<script>
    export default {
        data(){
            return {
            }
        },
        inject: ['showAnswers'],
        props: {
            questionId: Number,
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
                console.log(this.showAnswers.value)
                return this.showAnswers.value[this.questionId] 
            }
        },
        computed: {
        }
    }

</script>