<template>
   <v-container>
      <v-row no-gutters>
        <v-col sm="10" class="pa-4 mx-auto">
          <v-card class="pa-2">
            <v-card-actions class="pb-0">
                <v-row class="mt-1 mx-1">
                  <!-- <v-col sm="2">
                   <v-btn small outlined color="primary" > <a :href="`../uploads/${resume.fileResume}`">{{resume.fileResume}}</a></v-btn> -->
                   <!-- <v-item> <a :href="resume.url">{{resume.fileResume}}</a> </v-item> -->
                 <!-- </v-col> -->
                 <v-col sm="10" class="d-flex justify-end">
                  <v-btn color="green" text :to="{name: 'EditVacancyHR', params: {id: vacancy._id} }">Редактировать</v-btn>
                  <v-btn color="red" text  @click="removeVacancy(vacancy._id)">Удалить</v-btn>
                </v-col>
              </v-row>
            </v-card-actions>
            <v-card-title class="headline"> <p>{{vacancy.name}}</p></v-card-title>
            <!-- <v-card-subtitle class="headline"> <p>{{vacancy.salary}}</p></v-card-subtitle> -->
            <v-card-text class="grey--text">
              <p>Заработная плата: {{vacancy.salary}}</p>
              <p>Описание: {{vacancy.description}}</p>
              <p>Образование: {{vacancy.education}}</p>
              <p>Опыт работы: {{vacancy.experience}}</p>
              <p>{{vacancy.created}}</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>


<script>
import API from "../controllers/apiVacancyHr";
export default {
    data(){
        return{
            vacancy: {},
        };
    },
    async created(){
        const response = await API.getVacancyByID(this.$route.params.id);
        this.vacancy = response;
    },
    methods:{
      async removeVacancy(id){
        const response = await API.deleteVacancy(id);
        this.$router.push({ name: 'VacanciesHR', params: {message: response.message}})
      }
    }
}
</script>