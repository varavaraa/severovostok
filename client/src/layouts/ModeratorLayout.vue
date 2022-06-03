<template>
       <div class="moderatorblocks">
        <SlidebarModerator/>

    </div> 
</template>



<script>
import SlidebarModerator from '../components/SlidebarModerator.vue'

export default{
  name: 'moderator-layout',
   components: {
   SlidebarModerator
  }
}
</script>