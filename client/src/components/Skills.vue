<template>
    <div>
      <section id="skills">
			  <div class="container">
          <h3 >Skills</h3>
          <div div v-for="skill in skills" :key="skill" class="accordion" id="accordionExample">
            <div  class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  {{ skill.name }}
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <strong> {{ skill.level }} </strong> 
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
	data() {
    return {
      skills: []
	}
	
  },
  created () {
    this.getAPIskill ()
  },
  methods: {
    async getAPIskill () {
      try {
        const url = 'api/skill'
        let response = await axios.get(url)
        this.skills = response.data
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style>
#skills {
  background-color: #f9f9f9;
}
#skills .bar {
  height: 30px;
  background-color: #fff;
  border: 1px solid #ddd;
  margin: 5px 0 20px 0;
}
.bar .nilai {
  height: 30px;
  background-color: #333b78;
  display: inline-block;
  color: #fff;
  text-align: center;
}
.html {
  width: 100%;
}
.css {
  width: 80%;
}
.js {
  width: 80%;
}
.php {
  width: 90%;
}
</style>
