<template>
  <div class="sticky-top bg-light border-bottom">
    <header>
      <div class="container py-lg-3">
        <div class="row desktop-menu">
          <div class="col-8">
            <h1 class="fw-bold text-uppercase"><a href="#hero" class="text-decoration-none">{{nickname}}</a></h1>
          </div>
          <div class="col">
            <ul class="list-unstyled d-flex justify-content-between align-items-center pt-3 pb-0">
              <li><a href="#skills" class="fw-bold text-decoration-none">Skills</a></li>
              <li><a href="#portfolio" class="fw-bold text-decoration-none">Portfolio</a></li>
              <li><a href="#about" class="fw-bold text-decoration-none">Contact</a></li>
            </ul>
          </div>
        </div>
        <!-- menu mobile -->
        <div class="d-flex align-content-center justify-content-between d-lg-none">
          <h1 class="pb-0 py-3"><a href="#hero" class="text-decoration-none">{{nickname}}</a></h1>
          <label for="check" class="mobile-menu"><font-awesome-icon icon="fa-solid fa-bars" size="2x" /></label>
        </div>
      </div>
    </header>
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
      nickname: 'Portfolio'
    }
  },
  watch: {
    data: {
      handler (newValue) {
        this.nickname = newValue[0].nickname
      }
    }
  }
}
</script>

<style>
header h1 a, header ul li a {
  color: #516BEB;
  transition: 0.3s;
}
header h1 a:hover, header ul li a:hover {
  color: #84DFFF;
  transition: 0.3s;
}
header ul li:hover {
  border-radius: .5rem;
  background-color: #FFFCDC;
  transition: 0.3s;
}
.mobile-menu {
  float: right;
  display: none;
  padding: 18px;
}
.mobile-menu:hover {
  cursor: pointer;
}

@media (max-width: 768px){
  .mobile-menu {
    display: block;
  }
  header .desktop-menu {
    display: none;
  }
}
</style>
