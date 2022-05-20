<template lang="">
    <form action="" class="flex flex-col" @submit="submit">
        <input type="text" name="nom" v-model="nom" placeholder="nom" class="py-2.5" required>
        <input type="text" name="prenom" v-model="prenom" placeholder="prenom"class="py-2.5" required>
        <input type="email" name="email" v-model="email" placeholder="email" class="py-2.5" required>
        <input type="email" name="confirm-mail" v-model="confirmEmail" placeholder="Confirmation de l'adresse mail"  class="py-2.5"required>
        <input type="password" name="password" v-model="password" placeholder="Mot de passe" class="py-2.5" required>
        <input type="password" name="confirm-password" v-model="confirmPassword" placeholder="Confirmation du mot de passe" class="py-2.5" required>
        <button type="submit" name="submit">S'enregistrer</button>
    </form>
</template>
<script>
import * as bcrypt from 'bcryptjs';
export default {
    data() {
        return {
        nom:null,
        prenom:null,
        email:null,
        confirmEmail:null,
        password:null,
        confirmPassword:null
        }
    },
   methods:{
       async submit(event){
           event.preventDefault();

           let nom = this.nom;
           let prenom = this.prenom;
           let email = this.email;
           let confirmEmail = this.confirmEmail;
           let password = this.password;
           let confirmPassword = this.confirmPassword;

           if(nom === null || prenom === null || email === null || confirmEmail === null || password === null || confirmPassword === null){
                return this.$emit('error', 'Veuillez remplir tout les champs de formulaires')
           }
           if(email != confirmEmail){
               return this.$emit('error', 'Les adresses E-mail ne sont pas identiques')
           }
           if(password != confirmPassword){
               return this.$emit('error', 'Les mots de passes ne sont pas identiques')
           }

            const salt =  bcrypt.genSaltSync(Number(process.env.BCRYPT_SALT))
            const passwordHashed = bcrypt.hashSync(password, salt);

            try{
                const res = await this.$axios.$post(`${process.env.API_URL}/users` ,{
                    "name": nom,
                    "surname": prenom,
                    "email": email,
                    "password": passwordHashed,
                })

                const mdp64 = `Basic ${Buffer.from(`${email}:${password}`).toString('base64')}`;
                await this.$auth.loginWith('local',{
                    data:{
                        "Authorization" : mdp64
                    }
                })
            }catch(e){
                return this.$emit('error', e.response.data.message)
            }
                      
        }
   }
}
</script>