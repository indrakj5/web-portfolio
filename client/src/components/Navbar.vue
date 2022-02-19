<template>
    <div>
      <header>
			  <div class="container">
				  <h1><a href="">My Portfolio Website</a></h1>
				    <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
				    </ul>
          <!-- menu mobile -->
				  <label for="check" class="mobile-menu"><font-awesome-icon icon="fa-solid fa-bars" size="2x" /></label>
			  </div>
		  </header>
    </div>
</template>

<script>
export default {

}    
</script>

<style>
* {
  padding: 0;
  margin: 0;
  font-family: "Quicksand", sans-serif;
  color: #333;
}
header {
  height: 70px;
}
header h1 {
  display: inline-block;
  float: left;
  padding: 15px 24px;
}
header h1 a {
  transition: 0.4s;
}
header h1 a:hover {
  color: #07fcde;
}
header ul {
  float: right;
}
header ul li {
  padding: 24px;
  display: inline-block;
}
header ul li a {
  transition: 0.3s;
}
header ul li a:hover {
  color: #07fcde;
}
a {
  text-decoration: none;
}
.container {
  width: 90%;
  margin: 0 auto;
}
.container::after {
  content: "";
  display: block;
  clear: both;
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
	header ul {
		display: none;
	}
}  
</style>
