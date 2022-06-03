<template>
<div class="app-main-layout">

<my-navbar/>

<div class="blocks-site">
<router-view/>
</div>


</div>
   
</template>

<script>
import myNavbar from '../components/myNavbar.vue'

export default{
  name: 'main-layout',
   components: {
    myNavbar
  }
}
</script>

