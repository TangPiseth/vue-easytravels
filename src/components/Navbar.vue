<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top EG-Default">
    <div class="container">
      <a class="navbar-brand" href="#">EasyTravels</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link text-gray text-decoration-none" aria-current="page" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-gray text-decoration-none" to="/provinces">Provinces</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-gray text-decoration-none" to="/sites">Top Destinations</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-gray text-decoration-none" to="/Contact">Contact Us</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-gray text-decoration-none" to="/about">About Us</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>
