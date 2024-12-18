<script setup>
import ButtonComponent from './ButtonComponent.vue';
import IconComponent from './IconComponent.vue';
</script>

<template>

    <div class="container product-container">
        <div class="view-settings-container">
            <ButtonComponent type="primary" :circular="true" :ghost="true"><IconComponent icon="grid" lightdark="light"></IconComponent></ButtonComponent>
            <ButtonComponent type="primary" :circular="true" :ghost="true"><IconComponent icon="list" lightdark="light"></IconComponent></ButtonComponent>
            <ButtonComponent type="tertiary" :short="true">Filter</ButtonComponent>
            <ButtonComponent type="tertiary" :short="true">Sortér efter: Relevans</ButtonComponent>
        </div>
    </div>

</template>


<style>



</style>