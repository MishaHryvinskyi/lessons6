<template>
    <div>
        <h1>Products</h1>
        <div v-if="loading">
            <p>Product list loading...</p>
        </div>
        <div v-else>
            <ul class="product-list">
                <template v-for="product in products" :key="product.id">
                    <router-link :to="`/product/${product.id}`">
                        <li>{{ product.title }}</li>
                    </router-link>
                </template>
            </ul>
        </div>
    </div>
</template>
  
<script>
import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios';
  
  
export default defineComponent ({
    name: 'ProductList',
    setup() {

        const products = ref({});
        const loading = ref(true);

        onMounted(async () => {
            const response = await axios.get('https://fakestoreapi.com/products');
            products.value = response.data;
            loading.value = false;
        })

          return {
            products,
            loading
          }
       }
});
</script>
  
<style scoped>
  .product-list {
    display: grid;
    grid-template-columns: repeat(3, auto);
    gap: 20px;
  }

  .product-list li{
    display: grid;
    align-items: center;
    justify-content: center;
    justify-items: center;
    text-align: center;
    height: 100px;
    cursor: pointer;
    border: 1px solid black;
    border-radius: 5px;
    padding: 20px;
  }

  .product-list li:hover{
    border: 1px solid #ffffff;
    background-color: #acafbe;
    color: white;
  }

</style>
  