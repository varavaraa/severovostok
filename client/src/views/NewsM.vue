<template>
   <v-container>
      <v-row no-gutters>
        <v-col sm="10" class="pa-4 mx-auto">
          <v-card class="pa-2">           
            <v-img :src="`/${news.image}`" max-height=400px max-width=1000px></v-img>
            <v-card-actions class="pb-0">
                <v-row class="mt-1 mx-1">

                 <v-col sm="10" class="d-flex justify-end">
                  <v-btn color="green" text :to="{name: 'EditNewsM', params: {id: news._id} }">Редактировать</v-btn>
                  <v-btn color="red" text  @click="removeNews(news._id)">Удалить</v-btn>
                </v-col>
              </v-row>
            </v-card-actions>
            <v-card-title class="headline"> <p>{{news.name}}</p></v-card-title>
            <v-card-subtitle class="headline"> <p>{{news.dateOfPublication}}</p></v-card-subtitle>
            <v-card-text class="grey--text">
              {{news.content}}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>


<script>
import API from "../controllers/apiNewsM";
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
    methods:{
      async removeNews(id){
        const response = await API.deleteNews(id);
        this.$router.push({ name: 'HomePageM', params: {message: response.message}})
      }
    }
}
</script>