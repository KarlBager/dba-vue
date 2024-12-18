<script setup>
import { ref } from 'vue';

const props = defineProps({
    product: Object
});

import * as sellers from '@/assets/sellers.json';

let seller = ref([]);
seller.value = sellers.default[props.product.sellerId];

let imageUrl =  props.product.imagePath;

</script>

<template>


<RouterLink :to="{ name: 'product', params: { id: props.product.id } }">

    <div class="product-card-container">
        <div class="product-card">

            <div class="product-card-image-container">
                <div class="product-image" :style="{ 'background-image': `url(${imageUrl})` }"></div>
            </div>

            <div class="product-card-typo-container">
                <h2>{{ props.product.headline }}</h2>
                <div class="product-card-bottom-line">
                    <p class="price">{{ props.product.price }} kr</p><p>{{ seller.zip + " " + seller.city }}</p>
                </div>
            </div>

        </div>

        <div class="product-card-overlay">
        </div>


    </div>



</RouterLink>




</template>


<style>


.product-card-container{
    width: 18.75rem;
    height: 23.125rem;
    position: relative;
}

.product-card-overlay{
    position: absolute;
    top: 0;
    left: 0;
    width: 18.75rem;
    height: 23.125rem;
    background-color: black;
    opacity: 0;
    border-radius: 40px;
}

.product-card-overlay:hover{
    opacity: 0.1;
    transition: all var(--hover-fade-duration);
}


.product-card{
    background-color: var(--dba-lightgray);
    width: 18.75rem;
    height: 23.125rem;
    border-radius: var(--button-border-radius);
    padding: 1.375rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.product-card h2{
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 120%;
    color: black;
}


.product-card-image-container{
    background-color: var(--dba-darkgray);
    width: 100%;
    height: 14.875rem;
    border-radius: 18px;
    overflow: hidden;
}

.product-image{
    width: 100%;
    height: 100%;
    background-size: cover;
}

.product-card-typo-container{
display: flex;
flex-direction: column;
justify-content: space-between;
}

.product-card .price{
    font-size: 1rem;
    font-weight: 600;
}

.product-card-bottom-line{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.3rem;
    color: var(--dba-darkblue);
}



</style>