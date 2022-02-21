<template>
  <div>
    <section id="portfolio">
      <div class="container">
        <h3 >Portfolio</h3>
        <div class="row">
          <div class="col-12 col-sm-6 col-lg-4 mb-3 g-lg-5" v-for="(portfolio, index) in portfolios" :key="index">
            <div class="card shadow">
              <a target="_blank" :href=" portfolio.github " clsas="border-bottom">
                <img :src="portfolio.thumbnail" class="card-img-top" a:lt="portfolio.name">
              </a>
              <div class="card-body">
                <h5 class="card-title"> {{ portfolio.name }} </h5>
                <p class="card-text"> {{ portfolio.description }} </p>
                <a target="_blank" rel="noopener noreferrer" :href=" portfolio.github " class="btn btn-primary">
                <font-awesome-icon :icon="[ 'fab', 'github' ]"/> Source Link
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      portfolios: []
    }
  },
  created () {
    this.getAPIportfolio()
  },
  methods: {
    async getAPIportfolio () {
      try {
        const url = 'api/portfolio'
        // const url = 'https://b9ddd73e-8d3d-44b2-ae48-99602321179c.mock.pstmn.io/portfolio'
        let response = await axios.get(url)
        this.portfolios = response.data
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style>
.card a:hover img {
  transition: .5s;
  transform: scale(1.1);
  box-shadow: 5px 5px 5px #888;
}
</style>
