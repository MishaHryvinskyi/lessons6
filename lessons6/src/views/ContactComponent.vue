<template>
    <div>
        <h1>Contact us!</h1>
        <p>If you have anu questions, comments or conserns, please feel free to reach to us!</p>
        <div v-if="loading">
            <p>Loading contact informations...</p>
        </div>
        <div v-else>
            <p><strong>Email: </strong> {{ contactInfo?.email }}</p>
            <p><strong>Phone: </strong> {{ contactInfo?.phone }}</p>
            <p><strong>Sity: </strong> {{ contactInfo?.address.sity }}</p>
            <p><strong>Street: </strong> {{ contactInfo?.address.street }}</p>
            <p><strong>Zip: </strong> {{ contactInfo?.address.zip }}</p>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';
import { defineComponent, ref, onMounted } from 'vue';
  
  
export default defineComponent ({
    name: 'ContactComponent',
    setup() {

        const loading = ref(true);
        const contactInfo = ref({});

        onMounted(async () => {
            try{
                const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
                contactInfo.value = response.data;
                loading.value = false;
            } catch(error) {
                console.error(error);
                loading.value = false;
            }
        })

          return {
            loading,
            contactInfo
          }
       }
});
</script>
  
<style scoped>
  
</style>
  