<template>
    <div class="home">
        <input v-model="username" />
        <input v-model="password" />
        <button @click="loginIn">登录</button>
    </div>
</template>
  
<script>
import axios from "axios"
import Cookies from 'js-cookie'

export default {
    name: 'login',
    data() {
        return {
            username: "",
            password: ""
        }
    },
    methods: {
        loginIn() {
            axios.post("http://localhost:3000/login",
                { username: this.username, password: this.password }).then((res) => {
                    if (res.data.token) {
                        Cookies.set('token', res.data.token);
                        Cookies.set('id', res.data.id);
                        this.$router.push("/");
                    }
                })
        }
    }
}
</script>
  