<script setup>

import ProductCardComponent from './ProductCardComponent.vue';

import * as sellers from '@/assets/sellers.json';
import * as products from '@/assets/products.json';


let sellerArray = sellers.default;
let productArray = products.default;


</script>


<template>

<div class="product-grid-container">
        <ProductCardComponent v-for="product in productArray" :product=product ></ProductCardComponent>
</div>

</template>



<style>

.product-grid-container{
    display: flex;
    flex-wrap: wrap;
    gap: 1.6rem;
    justify-content: center;
}


@media only screen and (min-width: 1337px) {
  
    .product-grid-container{
    display: flex;
    flex-wrap: wrap;
    gap: 1.6rem;
    justify-content: flex-start;
}


}


</style>