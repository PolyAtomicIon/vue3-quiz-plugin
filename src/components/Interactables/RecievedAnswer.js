export class RecievedAnswer {
    constructor(){
        this.isCorrect = false;
        // should be array
        this.userInput = [];
        this.result = []
    }

    setUserInputAsArray(userInput){
        if( !Array.isArray(userInput) ){
            userInput = [userInput];
        }

        this.userInput = userInput
    }

    setResult(result){
        this.result = result
    }

}