<template>
  <div class="container">
    <ul>
      <li v-for="(product, index) in products" :key="index">
        <span>{{ product.name }} - ${{ product.price }}</span>
        <button @click="editProduct(index)">Edit</button>

        <div v-if="editingIndex === index">
          <input v-model="product.name" />
          <input v-model="product.price" type="number" />
          <textarea v-model="product.description"></textarea>
          <button @click="saveProduct(index)">Save</button>
          <button @click="cancelEdit">Cancel</button> <!-- Optional cancel button -->
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
      this.editingIndex = index; // Set the index of the product being edited
    },
    saveProduct(index) {
      this.$emit('edit-product', { index, product: this.products[index] });
      this.editingIndex = null; // Reset editing index after saving
    },
    cancelEdit() {
      this.editingIndex = null; // Reset editing index to cancel editing
    }
  },
};
</script>

<style scoped>

ul {
  list-style-type: none; /* Remove default list styling */
  padding: 0; /* Remove default padding */
}

li {
  margin: 10px 0; /* Add some space between list items */
}

input, textarea {
  display: block; /* Ensure inputs and textareas take up full width */
  margin: 5px 0; /* Add margin for spacing */
}
</style>
