<template>

    <button
        class="submit-button"
        @click="onQuizStart"
    >
        Start QUIZ
    </button>

</template>

<script>
export default {
    props: {
        onQuizStart: {
            type: Function,
        }
    }
}
</script>

<style scoped>
</style>