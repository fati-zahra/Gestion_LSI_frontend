


<template>
<div>
    <allpl/>
  </div>
</template>

<script >
import Vue from 'vue';
import allpl from '@/components/allpl.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'Home',
  components: {
    allpl,
  },
});
</script>
