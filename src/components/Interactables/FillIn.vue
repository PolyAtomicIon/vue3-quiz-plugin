<template>
    
    <div class="interactable">
        <input 
            type="text" 
            v-model="recievedAnswers.value[questionId]" 
        />
    </div>

</template>

<script>

    export default {

        data(){
            return {
            }
        },
        inject: ['recievedAnswers'],
        props: {
            questionId: Number,
        },      
        created() {
            this.recievedAnswers.value[this.questionId] = '';
        },
        setup() {
        },
        methods: {
        },
        computed: {
        }
    }

</script>

<style scoped>

    .interactable {
        background: lightgreen;
    }

    .active {
        border: 3px red solid;
    }

</style>
