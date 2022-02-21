<template>
  <div>
    <section id="hero" class="banner mask1">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-4 mb-3 text-center text-lg-start">
            <img :src=" biodata.foto " class="img-fluid rounded-3 shadow">
          </div>
          <div class="col-12 col-lg-8 py-1 text-center text-lg-start">
            <h2>Hai...<br>
            Saya adalah seorang  {{ biodata.title }} </h2>
            <p>Selamat datang di website portfolio saya!</p>
            <p class="d-none d-lg-block">{{ biodata.about }}</p>
          </div>
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
  },
  data () {
    return {
      biodata: {
        foto: 'https://via.placeholder.com/300x300?text=My+Photo',
        title: '.......',
        about: 'About me .......'
      }
    }
  },
  watch: {
    data: {
      handler (newValue) {
        this.biodata.foto = newValue[0].foto
        this.biodata.title = newValue[0].title
        this.biodata.about = newValue[0].about
      }
    }
  }
}
</script>

<style>
.mask1 {
  background-image: url('https://miro.medium.com/max/1838/1*rGiHBnlqf6-koapA2DzUoA.jpeg');
  background-size:cover;
  background-blend-mode:darken;
  background-repeat:no-repeat;
  background-color:rgb(8, 27, 122);
}
.banner {
  /* background: rgb(45,78,238);
  background: linear-gradient(90deg, rgba(45,78,238,1) 0%, rgba(81,107,235,1) 79%, rgba(10,45,217,1) 100%); */
  padding: 150px 0;
}
section {
  padding: 50px 0;
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
