<template>
    <v-card>
        <v-card-title>Informacion de la cuenta</v-card-title>
        <v-card-text>
           <h3>Name: {{user.username}}</h3>
           <br>
           <h3>Password: {{user.password}}</h3>
           <br>
           <h3>Email: {{user.email}}</h3>
        </v-card-text>
        <v-btn 
        red
        @click="deleteUserData"
        to="/"
        >
            Sign out
        </v-btn>
    </v-card>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
    data(){
        return{
            
        }
    },
    computed: {
        ...mapState(['user'])
    },
    methods: {
        ...mapActions(['deleteUser']),
        deleteUserData(){
            this.deleteUser();
        }
    }
}
</script>