<template>
    <p>{{recievedAnswers}}</p>
</template>

<script>
export default {
    data(){
        return {}
    },
    props: {
        recievedAnswers: {
            type: Object,
            default(){
                return new Object;
            }
        },
    }
}
</script>
