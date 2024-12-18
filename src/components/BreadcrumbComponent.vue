<script setup>

import ButtonComponent from './ButtonComponent.vue';
import IconComponent from './IconComponent.vue';

</script>


<template>

    <div class="container product-container">
        <div class="breadcrumb-section">
            <RouterLink to="/"><ButtonComponent type="primary" :ghost="true" :short="true">< Tilbage</ButtonComponent></RouterLink>
        </div>
    </div>

</template>


<style>

.breadcrumb-section{
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    margin: 2rem 0;
}



</style>