<script setup>
import SiteHeader from './components/SiteHeader.vue'
</script>


<template>
<SiteHeader></SiteHeader>

  <div>

   
    
<RouterView></RouterView>

  </div>
</template>


<style>

p{
  font-weight: 400;
  line-height: 120%;
  font-family: 'Proxima-Nova', sans-serif;
}

h1, h2, h3, h4{
    font-family: 'Proxima-Nova', sans-serif;
    line-height: 120%;
}

input, button{
  border: none;
  font-family: 'Proxima-Nova', sans-serif;
}

a{
  text-decoration: none;
}


section{
background-color: white;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
}

.container{
    background-color: white;
    width: 100vw;
    max-width: 1280px;
    /* border: solid 1px black; */
    margin-left: 30px;
    margin-right: 30px;
}

body{
  background-color: white;
}

</style>