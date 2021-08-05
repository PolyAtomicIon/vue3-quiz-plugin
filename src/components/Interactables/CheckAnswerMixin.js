const checkAnswer = {
    inject: ['showAnswers'],
    watch: {
        showAnswers: {
            handler(new_client){
                console.log('CHECK')
                if(new_client.value[this.questionId]){
                    this.checkAnswers();
                }
            },
            deep: true
        }
    },
  }