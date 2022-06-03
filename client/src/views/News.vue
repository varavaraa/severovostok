<template>
<div class="news-block">
  <v-container >
      <v-row no-gutters>
        <v-col sm="10" class="pa-4 mx-auto">
          <v-card class="pa-2">           
            <v-img :src="`/${news.image}`" max-height=400px max-width=1000px></v-img>
            <v-card-title class="headline"> <p>{{news.name}}</p></v-card-title>
            <!-- <v-card-title class=""> <p>{{news.dateOfPublication}}</p></v-card-title> -->
            <v-card-text class="text-card-content">
             <p> {{news.content}}</p>
            </v-card-text>
            <v-card-title>{{news.created.substring(0,10)}}</v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

   <div class = "my-footer">
    <div id="faq">
      <div>
        <span class="heading">Адрес</span>
        <p>Магаданская обл, Магадан <br>
          пр-кт Ленина, 2А</p>  
      </div>

      <div>
        <span class="heading">Электронная почта</span>
        <p>infosv@yandex.ru</p>
      </div>
      <div>
        <span class="heading">Телефон</span>
        <p>+7 (900) 000 00 00</p>
      </div>
      <div>
        <span class="heading">Факс</span>
        <p>+7 (900) 000 00 00</p>
      </div>
     </div>
  </div>


</div>

</template>

<script>
import API from "../controllers/api";
export default {
    data(){
        return{
            news: {},
        };
    },
    async created(){
        const response = await API.getNewsByID(this.$route.params.id);
        this.news = response;
    },
}
</script>

<style>

.news-block{
padding-top: 100px;
}
.headline p{
  font-size: 40px;
  line-height: 1.0;
}

.text-card-content p{ 
  font-size: 30px;
  line-height: 1.0;
}

/* Что-то похожее на футер */
#faq {
  background-color: #fff;
  border-top: 2px dashed #e4e3e3;
  width: 100%;
  float: left;
  padding-top: 30px;
  padding-bottom: 20px;
}
#faq span {
  display: block;
}

  #faq div {
    /*width: 50%;*/
    margin-left: 10%;
    float: left;
  }

#faq .title {
  font-weight: lighter;
  color: #a3a0ad;
  margin-bottom: 20px;
  font-size: 2.2em;
}

#faq .heading {
  color: #7d7d7d;
  font-size: 1.3em;
  font-weight: bold;
  margin-bottom: 5px;
}

#faq p {
  font-family: Arimo, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  color: #4a4a4a;
  font-size: 0.95em;
 margin-bottom: 20px;
}

</style>