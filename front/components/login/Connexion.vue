<template lang="">
     <form action="" id="login-app" @submit="submit" class="flex flex-col">
            <label for="email">E-mail</label>
            <input type="email" name="email" placeholder="email" v-model="email">
            <label for="mdp">Mot de passe</label>
            <input type="text" name="mdp" placeholder="6 caractères minimum" v-model="mdp">
            <button type="submit" name="submit">Envoyer</button>
     </form>
</template>
<script>
    import axios from 'axios';
    export default {
    data() {
        return{
        email:null,
        mdp:null}
    },
    methods: {
        submit(event){
            event.preventDefault();
            const mdp64 = Buffer.from(`${this.email}:${this.mdp}`).toString('base64');
            axios.get(process.env.API_URL + '/auth/token',{ 
                headers: { 
                    'Authorization': `Basic ${mdp64}`,
                    'Content-Type' : 'application/json' 
                    }
                }).then(res=>{
                    console.log(res)
                }).catch(e=>{
                    this.$emit('error', e.response.data.message)
            })
        }
    },
    }
</script>
