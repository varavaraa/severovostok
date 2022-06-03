<template>
   <v-container>
      <v-row no-gutters>
        <v-col sm="10" class="pa-4 mx-auto">
          <v-card class="pa-2">
            <v-card-actions class="pb-0">
                <v-row class="mt-1 mx-1">
                  <v-col sm="2">
                   <v-btn small outlined color="primary" > <a :href="`/uploads/${resume.fileResume}`">{{resume.fileResume}}</a></v-btn>
                   <!-- <v-item> <a :href="resume.url">{{resume.fileResume}}</a> </v-item> -->
                 </v-col>
                 <v-col sm="10" class="d-flex justify-end">
                  <v-btn color="red" text  @click="removeResume(resume._id)">Удалить</v-btn>
                </v-col>
              </v-row>
            </v-card-actions>
            <v-card-subtitle class="headline"> <p>{{resume.wantPost}}</p></v-card-subtitle>
            <v-card-text class="grey--text">
              <p>Фамилия: {{resume.surname}}</p>
              <p>Имя: {{resume.name}}</p>
              <p>Отчество: {{resume.patronymic}}</p>
              <p>Телефон: {{resume.phone}}</p>
              <p>Почта: {{resume.email}}</p>
              <p>Желаемая должность: {{resume.wantPost}}</p>
              <p>{{resume.created}}</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>


<script>
import API from "../controllers/apiResumeHr";
export default {
    data(){
        return{
            resume: {},
        };
    },
    async created(){
        const response = await API.getResumeByID(this.$route.params.id);
        this.resume = response;
    },
    methods:{
      async removeResume(id){
        const response = await API.deleteResume(id);
        this.$router.push({ name: 'HomePageHR', params: {message: response.message}})
      }
    }
}
</script>