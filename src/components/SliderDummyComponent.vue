<script setup>
const props = defineProps({
    imageCount: Int16Array
})

let imageArray = [];

for(let i = 1; i<props.imageCount; i++){
    imageArray.push('image');
}


</script>



<template>

<div class="slider-dots-outer">

    <div class="slider-dots-inner">
        <div class="active-dot">●</div>
        <div v-for="image in imageArray">●</div>
    </div>

</div>

</template>




<style>

.slider-dots-outer{
 width: 100%;
 display: flex;
 height: 2rem;
}

.slider-dots-inner{
 display: flex;
 margin: auto;
 font-size: 0.6rem;
 gap: 1rem;
}

.slider-dots-inner div{
 color: var(--dba-lightblue);
}

.slider-dots-inner div.active-dot{
 color: var(--dba-primary);
}

</style>