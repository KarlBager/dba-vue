<script setup>
import { useRoute } from 'vue-router'

import ButtonComponent from '../components/ButtonComponent.vue';
import BreadcrumbComponent from '../components/BreadcrumbComponent.vue';
import SliderDummyComponent from '../components/SliderDummyComponent.vue';
import SellerProfileComponent from '../components/SellerProfileComponent.vue';
import IconComponent from '../components/IconComponent.vue';

const route = useRoute();

let productId = route.params.id;


import * as sellers from '@/assets/sellers.json';
import * as products from '@/assets/products.json';

let product = products.default[productId];
let seller = sellers.default[product.sellerId];

let imageUrl = product.imagePath;

</script>



<template>

<section>

<BreadcrumbComponent></BreadcrumbComponent>

</section>


<section>

    <div class="container product-container">
        <div class="product-gallery-container">
            <div class="gallery-slider" :style="{ 'background-image': `url(${imageUrl})` }"></div>


            <SliderDummyComponent imageCount="4"></SliderDummyComponent>
        </div>

        <div class="product-info-outer">
            <div class="product-info-container">

                

                <h1 class="product-heading">{{ product.headline }}</h1>
                
                <p>{{ product.paragraph }}</p>

                <p class="price">{{product.price}} kr.</p>

            </div>

            
            <div class="product-button-container">
                <!-- <ButtonComponent type="secondary" ghost="true">Vis nummer<IconComponent icon="phone" lightdark="light"></IconComponent></ButtonComponent> -->
                <SellerProfileComponent :sellerId="product.sellerId"></SellerProfileComponent>
                <ButtonComponent type="primary" icon="paperplane">Skriv til sælger</ButtonComponent>
            </div>
        </div>
           
        
    </div>

</section>

</template>

<style>

.product-button-container{
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
}

.product-container{
    display: flex;
    justify-content: center;

}

.product-info-outer{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 0 2rem;
    height: 400px;
}

p.price{
    font-size: 2rem;
    font-weight: 500;
}

h1.product-heading{
    font-size: 2rem;
    font-weight: 500;
}


.product-info-container{
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    color: black;
}


.gallery-slider{
    width: 600px;
    height: 400px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: var(--button-border-radius);
    background-color: var(--dba-lightgray);
}

</style>