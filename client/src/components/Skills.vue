<template>
  <div>
    <section id="skills" class="pt-5">
      <div class="container pt-5">
        <h3 >Skills</h3>
        <p class="text-center mb-5 pb-3">I have skills for build a web application, from backend to frontend</p>
        <div class="row my-3" v-for="(skill, index) in skills" :key="index" >
          <div class="offset-lg-1 col-3 col-lg-2 fw-bold">
            {{ skill.name }}
          </div>
          <div class="col-12 col-lg-8">
            <div class="progress" v-if="skill.level=='Advance'">
              <div class="progress-bar bg-danger" role="progressbar" style="width: 100%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>&nbsp;&nbsp;Advance
            </div>
            <div class="progress" v-else-if="skill.level=='Intermediate'">
              <div class="progress-bar bg-info" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>&nbsp;&nbsp;Intermediate
            </div>
            <div class="progress" v-else>
              <div class="progress-bar bg-success" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>&nbsp;&nbsp;Beginner
            </div>
          </div>
        </div>
        <ProgrammingLogo/>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import ProgrammingLogo from './ProgrammingLogo.vue'
export default {
  data () {
    return {
      skills: []
    }
  },
  created () {
    this.getAPIskill()
  },
  methods: {
    async getAPIskill () {
      try {
        const url = 'api/skill'
        // const url = "https://b9ddd73e-8d3d-44b2-ae48-99602321179c.mock.pstmn.io/skill";
        let response = await axios.get(url)
        this.skills = response.data
      } catch (err) {
        console.log(err)
      }
    }
  },
  components: { ProgrammingLogo }
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
