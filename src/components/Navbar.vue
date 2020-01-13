<template>
  <nav class="blue darken-4">
    <div class="container">
      <div class="nav-wrapper">
        <a href="#" class="-logo">Logo</a>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a data-target="slide-out" class="button-menu" href="#">
              <i class="material-icons">menu</i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarComponent',
  mounted() {
    $(document).ready(function() {
      $('.button-menu').sidenav({
        menuWidth: 300,
        edge: 'left',
        closeOnClick: false,
        draggable: true
      });
    });

    // $(document).ready(function() {
    //   $('.side-nav').sidenav({
    //     menuWidth: 300,
    //     edge: 'left',
    //     closeOnClick: false,
    //     draggable: true
    //   });
    // });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-wrapper {
  display: flex;
  justify-content: space-between;
}

.-logo {
  color: #fff;
  font-size: 2.1rem;
  padding: 0;
}

.side-nav .input-field {
  margin: 0 30px;
}

</style>
