<template>
<div class="my-nav">
     <div class="logo">
      <p @click="$router.push('/')">СЕВЕРО ВОСТОК</p>
    </div>

    <div class="about">
      <a href="/#aboutco" v-scroll to="'/#aboutco'" title="О компании">О компании</a>
      <a href="#" title="Новости">Новости</a>
      <a href="#" title="Работа в компании">Работа в компании</a>
      <a href="#" title="Контакты">Контакты</a>
    </div>
   
</div>
</template>

<script>
export default {
    name: 'myNavbar',
}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto|Suez+One');
@import url('https://fonts.googleapis.com/css?family=Cormorant+Garamond:300,300italic,regular,italic,500,500italic,600,600italic,700,700italic');
@import url('https://fonts.googleapis.com/css?family=Merriweather:300,300italic,regular,italic,700,700italic,900,900italic');

.my-nav{
  width: 100%;
  padding: 10px 10px;
  font-family: 'Merriweather'; 
  position: fixed;
  background-color: #fff;
  z-index: 5000;
}

.my-nav .logo{
    cursor: pointer;
    font-size: 35px;
    margin-left: 40px;
    font-family: 'Cormorant Garamond'; /*font-family: 'Suez One', serif;*/
    font-weight: 600;
    float: left;
}

.my-nav .about{
  text-align: center;
  font-size: 1em;
  margin-top: 10px;
}

.my-nav .about a {
    text-decoration: none;
    color: #000;

}

.my-nav .about a + a {
 margin-left: 100px;
}

.my-nav .about a:hover {
   color: #b0b0b0;
}

</style>