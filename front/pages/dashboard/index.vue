<template>
    <div>
        <div v-if="checkAdmin">
          <AdminDashboard />
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