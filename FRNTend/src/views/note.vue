
<template>
<div>
    <allnote/>
  </div>
</template>

<script >
import Vue from 'vue';
import allnote from '@/components/allnote.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'note',
  components: {
    allnote,
  },
});
</script>
