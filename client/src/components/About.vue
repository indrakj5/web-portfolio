<template>
    <div>
      <section  id="about">
			  <div class="container">
          <h3>About</h3>
          <p> Nama    : {{ data[0].nama }} </p>
          <p> Umur    : {{ data[0].umur }} Tahun </p>
          <p> Email   : {{ data[0].email }} </p>
          <p> No. Hp  : {{ data[0].phone }} </p>
          <p> {{ data[0].about }} </p>
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
</style>
