<template>
  <div>
    <!-- ****** Top Header Area Start ****** -->
    <div class="top_header_area">
      <div class="container">
        <div class="row">
          <div class="col-5 col-sm-6">
            <!--  Top Social bar start -->
            <div class="top_social_bar">
              <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
              <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
              <a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
              <a href="#"><i class="fa fa-skype" aria-hidden="true"></i></a>
              <a href="#"><i class="fa fa-dribbble" aria-hidden="true"></i></a>
            </div>
          </div>
          <!--  Login Register Area -->
          <div class="col-7 col-sm-6">
            <div
              class="signup-search-area d-flex align-items-center justify-content-end"
            >
              <div class="login_register_area d-flex">
                <div class="login">
                  <a href="register.html">Sing in</a>
                </div>
                <div class="register">
                  <a href="register.html">Sing up</a>
                </div>
              </div>
              <!-- Search Button Area -->
              <div class="search_button">
                <a class="searchBtn" href="#"
                  ><i class="fa fa-search" aria-hidden="true"></i
                ></a>
              </div>
              <!-- Search Form -->
              <div class="search-hidden-form">
                <form action="#" method="get">
                  <input
                    type="search"
                    name="search"
                    id="search-anything"
                    placeholder="Search Anything..."
                  />
                  <input type="submit" value="" class="d-none" />
                  <span class="searchBtn"
                    ><i class="fa fa-times" aria-hidden="true"></i
                  ></span>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ****** Top Header Area End ****** -->

    <!-- ****** Header Area Start ****** -->
    <header class="header_area">
      <div class="container">
        <div class="row">
          <!-- Logo Area Start -->
          <div class="col-12">
            <div class="logo_area text-center">
              <router-link :to="{ name: 'Home' }" class="yummy-logo">
                <img src="@/assets/logo-thumbnail.png" />
              </router-link>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12">
            <nav class="navbar navbar-expand-lg">
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#yummyfood-nav"
                aria-controls="yummyfood-nav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i class="fa fa-bars" aria-hidden="true"></i> Menu
              </button>
              <!-- Menu Area Start -->
              <div
                class="collapse navbar-collapse justify-content-center"
                id="yummyfood-nav"
              >
                <ul class="navbar-nav" id="yummy-nav">
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
    </header>
    <!-- ****** Header Area End ****** -->
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>