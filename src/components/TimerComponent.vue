<template>
    <div class="timer">Time left {{countDown}}</div>
</template>

<script>

export default {
    data(){
        return {
            countDown: 0,
            defaultCountDownTime: 20,
        }
    },
    props: {
        isTimerReset: {
            type: Boolean,
            default: false,
        },
        secondsToCountDown: {
            type: Number,
            deafult: 0
        },
        onTimerEnd: {
            type: Function
        }
    },
    created(){
        console.log("TIMER STARTED WITH VALUES ", this.timeToCountDown)
        this.startTimer(this.secondsToCountDown)
    },
    methods: {
        countDownTimer() {
            if(this.countDown > 0 && !this.isTimerReset) {
                setTimeout(() => {
                    this.countDown -= 1
                    this.countDownTimer()
                    }, 1000)
            }
            else{
                this.onTimerEnd();
            }
        },
        startTimer(seconds = this.defaultCountDownTime){
            this.countDown = seconds;
            this.countDownTimer();
        }
    },

}
</script>