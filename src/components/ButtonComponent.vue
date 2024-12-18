<script setup>
import { ref } from 'vue';
import IconComponent from './IconComponent.vue';


const props = defineProps({
    type: String,
    icon: String,
    iconMode: String,
    ghost: Boolean,
    circular: Boolean,
    short: Boolean
});


let hasIcon = ref(false);
let iconMode = ref("light");

if(props.icon){
    hasIcon = true;
}

if(props.iconMode){
    iconMode.value = props.iconMode;
}

</script>



<template>

<button class="button" :class="{'button-primary': type == 'primary', 'button-secondary': type == 'secondary', 'button-tertiary': type == 'tertiary', 'button-ghost': ghost, 'button-circular': circular , 'button-short': short}" id="search-button">
            
    <slot></slot>
    <IconComponent v-if="hasIcon" :icon="props.icon" :lightdark="iconMode"></IconComponent>

</button>

</template>



<style>

.button{
    border-radius: 40px;
    height: 37px;
    min-width: 37px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    width: 100%;
    font-size: 1rem;
    font-weight: 500;
    border: none;
}

.button-primary{
    background-color: var(--dba-primary);
    color: var(--dba-white);
}

.button-primary:hover{
    background-color: var(--dba-primary-hover);
}

.button-secondary{
    background-color: var(--dba-red);
    color: var(--dba-white);
}

.button-secondary:hover{
    background-color: var(--dba-red-hover);
}

.button-short{
    width: auto;
    padding: 0.625rem 1.25rem;
}

.button-tertiary{
background-color: var(--dba-lightblue);
}

.button-tertiary:hover{
    background-color: var(--dba-tertiary-hover);
}


.button:hover{
    transition: all var(--hover-fade-duration);
}


.button-circular{
    height: 45px;
    width: 45px;
}

.button-ghost{
    background-color: transparent;
    
    font-weight: 500;
}

.button-ghost:hover{
    background-color: var(--black-hover);
}



.button-ghost.button-primary{
    color: var(--dba-primary);
}

.button-ghost.button-secondary{
    color: var(--dba-red);
}


</style>