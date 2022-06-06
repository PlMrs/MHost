<template>
    <div>
        <h1>Admin SideBar</h1>
        <ul>
            <li @click="show('ListUsers')"><p>Liste de tout les utilisateurs</p></li>
            <li @click="show('ValidUser')"><p>Vérifier un utilisateur</p></li>
            <li @click="show('HostDemand')"><p>Demande d'hôte</p></li>
        </ul>
        
    </div>
</template>
<script>
export default {
    methods:{
        show(el){
            this.$emit('show',el)
        }
    }
}
</script>