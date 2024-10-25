<template>
  <div class="container">
    <div class="table-wrapper" v-if="products.length > 0" >
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, index) in products" :key="index">
            <td>
              <span v-if="editingIndex !== index">{{ product.name }}</span>
              <input v-else v-model="product.name" />
            </td>
            <td>
              <span v-if="editingIndex !== index">₱{{Intl.NumberFormat('en-PH').format(product.price) }}.00</span>
              <input v-else v-model="product.price" type="number" />
            </td>
            <td>
              <span v-if="editingIndex !== index">{{ product.description }}</span>
              <textarea v-else v-model="product.description" v-show="editingIndex === index"></textarea>
            </td>
            <td>
              <button v-if="editingIndex !== index" @click="editProduct(index)">Edit</button>
              <div v-else>
                <button @click="cancelEdit(index)">Save</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      <p>No products available.</p>
    </div>
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
    cancelEdit() {
      this.editingIndex = null;
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}

.table-wrapper {
  width: 1100px;
}

table {
  width: 100%;
  border-collapse: collapse;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
}

th, td {
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
}

input, textarea {
  width: 100%;
  box-sizing: border-box;
  resize: none;
}

button {
  margin: 5px 0;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #f0f0f06d;
}

button:focus {
  outline: none;
}

thead {
  background-color: #f4f4f4;
}

tr:hover {
  cursor: pointer;
  background-color: #8f8e8e;
}
</style>
