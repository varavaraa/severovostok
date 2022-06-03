<template>
    <v-container>
        <v-row no-gutters>
            <v-col sm="10" class="mx-auto">
                <v-card class="pa-5">
                    <v-card-title> Добавить новую вакансию</v-card-title>
                    <v-divider></v-divider>
                    <v-form ref="from" @submit.prevent="submitForm" class="pa-5" enctype="multipart/form-data">
                     <v-text-field label="Наименование" v-model="vacancy.name" :rules="rules"></v-text-field>
                     <v-text-field label="Заработная плата" v-model="vacancy.salary" :rules="rules"></v-text-field>
                     <v-textarea label="Описание" v-model="vacancy.description" :rules="rules"></v-textarea>
                     <v-text-field label="Образование"  v-model="vacancy.education" :rules="rules"></v-text-field>
                     <v-text-field label="Опыт работы"  v-model="vacancy.experience" :rules="rules"></v-text-field>

                     <v-btn type="submit" class="mt-3" rounded>Добавить</v-btn>
                    </v-form>
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
            rules: [(value)=> !!value || "Заполните данную область!"],
            vacancy:{
                name:"",
                salary:"",
                description:"",
                education:"",
                experience:"",
            }
        };
    },
    methods:{
        async submitForm(){
            const formData = new FormData();
            formData.append('name', this.vacancy.name);
            formData.append('salary', this.vacancy.salary);
            formData.append('description', this.vacancy.description);
            formData.append('education', this.vacancy.education);
            formData.append('experience', this.vacancy.experience);
            // if (this.$refs.form.validate()) {
             const response = await API.addVacancy(formData);
             this.$router.push({ name: 'VacanciesHR', params: {message: response.message}})
            // }
        },
    },
};
</script>