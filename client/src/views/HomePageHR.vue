<template>
    <v-container>
        <v-alert border="left" close-text="Close alert" color="green accent-4" dark
         dismissible  v-if="this.$route.params.message">
         {{ this.$route.params.message }}</v-alert>
        <v-row no-gutters>
            <v-col sm="11" class="pa-3" v-for="resume in resumes" :key="resume._id">
                <v-card class="pa-1" :to="{name: 'ResumeHR', params: {id: resume._id} }">
                    <v-card-title class="headline"> {{resume.wantPost}}</v-card-title>
                    <v-card-text class="py-0"> <p>{{resume.surname}} {{resume.name}} {{resume.patronymic}}</p> </v-card-text>
                    <v-card-text class="py-0"> <p>{{resume.created.substring(0,10)}} </p> </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import API from "../controllers/apiResumeHr";
export default{
    name: "HomePageHR",
    data() {
        return{
            resumes: [],
        };
    },
    async created(){
        this.resumes = await API.getAllResume();
    }
};
</script>
