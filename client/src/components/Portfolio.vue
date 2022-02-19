<template>
    <div>
      <section id="portfolio">
			  <div class="container">
				  <h3 >Portfolio</h3>
				  <div v-for="portfolio in portfolios" :key="portfolio" class="card" style="width: 20rem;">
					  <img :src="portfolio.thumbnail" class="card-img-top" alt="">
					  <div class="card-body">
						  <h5 class="card-title"> {{ portfolio.name }} </h5>
						  <p class="card-text"> {{ portfolio.description }} </p>
						  <a target="_blank" rel="noopener noreferrer" :href=" portfolio.github " class="btn btn-primary">Link</a>
					  </div>
				  </div>
			  </div>
		  </section>
    </div>
</template>

<script>
import axios from 'axios'
export default {
	data() {
    return {
      portfolios: []
	}
	
  },
  created () {
    this.getAPIportfolio ()
  },
  methods: {
    async getAPIportfolio () {
      try {
        const url = 'api/portfolio'
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
	
.card {
  width: 50%;
  box-sizing: border-box;
  padding: 10px;
  margin: 50px;
  float: left;
  text-align: center;
  margin-bottom: 15px;
}
.card img {
  width: 100%;
}
.card a:hover img {
  transform: scale(1.2);
}

@media (max-width: 768px){

	.col-2 {
		width:100%;
	}
}
</style>
