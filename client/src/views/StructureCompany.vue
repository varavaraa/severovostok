<template>
<div class="structure-page">
    <div class="main">
    <div class="block">
      <h2>О компании. Структура компании</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati accusamus, numquam deleniti ipsa repudiandae modi? Optio, magni. Hic, soluta aperiam. A unde iure doloremque ut eos architecto officiis asperiores, nemo voluptates? Sunt quod iusto ex modi cumque hic animi possimus, odit ea temporibus recusandae officia repellat distinctio totam a maxime.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati accusamus, numquam deleniti ipsa repudiandae modi? Optio, magni. Hic, soluta aperiam. A unde iure doloremque ut eos architecto officiis asperiores, nemo voluptates? Sunt quod iusto ex modi cumque hic animi possimus, odit ea temporibus recusandae officia repellat distinctio totam a maxime.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati accusamus, numquam deleniti ipsa repudiandae modi? Optio, magni. Hic, soluta aperiam. A unde iure doloremque ut eos architecto officiis asperiores, nemo voluptates? Sunt quod iusto ex modi cumque hic animi possimus, odit ea temporibus recusandae officia repellat distinctio totam a maxime.</p>
    </div>
    </div>

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



<style scoped>

h1, h2, h3, h4, h5 {
  font-weight: lighter;
}

.structure-page{
  width: 100%;
  height: 100%;
  font-family: 'Merriweather';
  background-color: #fafafa;
}

.main {
  float: left;
  /*padding-bottom: 40px;*/
  padding-top: 70px;
  border-top: 4px solid #ccc;
  background: #f4f4f4;
}

h1, h2, h3, h4, h5 {
  font-weight: lighter;
}

.main h2 {
  font-size: 2.5em;
  /* margin-left: 6%; */
  color: #4f4f4f;
  padding-bottom: 40px;
}

.main .block {
  width: 80%;
  margin-right: 6%;
  margin-top: 40px;
  margin-left: 6%;
  margin-bottom: 80px;
  /* background:#fff; */
}

.main p{
  margin-bottom: 30px;
  font-size: 1.3em;
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
