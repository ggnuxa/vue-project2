<template>
  <div id="app">
    <NavbarComponent></NavbarComponent>

    <SidebarComponent></SidebarComponent>

    <ContentComponent></ContentComponent>
  </div>
</template>

<script>
import ContentComponent from './components/Content.vue';
import SidebarComponent from './components/Sidebar.vue';
import NavbarComponent from './components/Navbar.vue';

export default {
  name: 'app',
  components: {
    ContentComponent,
    SidebarComponent,
    NavbarComponent
  },
  mounted() {
    // $(document).ready(function() {
    //   $('.dropdown-button').dropdown({
    //     constrainWidth: false,
    //     hover: true,
    //     belowOrigin: true,
    //     alignment: 'left'
    //   });
    //   // JAVASCRIPT START HERE //
    //   $('.button-menu').sideNav({
    //     menuWidth: 300,
    //     edge: 'left',
    //     closeOnClick: false,
    //     draggable: true,
    //     onOpen: function() {
    //       // console.log('Menu Open');
    //     },
    //     onClose: function() {
    //       // console.log('Menu Close');
    //     }
    //   });
    // });
  }
};
</script>

<style></style>
