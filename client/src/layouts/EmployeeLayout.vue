<template>
       <div class="employeeblocks">
        <SlidebarEmployee/>
        <!-- <router-view/> удалить!!! дублирует страницы!!!!--> 
    </div> 
</template>



<script>
import SlidebarEmployee from '../components/SlidebarEmployee.vue'

export default{
  name: 'employee-layout',
   components: {
   SlidebarEmployee
  }
}
</script>
