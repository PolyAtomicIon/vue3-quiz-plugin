# vue3-quiz-plugin
# Demo https://cryptic-inlet-28923.herokuapp.com/quiz
Main component -> QuizPanel
Accepts props:
- questions
- answers (should be encrypted for future)
- onQuizEnd function -> returns recieved Answers -> has Object of Class RecievedAnswer

About QuizPlugin:
- provides:
    - reviewedAnswers:
        - saves userInput, correctness of user's answers, the final result
    - showAnswers
        - watches for change in showAnswers, if changed stop Timer and checkAnswers and showsRightAnswer

Quiz Plugin -> calls InteractionPanel
InteractionPanel:
    - renders different types of question by question.type
    - all different types extend InteractionBase
        - InteractionBase has common props and functions, initializers for all question types

DragDrop 
    That complicated shit


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
