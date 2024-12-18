<script setup>
import ButtonComponent from './ButtonComponent.vue';
import IconComponent from './IconComponent.vue';
</script>

<template>

<header>

<div class="container">


    <RouterLink to="/">
    <div id="logo-container">
        <img id="logo" src="@/dba-logo.svg">
    </div>
    </RouterLink>

    <div id="search-container">
        <input class="search-field" placeholder="Søg på DBA..." type="text"></input>


        <ButtonComponent type="primary" :ghost="true" :circular="true">
            <IconComponent icon="search" lightdark="light"></IconComponent>
        </ButtonComponent>


 
    </div>

    <div id="login-container">
        <p>Log ind</p>
    </div>

</div>
    
</header>

</template>



<style>


p{
    font-family: 'Proxima Nova', sans-serif;
    font-size: 1rem;
}

input{
    font-family: 'Proxima Nova';
    font-size: 1rem;
}

#header-profile-image-container{
    width: 45px;
    height: 45px;
    border-radius: 100%;
    background-color: #D9D9D9;
}

#login-container{
    display: flex;
    align-items: center;
    gap: 10px;
}

#login-container p{
    font-weight: 600;
    color: var(--dba-darkgray);
    text-decoration-color: rgba(0,0,0,0);
}

#login-container p:hover{
    text-decoration: underline;
    text-decoration-color: var(--dba-darkgray);
    transition: all var(--hover-fade-duration);
}

.search-field{
    width: 574px;
    height: 37px;
    border-radius: var(--button-border-radius);
    background-color: var(--dba-lightblue);
    outline: solid var(--input-field-border-weight) var(--dba-primary);
    padding-left: 27px;
}

#search-container{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
}

header{
background-color: white;
width: 100vw;
height: 115px;
display: flex;
justify-content: center;
align-items: center;
}




header .container{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

#logo{
    max-width: 8rem;
    width: 100%;
    padding-bottom: 10px;
}



</style>