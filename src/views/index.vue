<script setup>
import ViewSettingsComponent from '../components/ViewSettingsComponent.vue';
import ProductGridComponent from '../components/ProductGridComponent.vue';
</script>



<template>

<section>

    <ViewSettingsComponent></ViewSettingsComponent>
    
</section>


<section>
    <div class="container">
        <ProductGridComponent></ProductGridComponent>
    </div>
</section>

</template>



<style>


.view-settings-container{
    display: flex;
    justify-content: right;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    margin: 2rem 0;
}

</style>