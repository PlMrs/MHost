<template lang="fr">
    <header>
        <nav>
            <ul>
                <li><NuxtLink to="/">Accueil</NuxtLink></li>
                <li><NuxtLink to="connexion">Connexion</NuxtLink></li>
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