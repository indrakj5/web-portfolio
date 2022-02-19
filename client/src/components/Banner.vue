<template>
    <div>
      <section class="banner">
			  <div class="container">
				  <div class="banner-left">
					  <img :src=" data[0].foto ">
					  <h2>Hai...<br>
						Saya adalah seorang  {{ data[0].title }} </h2>
					  <p>Selamat datang di website portfolio saya!</p>
				  </div>
			  </div>
		  </section>
    </div>
</template>

<script>
export default {
    props: {
      data: {
        type: Array,
        default: () => []
      }
    }
}
</script>

<style>
.banner {
  background-color: #08bdf7;
  padding: 150px 0;
}
section {
  padding: 50px 0;
}
.banner img {
  width: 100px;
  border-radius: 10px;
  box-shadow: 0 3px 5px #ddd;
  margin-bottom: 10px;
}
.banner h2,
.banner p,
.banner span {
  color: #fff;
}
.banner h2 {
  margin-bottom: 10px;
}
.banner p {
  font-size: 18px;
}
.banner-left {
  padding-left: 24px;
}
section h3 {
  padding-bottom: 20px;
  text-align: center;
  margin: 20px;
  position: relative;
}
section h3::before {
  content: "";
  display: block;
  position: absolute;
  bottom: 0;
  width: 120px;
  height: 1px;
  background-color: #ddd;
  left: calc(50% - 60px);
}
section h3::after {
  content: "";
  display: block;
  position: absolute;
  bottom: -1px;
  width: 40px;
  height: 4px;
  background-color: #0825f7;
  left: calc(50% - 20px);
}
</style>
