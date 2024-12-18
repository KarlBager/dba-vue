<script setup>


const props = defineProps({
    sellerId: Int16Array
});


import * as sellers from '@/assets/sellers.json';

let sellerName = sellers.default[props.sellerId].name;
let sellerZip = sellers.default[props.sellerId].zip;
let sellerCity = sellers.default[props.sellerId].city;
let sellerDistance = sellers.default[props.sellerId].distance;


</script>



<template>

<div class="seller-profile-container">
    <div class="seller-image-container">
    </div>

    <div>
    <p>{{ sellerName }} <br><b> {{ `${sellerZip} ${sellerCity} | ${sellerDistance} km` }}</b></p>
    </div>

</div>

</template>



<style>

.seller-profile-container{
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: black;
    text-decoration-color: rgba(0,0,0,0);
} 

.seller-profile-container:hover{
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: black;
    text-decoration-color: rgba(0,0,0,0);
} 

.seller-profile-container:hover{
    text-decoration: underline;
    text-decoration-color: black;
    transition: all var(--hover-fade-duration);
} 

.seller-image-container{
    background-color: var(--dba-darkgray);
    width: 1.75rem;
    height: 1.75rem;
    border-radius: 100%;
}


p b{
    font-weight: 500;
}


</style>