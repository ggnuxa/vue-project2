<template>
  <nav class="blue darken-4">
    <div class="container">
      <div class="nav-wrapper">
        <a href="#" class="-logo">Logo</a>
        <ul>
          <li v-for="(item, key) in items" :key="key">
            <a
              href="#"
              :class="item.customClass"
              :data-activates="item.dataActivates"
            >
              {{ item.label }}
              <i v-if="item.iconName" class="material-icons">{{
                item.iconName
              }}</i>
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
      $('.button-menu').sideNav({
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
  },
  computed: {
    items() {
      return this.$store.state.navMenu;
    }
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

</style>
