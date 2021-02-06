<template>
  <div>
    <!-- ****** Footer Menu Area Start ****** -->
    <footer class="footer_area">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="footer-content">
              <!-- Logo Area Start -->
              <div class="footer-logo-area text-center">
                <a href="index.html" class="yummy-logo">
                  <img src="@/assets/logo-thumbnail.png" />
                </a>
              </div>

              <!-- Menu Area Start -->
              <nav class="navbar navbar-expand-lg">
                <button
                  class="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#yummyfood-footer-nav"
                  aria-controls="yummyfood-footer-nav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i class="fa fa-bars" aria-hidden="true"></i> Menu
                </button>
                <!-- Menu Area Start -->
                <div
                  class="collapse navbar-collapse justify-content-center"
                  id="yummyfood-footer-nav"
                >
                  <ul class="navbar-nav">
                    <router-link
                      v-for="route in $router.options.routes"
                      :to="{ path: route.path }"
                      tag="li"
                      active-class="active"
                      class="nav-item"
                      :key="route.name"
                      :exact="route.exact"
                    >
                      <a class="nav-link"> {{ route.name }} </a>
                    </router-link>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-12">
            <!-- Copywrite Text -->
            <div class="copy_right_text text-center">
              <p>
                Copyright @2020 All rights reserved | This template is made by
                John Huynh
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>