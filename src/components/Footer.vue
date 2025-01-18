<template>
  <footer class="EG-Default">
    <div class="container-fluid ps-xl-5 ps-3 pe-xl-5 pe-3 bg-dark-subtle">
      <div class="row g-4">
        <div class="col-xl-3 col-lg-6 col-12">
          <div class="card bg-transparent border-0">
            <div class="logo">
              <img src="../assets/img/EasyTravels.jpg" alt="">
            </div>
            <div class="card-body foot-text">
              <p class="card-text">
                EasyTravels is your guide to exploring Cambodia's beauty. Find amazing places that you've always dreamt of traveling there.
              </p>
            </div>
            <div class="card-footer text-muted border-0 foot-text">
              <a class="text-uppercase text-decoration-none"><router-link class="text-dark" to="/">
                  www.easytravels.com</router-link></a>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-6 col-12">
          <div class="card bg-transparent border-0">
            <div class="card-header border-0 foot-head">
              Quick Links
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-6">
                  <div class="card bg-transparent border-0">
                    <ul class="list-unstyled card-body p-0 foot-text">
                      <li class="text-decoration-none"><router-link class="text-success" to="/">Home</router-link></li>
                      <li class="text-decoration-none"><router-link class="text-success" to="/provinces">Provinces</router-link></li>
                      <li class="text-decoration-none"><router-link class="text-success" to="/sites">Destinations</router-link>
                      </li>
                      <li class="text-decoration-none"><router-link class="text-success" to="/contact">Contact Us</router-link>
                      </li>
                      <li class="text-decoration-none"><router-link class="text-success" to="/about">About Us</router-link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-6 col-12">
          <div class="card bg-transparent border-0">
            <div class="row g-4">
              <div class="col-xl-6 col-lg-6 col-12">
                <div class="card bg-transparent border-0">
                  <div class="card-header border-0 foot-head">
                    What We Do
                  </div>
                  <div class="card-body foot-text">
                    <div>
                      <a class="text-decoration-none text-success d-block" href="#">Find best places</a>
                      <a class="text-decoration-none text-success d-block" href="#">Provides better traveling</a>
                      <a class="text-decoration-none text-success d-block" href="#">Learn about Cambodia</a>
                      <a class="text-decoration-none text-success d-block" href="#">Reliable source</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-12">
                <div class="card bg-transparent border-0">
                  <div class="card-header border-0 foot-head">
                    Contact
                  </div>
                  <div class="card-body foot-text">
                    <a class="text-decoration-none d-block text-success" href="#"><i
                        class="fa-solid fa-location-dot"></i> 420 St 69, Phnom Penh</a>
                    <a class="text-decoration-none d-block text-success" href="#"><i
                        class="fa-solid fa-phone"></i> Phone: 012345678</a>
                    <a class="text-decoration-none d-block text-success" href="#"><i
                        class="fa-solid fa-envelope"></i> Email: SethSlDa@gmail.com</a>
                    <a class="text-decoration-none text-uppercase d-block text-success" href="#"><i
                        class="fa-solid fa-globe"></i>
                      <router-link class="text-dark" to="/"> www.easytravels.com</router-link></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="card rounded-top-0 copy-right bg-transparent ">
            <div class="card-body pt-4 pb-4">
              <div class="row">
                <div class="col-xl-6 col-12">
                  <div class="text-xl-start text-center foot-text">
                    <span class="m-0 fw-500 text-dark">&#169; 2024 all right reserved <span
                        class="fs-5">&#8739;</span> design by WCT A2</span>
                  </div>
                </div>
                <div class="col-xl-6 col-12">
                  <div class="text-xl-end text-center mt-xl-0 mt-2">
                    <div class="social-media d-flex gap-2 justify-content-xl-end justify-content-center">
                      <a class="media" data-bs-toggle="tooltip" data-bs-placement="top"
                        data-bs-custom-class="custom-tooltip" data-bs-title="Facebook" href="#">
                        <i class="fa-brands fa-facebook-f"></i>
                      </a>
                      <a class="media" data-bs-toggle="tooltip" data-bs-placement="top"
                        data-bs-custom-class="custom-tooltip" data-bs-title="Instagram" href="#"><i
                          class="fa-brands fa-instagram"></i></a>
                      <a class="media" data-bs-toggle="tooltip" data-bs-placement="top"
                        data-bs-custom-class="custom-tooltip" data-bs-title="Twitter" href="#"><i
                          class="fa-brands fa-x-twitter"></i></a>
                      <a class="media" data-bs-toggle="tooltip" data-bs-placement="top"
                        data-bs-custom-class="custom-tooltip" data-bs-title="Tik tok" href="#">
                        <i class="fa-brands fa-tiktok"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
a {
  text-decoration: none;
}
.logo{
  width: 190px;
  height: 60px;
}
</style>