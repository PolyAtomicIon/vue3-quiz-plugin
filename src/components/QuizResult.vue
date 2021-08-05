<template>
    <div>
        <p 
            v-for="(value, index) in recievedAnswers"
            :key="index"
            class="wrapper "
        >
            Question id {{ index }} is Correct ->
            {{value?.isCorrect}}
        </p>
    </div>
</template>

<script>
export default {
    data(){
        return {}
    },
    props: {
        recievedAnswers: {
            type: Object,
            default: () => ({})
        },
    }
}
</script>
