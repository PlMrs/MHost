<template lang="fr">
    <header class="fixed w-full p-4 bg-white">
        <nav v-if="$auth.loggedIn">
            <ul class="flex flex-row justify-evenly">
                <li><NuxtLink to="/user">Accueil</NuxtLink></li>
                <li>Rechercher</li>
                <li>Messagerie</li>
                <li><v-btn @click="$auth.logout()">Déconnexion</v-btn></li>
            </ul>
        </nav>
        <nav v-else>
            <ul class="flex flex-row justify-evenly">
                <li><NuxtLink to="/">Accueil</NuxtLink></li>
                <li><NuxtLink to="login">Connexion</NuxtLink></li>
            </ul>
        </nav>
    </header>
</template>
<script>
import Vue from 'vue';
export default Vue.extend({
  name: 'Header'
})
</script>