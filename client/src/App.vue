<template>
  <div id="app">
    <component :is="layout">
    <router-view/>
    </component>
  </div>
</template>

<script>
import  MainLayout from '../src/layouts/MainLayout.vue'
import EmptyLayout from '../src/layouts/EmptyLayout.vue'
import EmployeeLayout from '../src/layouts/EmployeeLayout.vue'
import ModeratorLayout from '../src/layouts/ModeratorLayout.vue'

export default {
  computed: {
    layout(){
      // Понимает по мето инфе какой views загружать
      return (this.$route.meta.layout || 'main')+'-layout'
    }
  },

  components: {
   MainLayout, EmptyLayout, EmployeeLayout, ModeratorLayout
  }
}
</script>

<style>

*{
  margin: 0;
  padding: 0;
}

</style>