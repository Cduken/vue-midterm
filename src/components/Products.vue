<template>
  <div>
    <h2>Product Management</h2>
    <ProductForm @add-product="$emit('add-product', $event)" />
    <ProductList :products="products" @edit-product="$emit('edit-product', $event)" />
  </div>
</template>

<script>
import ProductForm from '@/components/ProductForm.vue';
import ProductList from '@/components/ProductList.vue';

export default {
  name: "ProductsPage",
  components: {
    ProductForm,
    ProductList,
  },
  props: ['products'],
};
</script>
