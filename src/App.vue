<template>
  <div id="app">
    <nav>
      <router-link class="logo" to="/home" >Cdu<span>ken</span></router-link>
      <div class="links">
      <router-link to="/home">Home</router-link>
      <router-link to="/products">Products</router-link>
    </div>
    </nav>

    <!-- This will render the component based on the current route -->
    <router-view @add-product="addProduct" @edit-product="editProduct" :products="products" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [], // This will hold the list of products
    };
  },
  methods: {
    addProduct(product) {
      // Add new product to the products array
      this.products.push(product);
    },
    editProduct({ index, product }) {
      // Update the product at the specific index
      this.products.splice(index, 1, product);
    },
  },
};
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  text-decoration: none;
}

body {
  background: url('./assets/main-bg.jpg') no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  height: 100vh;
}
nav {
  padding: 30px 8%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-size: 30px;
  font-weight: 600;
  color: black;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.logo span {
  color: orangered;
}

.links {
  display: flex;
  gap: 40px;
}

.links a {
  color: rgb(0, 0, 0);
  font-size: 20px;
  letter-spacing: 1px;
  position: relative;
}

.links a::after {
  content: '';
  width: 0;
  height: 3px;
  background-color: orangered;
  position: absolute;
  bottom: -5px;
  left: 0;
  transition: width 0.3s ease;
}

.links a:hover::after {
  width: 100%;
}

</style>
