<template>
    <v-container>
        <v-row no-gutters>
            <v-col sm="10" class="mx-auto">
                <v-card class="pa-5">
                    <v-card-title> Редактировать вакансию</v-card-title>
                    <v-divider></v-divider>
                    <v-form ref="from" @submit.prevent="updateForm" class="pa-5" enctype="multipart/form-data">
                     <v-text-field label="Наименование" v-model="vacancy.name"></v-text-field>
                     <v-text-field label="Заработная плата" v-model="vacancy.salary"></v-text-field>
                     <v-textarea label="Описание" v-model="vacancy.description"></v-textarea>
                     <v-text-field label="Образование"  v-model="vacancy.education"></v-text-field>
                     <v-text-field label="Опыт работы"  v-model="vacancy.experience"></v-text-field>

                     <v-btn type="submit" class="mt-3" rounded color="success">Обновить</v-btn>
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
    async created(){
        const response = await API.getVacancyByID(this.$route.params.id);
        this.vacancy = response;
    },
    methods:{
        async updateForm(){
            const formData = new FormData();
            formData.append('name', this.vacancy.name);
            formData.append('salary', this.vacancy.salary);
            formData.append('description', this.vacancy.description);
            formData.append('education', this.vacancy.education);
            formData.append('experience', this.vacancy.experience);
            // if (this.$refs.form.validate()) {
             const response = await API.updateVacancy(this.$route.params.id, formData);
             this.$router.push({ name: 'VacanciesHR', params: {message: response.message}})
            // }
        },
    },
};
</script>