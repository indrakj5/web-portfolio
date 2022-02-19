<template>
    <div>
      <input type="checkbox" id="check">
      <div class="sidebar">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
        </ul>
		  </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
#check {
  display: none;
}
.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: -300px;
  width: 300px;
  background-color: rgba(16, 47, 80, 0.9);
  transition: 0.4s;
  z-index: 9999;
}
.sidebar ul li a {
  color: #fff;
}
.sidebar ul li {
  padding: 24px;
  transition: 0.4s;
  transition-property: background-color;
}
.sidebar ul li:hover {
  background-color: #ff0000;
}
#check:checked ~ .sidebar {
  left: 0;
}
</style>
