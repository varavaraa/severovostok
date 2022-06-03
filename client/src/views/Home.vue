<template>
<div class="main-page">

<!-- Блок с картинкой -->
<div class="main-img">
    <h1>Ресурсы, <br> дарованные <br> природой</h1>
</div>
<!-- Блок с картинкой -->

<!-- Блок о компании -->
 <div id="aboutco">
    <h2>О компании</h2>
    <div class="block">

      <div class="image">
        <a @click="$router.push('/StructureCompany')"> 
        <img width="500" height="300" src="../assets/menedzher.jpg" />
        <div class="centered"><span> Структура </span></div>
      </a></div>

    </div>
    <div class="block">

      <div class="image">
        <a @click="$router.push('/VectorCompany')"> 
        <img width="500" height="300" src="../assets/minerals.jpg" />
        <div class="centered"><span> Направления деятельности </span></div>
      </a></div>

    </div>
  </div>
  <!-- Блок о компании -->

  <!-- Блок новостей -->
  <div id="news">
    <h2>Новости</h2>

    <v-container>
        <v-row no-gutters>
            <v-col sm="6" class="pa-4" v-for="news in news" :key="news._id">
                <v-card class="card" :to="{name: 'News', params: {id: news._id} }">
                    <v-card-title class="headline"> <p>{{news.dateOfPublication}}</p></v-card-title>
                    <v-card-title > <p>{{news.content.substring(0,100)+"..."}}</p></v-card-title>
                    <!-- <v-card-text class="py-0"> 
                        <p> {{news.dateOfPublication}}</p>
                        </v-card-text> -->
                    <!-- <v-card-text class="py-0">
                         <p>{{news.content.substring(0,100)+"..."}}
                         </p> </v-card-text>  -->
                </v-card>
            </v-col>
        </v-row>
    </v-container>
    
  </div>
  <!-- Блок новостей -->
     
     <!-- Блок Работа  -->
     <div id="job">
    <h2>Работа в компании</h2>
    <div class="block">
      <span>Социальные программы</span>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, nam distinctio officiis commodi quam delectus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, ad!</p>
        <a class="btnjob" @click="$router.push('/SocialProgramm')">Подробнее</a>
    </div>
    <div class="block">
      <span>Вакансии</span>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, nam distinctio officiis commodi quam delectus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, ad!</p>
        <a  class="btnjob" @click="$router.push('/Vacancy')">Подробнее</a>
        <!-- <button type="button" class="btnjob" @click="$router.push('/Vacancy')">Подробнее</button> -->
    </div>
  </div>
  <!-- Блок Работа  -->

  <!-- Что-то похожее на футер -->
<div class = "my-footer">
  <div id="faq">
    <div>
      <span class="title">Благодарим за интерес, проявленный к нам</span>
      <span class="heading">Адрес</span>
      <p>Магаданская обл, Магадан <br>
        пр-кт Ленина, 2А</p>
        <span class="heading">Электронная почта</span>
        <p>infosv@yandex.ru</p>
      <span class="heading">Телефон</span>
      <p>+7 (900) 000 00 00</p>
      <span class="heading">Факс</span>
      <p>+7 (900) 000 00 00</p>
    </div>
    <div>
   <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Acc438b857712551f4c96ac58b43fa91615e87b352b4c4e16fad7b5e65bbb7103&amp;source=constructor" width="600" height="429" frameborder="0"></iframe>
    </div>
  </div>
</div>
  <!-- Что-то похожее на футер -->
 
</div>
</template>

<script>
import API from "../controllers/api";
export default{
    name: "HomePageM",
    data() {
        return{
            news: [],
        };
    },
    async created(){
        this.news = await API.getAllNews();
    },
    mounted(){
      var selection=this.$router.currentRoute.hash.replace("#","");
      if (selection)
      this.$nextTick(()=> window.document.getElementById(selection).scrollIntoView());
    }
};
</script>

<style scoped>

.headline p{
  font-size: 35px; 
}

.card{
  margin-right: 50px;
  margin-top: 30px;
}

h1, h2, h3, h4, h5 {
  /*font-family: 'Roboto Slab', serif;*/
  font-weight: lighter;
}

.main-page{
  font-family: 'Merriweather';
  background-color: #fafafa;
}



/* Блок с картинкой */
.main-img {
  width: 100%;
  background-image: url('../assets/samosval.jpg');
  background-blend-mode: multiply;
  background-color: #2e3a44;
  background-size: cover;
  text-align: center;
  color: #fff;
  font-size: 3em;
  height: 1000px;
}

.main-img h1{
  padding-top: 20%;
  font-family: 'Cormorant Garamond'; 
  font-weight: 600;
}


/* Блок о компании */
#aboutco {
  width: 100%;
  float: left;
  padding-bottom: 40px;
  padding-top: 70px;
  border-top: 4px solid #ccc;
  background: #f4f4f4;
}


.image {
  /*Текст по верх*/
  overflow:hidden;
  width: 500px;
  height:300px;
  background: #000;
  position: relative;
  text-align: center;
  }

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}


.image img {
  /*Анимация изобр*/
  transition: all 1s ease-out;
  opacity: 0.4;}
    
.image img:hover{transform: scale(1.1)}

#aboutco h2 {
  font-size: 3em;
  margin-left: 6%;
  font-size: 4em; 
  color: #4f4f4f;
}

#aboutco .block {
  float: left;
  width: 30%;
  margin-right: 6%;
  margin-top: 50px;
  margin-left: 6%;
}

#aboutco .block:nth-child(odd) {
  margin-left: 6%;
}

#aboutco block {
  background: #fafafa;
  padding: 5px;
  border: 2px solid silver;
  float: left;
  width: 100%;
  max-width: 500px;
}


#aboutco span {
  float: left;
  width: 100%;
  font-size: 2em;
  margin-top: 10px;
  margin-bottom: 20px;
  color: #ffffff;
}


/* Блок новостей */
#news {
  float: left;
  background-image: url('../assets/samosval2.jpg');

  background-blend-mode: multiply;
  background-color: #403f40;
  background-size: cover;
  background-attachment: fixed;

  padding: 100px 0;
  width: 100%;
  text-align: left;
  color: #fff;
}

#news h2 {
  font-size: 4em;
  margin-left: 6%;
}

#news .block {
  float: left;
  width: 30%;
  margin-right: 6%;
  margin-top: 50px;
  margin-left: 6%;
}

#news .block:nth-child(odd) {
  margin-left: 6%;
}

/* #news block {
  background: #fafafa;
  padding: 5px;
  border: 2px solid silver;
  float: left;
  width: 100%;
  max-width: 500px;
} */
.block p{
  margin-bottom: 30px;
  font-size: 1.3em;
}

#news .btnnews {
  color: #000000; /* цвет текста */
  text-decoration: none; /* убирать подчёркивание у ссылок */
  user-select: none; /* убирать выделение текста */
  background:#fafafa; /* фон кнопки */
  padding: 1em 2em; /* отступ от текста */
  font-size: 1.2em;
} 
#news .btnnews:hover { background:#b0b0b0} /* при наведении курсора мышки */

#news span {
  float: left;
  width: 100%;
  font-size: 2em;
  margin-top: 10px;
  margin-bottom: 20px;
}

/* Блок о работе */
#job {
  width: 100%;
  float: left;
  padding-bottom: 40px;
  padding-top: 70px;
  border-top: 4px solid #ccc;
  background: #f4f4f4;
}

#job h2 {
  font-size: 3em;
  margin-left: 6%;
  font-size: 3em; color: #4f4f4f;
}

#job .block {
  float: left;
  width: 30%;
  margin-right: 6%;
  margin-top: 50px;
  margin-left: 6%;
}

#job .block:nth-child(odd) {
  margin-left: 6%;
}


.job p{
  margin-bottom: 30px;
  font-size: 1.3em;
}

#job .btnjob {
  color: #000000; /* цвет текста */
  text-decoration: none; /* убирать подчёркивание у ссылок */
  user-select: none; /* убирать выделение текста */
  background:#fafafa; /* фон кнопки */
  padding: 1em 2em; /* отступ от текста */
  font-size: 1.2em;
} 
#job .btnjob:hover { 
  background:#b0b0b0;
  cursor: pointer;
  } /* при наведении курсора мышки */

#job span {
  float: left;
  width: 100%;
  font-size: 2em;
  margin-top: 10px;
  margin-bottom: 20px;
}

/* Что-то похожее на футер */
#faq {
  background-color: #fff;
  border-top: 2px dashed #e4e3e3;
  width: 100%;
  float: left;
  padding-top: 70px;
  padding-bottom: 70px;
}
#faq span {
  display: block;
}

  #faq div {
    width: 40%;
    margin-left: 6%;
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
