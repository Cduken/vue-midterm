<template>
  <div>
    <ul>
      <li v-for="(product, index) in products" :key="index">
        <span>{{ product.name }} - ${{ product.price }}</span>
        <button @click="editProduct(index)">Edit</button>
        <div v-if="editingIndex === index">
          <input v-model="product.name" />
          <input v-model="product.price" type="number" />
          <textarea v-model="product.description"></textarea>
          <button @click="saveProduct(index)">Save</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['products'],
  data() {
    return {
      editingIndex: null,
    };
  },
  methods: {
    editProduct(index) {
      this.editingIndex = index;
    },
    saveProduct(index) {
      this.$emit('edit-product', { index, product: this.products[index] });
      this.editingIndex = null;
    },
  },
};
</script>
