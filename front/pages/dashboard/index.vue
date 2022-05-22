<template lang="">
    <div style="padding-top: 100px">
        <div v-if="checkAdmin">
          <AdminDashboard />
        <p>{{checkAdmin}}</p>
        </div>
        <div v-else>
          <UserDashboard />
        </div>
    </div>
</template>
<script>
export default {
  middleware: 'auth',

  computed: {
    checkAdmin() {
      console.log(this.$auth)
      console.log(this.$auth.$storage._state["_token.local"])
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