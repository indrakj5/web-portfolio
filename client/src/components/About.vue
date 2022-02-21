<template>
  <div>
    <section id="about">
      <div class="container">
        <h3>About</h3>
        <p class="text-center">You can reach me out</p>
        <div class="row">
          <div class="col-12 col-lg-8 offset-lg-2">
            <table class="table table-light">
              <tbody>
                <tr>
                  <td>Nama</td>
                  <td>: {{ biodata.nama }}</td>
                </tr>
                <tr>
                  <td>Umur</td>
                  <td>: {{ biodata.usia }} Tahun</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>: <a :href="'mailto:'+biodata.email" class="text-decoration-none"><font-awesome-icon icon="fa-solid fa-envelope" /> {{ biodata.email }}</a></td>
                </tr>
                <tr>
                  <td>Phone</td>
                  <td>: <a :href="'tel:'+biodata.phone" class="text-decoration-none"><font-awesome-icon icon="fa-solid fa-square-phone-flip" /> {{ biodata.phone }}</a></td>
                </tr>
                <tr class="d-print-table-row d-lg-none">
                  <td colspan="2">{{ biodata.about }}</td>
                </tr>
              </tbody>
            </table>
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
        nama: '...',
        tgl_lahir: '',
        usia: 0,
        email: '...@gmail.com',
        phone: '0858xxxxxxx',
        about: 'lorem ipsum dolor'
      }
    }
  },
  methods: {
    myAge (tanggalLahir) {
      var today = new Date()
      var birthday = new Date(tanggalLahir)
      var year = 0
      if (today.getMonth() < birthday.getMonth()) {
        year = 1
      } else if ((today.getMonth() === birthday.getMonth()) && today.getDate() < birthday.getDate()) {
        year = 1
      }
      var age = today.getFullYear() - birthday.getFullYear() - year

      if (age < 0) {
        age = 0
      }
      this.biodata.usia = age
    }
  },
  watch: {
    data: {
      handler (newValue) {
        this.biodata.nama = newValue[0].nama
        this.biodata.email = newValue[0].email
        this.biodata.phone = newValue[0].phone
        this.biodata.about = newValue[0].about
        this.myAge(newValue[0].tanggal_lahir)
      }
    }
  }
}
</script>

<style>
#about p {
  text-align: justify;
  text-indent: 30px;
  line-height: 25px;
  margin-bottom: 15px;
}
#about{
  background: #efefef;
}
</style>
