<template>
    <div>
        <Navbar :data="biodata"/>
        <Sidebar />
        <Banner :data="biodata"/>
        <Skills />
        <About :data="biodata" />
        <Portfolio />
        <Footer :data="biodata"/>
    </div>
</template>

<script>
import axios from 'axios'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import Banner from '@/components/Banner'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Portfolio from '@/components/Portfolio'
import Footer from '@/components/Footer'
export default {
  data () {
    return {
      biodata: []
    }
  },
  created () {
    this.getAPIabout()
  },
  methods: {
    async getAPIabout () {
      try {
        const url = 'api/biodata'
        // const url = 'https://b9ddd73e-8d3d-44b2-ae48-99602321179c.mock.pstmn.io/biodata'
        let response = await axios.get(url)
        this.biodata = response.data
      } catch (err) {
        console.log(err)
      }
    }
  },
  components: {
    Navbar,
    Sidebar,
    Banner,
    About,
    Skills,
    Portfolio,
    Footer
  }
}
</script>
