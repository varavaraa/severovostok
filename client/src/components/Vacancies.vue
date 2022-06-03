<template>
    <v-container>
        <v-row no-gutters>
            <v-col sm="11" class="pa-3" v-for="vacancy in vacancies" :key="vacancy._id">
                <v-card class="pa-1">
                    <v-card-title class="headline"> {{vacancy.name}}</v-card-title>
                    <v-card-subtitle class="headline"> {{vacancy.salary}}</v-card-subtitle>
                    <v-card-text class="py-0"> 
                        <p>{{vacancy.description}}</p> 
                        <p>Образование: {{vacancy.education}}</p>
                        <p>Опыт работы: {{vacancy.experience}}</p>
                        <p>Вакансия опубликована: {{vacancy.created.substring(0,10)}}</p>
                        </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import API from "../controllers/api";
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
