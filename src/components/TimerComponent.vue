<template>
    <div class="timer wrapper">Time left {{countDown}}</div>
</template>

<script>

export default {
    data(){
        return {
            countDown: 0,
            defaultCountDownTime: 20,
            timer: null
        }
    },
    props: {
        iteration: {
            type: Number,
            default: 0,
        },
        secondsToCountDown: {
            type: Number,
            deafult: 0
        },
        onTimerEnd: {
            type: Function
        }
    },
    watch: { 
        // if new iteration should start
        iteration(newVal){
            if(newVal){
                this.startTimer(this.secondsToCountDown)
            }
        },
    },
    created(){
        this.startTimer(this.secondsToCountDown);
    },
    methods: {
        countDownTimer() {
            if(this.countDown <= 0)
                this.onTimerEnd();

            this.timer = setTimeout(() => {
                this.countDown -= 1
                this.countDownTimer()
            }, 1000);
        },
        startTimer(seconds = this.defaultCountDownTime){
            this.stopTimer()
            this.countDown = seconds;
            this.countDownTimer();
        },
        stopTimer(){
            clearTimeout(this.timer);
        }
    },

}
</script>

<style scoped>
    .timer {
        background: lightcoral
    }
</style>