<template>
  <ul id="slide-out" class="side-nav">
    <li>
      <div class="user-view">
        <div class="background">
          <img src="img/img4.jpg" />
        </div>
        <a href="#!">
          <img class="circle" src="img/img5.jpg" />
        </a>
        <a href="#!">
          <span class="white-text name">John Doe</span>
        </a>
        <a>
          <span class="white-text email">jdoe@gmail.com</span>
        </a>
      </div>
    </li>
    <li>
      <a href="#!"> <i class="material-icons">dashboard</i>Dashboard</a>
    </li>
    <li>
      <div class="input-field">
        <input id="search" type="text" />
        <label for="search">Search</label>
      </div>
    </li>
    <li>
      <div class="divider"></div>
    </li>
    <li>
      <a class="subheader" href="#!">Account Info</a>
    </li>
    <li>
      <a class="waves-effect" href="#!">Logout</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'SidebarComponent'
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
