<template>
    <v-container>
        <v-alert border="left" close-text="Close alert" color="green accent-4" dark
         dismissible  v-if="this.$route.params.message">
         {{ this.$route.params.message }}</v-alert>
        <v-row no-gutters>
            <v-col sm="4" class="pa-3" v-for="vacancy in vacancies" :key="vacancy._id">
                <v-card class="pa-1" :to="{name: 'VacancyHR', params: {id: vacancy._id} }">
                    <v-card-title class="headline"> {{vacancy.name}}</v-card-title>
                    <v-card-title class="headline"> {{vacancy.salary}}</v-card-title>
                    <v-card-text class="py-0"> <p>{{vacancy.description.substring(0, 100)+"..."}} </p> </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import API from "../controllers/apiVacancyHr";
export default{
    name: "VacanciesHR",
    data() {
        return{
            vacancies: [],
        };
    },
    async created(){
        this.vacancies = await API.getAllVacancy();
    }
};
</script>
