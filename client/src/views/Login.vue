<template>
  <v-container class="containerOfLogin">
    <v-row no-gutters > 
      <v-col sm="3" class="mx-auto">
          <v-card>
        <v-card-title>
          <span class="text-h5">Авторизация</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              
              <v-col cols="12">
                <v-text-field
                  label="Имя пользователя*"
                  required
                  v-model="user.username"
              :rules="rules"
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  label="Пароль*"
                  type="password"
                  required
                  v-model="user.password"
              :rules="rules"
                ></v-text-field>
              </v-col>

              
            </v-row>
          </v-container>

        </v-card-text>
        <v-card-actions>
                <v-btn
            color="blue darken-1"
            text
            @click="submitForm">
            Войти
          </v-btn>
        </v-card-actions>
      </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import API from "../controllers/authApi";
export default {
  data() {
    return {
      rules: [(value) => !!value || "This field is required!"],
      user: {
        username: "",
        password: "",
      }

    };
  },
  
  methods: {
     submitForm() {
      const formData = new FormData();
      formData.append("username", this.user.username);
      formData.append("password", this.user.password);
      // if (this.$refs.form.validate()) {
        API.loginUser({username: this.user.username, password: this.user.password});
      // }
    },
  },
};
</script>

<style scoped>
.containerOfLogin{
    margin: 200px;
    margin-left: 550px;
}

</style>