<template>
<div class=form-vacancy>
<div class="main">
    <div class="block">
      <h2>Работа в компании. Вакансии</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati accusamus, numquam deleniti ipsa repudiandae modi? Optio, magni. Hic, soluta aperiam. A unde iure doloremque ut eos architecto officiis asperiores, nemo voluptates? Sunt quod iusto ex modi cumque hic animi possimus, odit ea temporibus recusandae officia repellat distinctio totam a maxime.</p>
    </div>
    </div>

  <Vacancies/>

  <div class="main">
    <div class="block">
      <p>Хотите работать у нас? Заполните форму отправки резюме, чтобы мы могли предложить Вам подходящую вакансию.</p>
    </div>
    </div>

  <v-container >

    <v-row no-gutters>
      <v-col sm="11" class="mx-auto">
        <v-card class="pa-5">
          <v-card-title>Заполните анкету и прекрепите ваше резюме</v-card-title>
          <v-divider></v-divider>
          <v-form
            ref="form"
            @submit.prevent="submitForm"
            class="pa-5"
            enctype="multipart/form-data"
          >
          <v-text-field
              label="Фамилия"
              v-model="resume.surname"
              :rules="rules"
            ></v-text-field>

            <v-text-field
              label="Имя"
              v-model="resume.name"
              :rules="rules"
            ></v-text-field>

           <v-text-field
              label="Отчество"
              v-model="resume.patronymic"
              :rules="rules"
            ></v-text-field>

            <v-text-field
              label="Тел"
              v-model="resume.phone"
              :rules="rules"
            ></v-text-field>

            <v-text-field
              label="E-mail"
              v-model="resume.email"
              :rules="rules"
            ></v-text-field>

            <!-- <v-text-field
              label="Желаемая должность"
              v-model="resume.wantPost"
              :rules="rules"
            ></v-text-field> -->

<v-label>Желаемая должность </v-label>
            <select 
               v-model="resume.wantPost"
              :rules="rules">
              <option v-for="vacancy in vacancies"
               :key="vacancy._id">{{vacancy.name}}</option>
            </select>

            <v-file-input
              @change="selectFile"
              :rules="rules"
              show-size
              counter
              multiple
              label="Загрузите ваше резюме"
            ></v-file-input>

            <v-btn type="submit" class="mt-3" color="#f4f4f4">
              Отправить резюме</v-btn>
            
          </v-form>
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
 import Vacancies from '../components/Vacancies.vue'
import API from "../controllers/api";
export default {
  data() {
    return {
      vacancies:[],
      rules: [(value) => !!value || "This field is required!"],
      resume: {
        surname: "",
        name: "",
        patronymic: "",
        phone: "",
        email: "",
        wantPost: "",
        fileResume: "",
      },
      fileResume: "",
    };
  },
      async created(){
        this.vacancies = await API.getAllVacancy();
        console.log( this.vacancies);
    },
  methods: {
    selectFile(file) {
      this.fileResume = file[0];
    },
    async submitForm() {
      const formData = new FormData();
      formData.append("fileResume", this.fileResume);
      formData.append("surname", this.resume.surname);
      formData.append("name", this.resume.name);
      formData.append("patronymic", this.resume.patronymic);
      formData.append("phone", this.resume.phone)
      formData.append("email", this.resume.email)
      formData.append("wantPost", this.resume.wantPost);
      if (this.$refs.form.validate()) {
        const response = await API.addResume(formData);
      }
    },
  },
  components:{
    Vacancies,
  }
};

</script>

<style scoped>

 select {
      /* width: 140px;*/
      height: 40px; 
      padding: 4px;
      border-radius:4px;
      /* box-shadow: 2px 2px 8px #999; */
      background: #eee;
      border: none;
      outline: none;
      display: inline-block;
      -webkit-appearance:none;
      -moz-appearance: none;
      appearance: none;
      cursor: pointer;
      }

.main {
  /* float: left; */
  /*padding-bottom: 40px;*/
  /* padding-top: 70px; */

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
  margin-right: 11%;
  margin-top: 40px;
  margin-left: 11%;
  margin-bottom: 30px;
  /* background:#fff; */
}

.main p{
  width: 90%;
  margin-bottom: 30px;
  font-size: 1.3em;
}
.form-vacancy{
  padding-top: 70px;
  width: 100%;
  height: 100%;
  font-family: 'Merriweather';
  background-color: #fafafa;
  background: #f4f4f4; 
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