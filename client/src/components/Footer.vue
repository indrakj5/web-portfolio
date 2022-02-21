<template>
  <div>
    <footer>
      <div class="container d-lg-flex justify-content-between align-items-center py-3">
        <small>Copyright &copy; 2022 - Indra Komara Jayadi</small>
        <div class="py-2 pt-lg-0">
          <a target="_blank" :href="linkedin" title="LinkedIn"><font-awesome-icon :icon="[ 'fab', 'linkedin' ]" size="lg" class="text-white me-lg-3 me-5"/></a>
          <a target="_blank" :href="github" title="Github"><font-awesome-icon :icon="[ 'fab', 'github' ]" size="lg" class="text-white me-lg-3 me-5"/></a>
          <a target="_blank" :href="gitlab" title="Gitlab"><font-awesome-icon :icon="[ 'fab', 'gitlab' ]" size="lg" class="text-white"/></a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default{
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      linkedin: '',
      github: '',
      gitlab: ''
    }
  },
  watch: {
    data: {
      handler (newValue) {
        this.linkedin = newValue[0].linkedin
        this.github = newValue[0].github
        this.gitlab = newValue[0].gitlab
      }
    }
  }
}
</script>

<style>
footer {
  background-color: #333;
  text-align: center;
}
footer small {
  color: #fff;
}
</style>
