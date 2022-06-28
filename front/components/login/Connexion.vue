<template>
     <form action="" id="login-app" @submit="submit" class="flex flex-col">
            <label for="email">E-mail</label>
            <input type="email" name="email" placeholder="email" v-model="email">
            <label for="mdp">Mot de passe</label>
            <input type="password" name="mdp" placeholder="6 caractères minimum" v-model="mdp">
            <button type="submit" name="submit">Envoyer</button>
     </form>
</template>
<script>
    export default {
    data() {
        return{
        email:null,
        mdp:null
        }
    },
    methods: {
        submit(event){
            event.preventDefault();

            try{
                const credential = `Basic ${Buffer.from(`${this.email}:${this.mdp}`).toString('base64')}`;
                this.$auth.loginWith('local',{
                    data:{
                        "Authorization" : credential
                    }
                })
            }catch(e){
                this.$emit('error', e.response.data.message)
            }
        }
    },
    }
</script>