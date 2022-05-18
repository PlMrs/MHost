<template lang="">
    <div style="padding-top: 100px">
        <div v-if="$auth.loggedIn /* CHecker si admin*/">
          <adminDashboard />
        </div>
        <div v-else>
          <userDashboard />
        </div>
    </div>
</template>
<script>
export default {
  middleware: 'auth'
}
</script>
<style lang="">
    
</style>