<template>
    <v-container>
        <v-row no-gutters>
            <v-col sm="10" class="mx-auto">
                <v-card class="pa-5">
                    <v-card-title> Добавить новость</v-card-title>
                    <v-divider></v-divider>
                    <v-form ref="from" @submit.prevent="submitForm" class="pa-5" enctype="multipart/form-data">
                     <v-text-field label="Дата" v-model="news.dateOfPublication" :rules="rules"></v-text-field>
                     <v-text-field label="Название" v-model="news.name" :rules="rules"></v-text-field>
                     <v-textarea label="Описание" v-model="news.content" :rules="rules"></v-textarea>
                     <v-file-input  @change="selectFile"
                     v-model="news.image" :rules="rules" 
                     how-size counter multiple label="Выбрать фото"></v-file-input>
                     <v-btn type="submit" class="mt-3" rounded>Добавить</v-btn>
                    </v-form>
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
            rules: [(value)=> !!value || "Заполните данную область!"],
            news:{
                dateOfPublication:'',
                name:"",
                content:"",
                image:"",
            },  
            image:"",
        };
    },
    methods:{
            selectFile(file) {
      this.image = file[0];
    },
        async submitForm(){
            const formData = new FormData();
            formData.append("image", this.image);
            formData.append('dateOfPublication', this.news.dateOfPublication);
            formData.append('name', this.news.name);
            formData.append('content', this.news.content);
            
             const response = await API.addNews(formData);
             this.$router.push({ name: 'HomePageM', params: {message: response.message}})
            
        },
    },
};
</script>