<template>
<div class="grey-empty-layout">
 <router-view/>
 </div>
</template>

<script>
export default {
 name: 'empty-layout',
}
</script>

<style>
.grey-empty-layout{
  background-color:lightgray;
  position: fixed; top: 0; left: 0; width: 100%; height: 100%;
}
</style>