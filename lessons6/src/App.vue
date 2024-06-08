<template>
  <HeaderComponent />
  <CustomLayout>
    <router-wiev/>
  </CustomLayout>

</template>

<script>
import { defineComponent } from 'vue';
import HeaderComponent from '@/components/HeaderComponent';
import CustomLayout from '@/components/CustomLayout.vue';

export default defineComponent ({
  components: { HeaderComponent, CustomLayout },
  setup() {
        return {

        }
     }
});
</script>

<style>
  ul {
    list-style: none;
    padding: 0
  }

  a {
    color: black;
    text-decoration: none
  }

  a:hover {
    text-decoration: underline
  }
</style>
