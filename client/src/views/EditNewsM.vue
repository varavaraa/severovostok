<template>
    <v-container>
        <v-row no-gutters>
            <v-col sm="10" class="mx-auto">
                <v-card class="pa-5">
                    <v-card-title> Обновить новость</v-card-title>
                    <v-divider></v-divider>
                    <v-form ref="from" @submit.prevent="updateForm" class="pa-5" enctype="multipart/form-data">
                     <v-text-field label="Дата" v-model="news.dateOfPublication" ></v-text-field>
                     <v-text-field label="Название" v-model="news.name" ></v-text-field>
                     <v-textarea label="Описание" v-model="news.content" ></v-textarea>
                     <v-file-input  @change="selectFile"
                     v-model="news.image" 
                     how-size counter multiple label="Выбрать фото"></v-file-input>
                     <v-img :src="`/${news.image}`" width=120px></v-img>
                     <v-btn type="submit" class="mt-3" rounded color="success">Обновить</v-btn>
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
            
            news:{
                dateOfPublication:'',
                name:"",
                content:"",
                image:"",
            },  
            image:"",
        };
    },
     async created(){
        const response = await API.getNewsByID(this.$route.params.id);
        this.news = response;
     },
    methods:{
            selectFile(file) {
      this.image = file[0];
    },
        async updateForm(){
            const formData = new FormData();
            formData.append("image", this.image);
            formData.append("dateOfPublication", this.news.dateOfPublication);
            formData.append("name", this.news.name);
            formData.append("content", this.news.content);
            formData.append("old_image", this.news.image);
            
            const response = await API.updateNews(this.$route.params.id, formData);
            this.$router.push({ name: 'HomePageM', params: {message: response.message}})
            
        },
    },
};
</script>