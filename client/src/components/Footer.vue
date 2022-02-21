<template>
  <div>
    <footer>
      <div class="container d-lg-flex justify-content-between align-items-center py-3">
        <small>Copyright &copy; 2022 - Indra Komara Jayadi</small>
        <div class="py-2 pt-lg-0">
          <a :href="instagram" title="Instagram"><font-awesome-icon :icon="[ 'fab', 'instagram' ]" size="lg" class="text-white me-lg-3 me-5"/></a>
          <a :href="linkedin" title="LinkedIn"></a><font-awesome-icon :icon="[ 'fab', 'linkedin' ]" size="lg" class="text-white me-lg-3 me-5"/></a>
          <a :href="twitter" title="Twitter"></a><font-awesome-icon :icon="[ 'fab', 'twitter' ]" size="lg" class="text-white"/></a>
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
      instagram: '',
      linkedin: '',
      twitter: ''
    }
  },
  watch: {
    data: {
      handler (newValue) {
        this.instagrama = newValue[0].sosmed.instagram
        this.twitter = newValue[0].sosmed.twitter
        this.linkedin = newValue[0].sosmed.linkedin
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
