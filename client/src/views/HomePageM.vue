<template>
    <v-container>
        <v-alert border="left" close-text="Close alert" color="green accent-4" dark
         dismissible  v-if="this.$route.params.message">
         {{ this.$route.params.message }}</v-alert>
        <v-row no-gutters>
            <v-col sm="4" class="pa-3" v-for="news in news" :key="news._id">
                <v-card class="pa-1" :to="{name: 'NewsM', params: {id: news._id} }">
                    <v-card-title class="headline"> {{news.name}}</v-card-title>
                    <v-card-text class="py-0"> 
                        <p> {{news.dateOfPublication}}</p>
                        </v-card-text>
                    <v-card-text class="py-0">
                         <p>{{news.content.substring(0,50)+"..."}}
                         </p> </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import API from "../controllers/apiNewsM";
export default{
    name: "HomePageM",
    data() {
        return{
            news: [],
        };
    },
    async created(){
        this.news = await API.getAllNews();
    }
};
</script>
