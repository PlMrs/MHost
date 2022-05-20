<template lang="">
    <div style="padding-top: 100px">
        <div v-if="checkAdmin">
          <adminDashboard />
        <p>{{checkAdmin}}</p>
        </div>
        <div v-else>
          <userDashboard />
        </div>
    </div>
</template>
<script>
export default {
  middleware: 'auth',

  computed: {
    checkAdmin() {
      if(this.$auth.$state.user.role === "A" && this.$auth.loggedIn){
        return true
      }
      return false
    }
  }
}
</script>
<style lang="">
    
</style>