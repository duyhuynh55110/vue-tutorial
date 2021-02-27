<template>
  <div class="breadcumb">
    <!-- Breadcumb -->
    <div class="breadcumb-area" :style="setArea">
      <div class="container h-100">
        <div class="row h-100 align-items-center">
          <div class="col-12">
            <div class="bradcumb-title text-center">
              <h2>Breadcumb</h2>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="breadcumb-nav">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <router-link :to="{ path: '/' }"
                    ><i class="fa fa-home" aria-hidden="true"></i>
                    Home</router-link
                  >
                </li>
                <router-link
                  v-for="(item, index) in breadcrumb"
                  :to="{ path: item.path }"
                  :key="index"
                  tag="li"
                  active-class="active"
                  :class="['breadcrumb-item']"
                  exact
                >
                  <span v-html="setBreadCrumbItem(item)"></span>
                </router-link>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script >
export default {
  name: "BreadCrumb",
  props: ["breadcrumb", "background"],
  computed: {
    setArea() {
      let image = this.background
        ? "url(" + this.background + ")"
        : "url(https://style-republik.com/wp-content/uploads/2020/10/M%C2%B7A%C2%B7C-x-LISA-Announcement-KV.jpg)";
      return {
        "background-image": image,
      };
    },
  },
  methods: {
    setBreadCrumbItem(item) {
      if (this.$route.path === item.path) {
        return item.name;
      }

      return `<a href="#"> ${ item.name } </a>`;
    },
  },
};
</script>