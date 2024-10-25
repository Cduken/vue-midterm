<template>
  <div class="main">
    <div class="col1">
      <div class="text-box">
        <h2>Hi, I'm</h2>
        <h1 class="title">Ernest Cabarrubias</h1>
        <p class="text">I'm a Frontend Developer!</p>
        <button class="btn" @click="$router.push('/products')">View Products</button>
      </div>
      <div class="img-box">
        <img src="../assets/transparent_image.png" alt="img" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>


<style scoped>

.main {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  color: rgb(78, 76, 76);
}

.col1 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: center;
  gap: 115px;
}

.title {
  font-size: 60px;
  font-weight: 400;

}

.img-box {
  display: flex;
  align-items: center;
  justify-content: center;
}

.text {
  font-size: 18px;
}

img {
  width: 500px;
  height: 500px;
}

.btn {
  padding: 10px 40px;
  margin-top: 20px;
  border-radius: 8px;
  border: 2px solid #fff;
  outline: none;
  background: transparent;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}

.btn:hover {
  background: rgba(103, 101, 101, 0.2);
}
</style>
