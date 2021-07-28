<template>
    
    <div class="interactable">
        <choosable-option-label
            v-for="(item, variant) in options"
            :key="variant"
            @click="onOptionLabelChosen(variant)"
            :option="item.option"
            :source="item.source"

            :class="{ active: item.isChosen }"
        />
        
        <div class="wrapper">
            <p 
                v-for="item in chosenOptions"
                :key="item"
            >   
             Variant {{item}}
            </p>
        </div>
    </div>

</template>

<script>

    import ChoosableOptionLabel from '../ChoosableOptionLabel.vue'

    export default {

        data(){
            return {
                chosenOptions: []
            }
        },        
        inject: ['options'],
        components: {
            ChoosableOptionLabel
        },
        setup(props) {
            console.log(props.options)
        },
        methods: {
            onOptionLabelChosen(variant){
                this.options.value[variant].isChosen ^= 1;
            },
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
