<template lang="">
    <form action="" class="flex flex-col">
        <input type="text" placeholder="nom" class="py-2.5" required>
        <input type="text" placeholder="prenom"class="py-2.5" required>
        <input type="email" name="email" placeholder="email" class="py-2.5" required>
        <input type="email" name="confirm-mail" placeholder="Confirmation de l'adresse mail"  class="py-2.5"required>
        <input type="password" name="password" placeholder="Mot de passe" class="py-2.5" required>
        <input type="password" name="confirm-password" placeholder="Confirmation du mot de passe" class="py-2.5" required>
        <input type="submit" value="S'enregistrer">
    </form>
</template>
<script>
export default {
   
}
</script>