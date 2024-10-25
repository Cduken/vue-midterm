<template>
  <div class="main">
    <ProductForm @add-product="addProduct" />
    <ProductList :products="products" @edit-product="editProduct" />
  </div>
</template>

<script>
import ProductForm from '@/components/ProductForm.vue';
import ProductList from '@/components/ProductList.vue';

export default {
  name: 'ProductsPage',
  data() {
    return {
      products: [], // Products array stored here
    };
  },
  components: {
    ProductForm,
    ProductList,
  },
  methods: {
    addProduct(newProduct) {
      this.products.push(newProduct); // Add new product to the array
    },
    editProduct({ index, product }) {
      this.$set(this.products, index, product); // Update the product
    },
  },
};
</script>
