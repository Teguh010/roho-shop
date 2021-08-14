<template>
  <div>
    <nav
      class="myfont navbar navbar-expand-lg fixed-top"
      style="background: white; box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)"
    >
      <div class="container-fluid" style="font-size: 16px; padding-left: 30px">
        <a class="navbar-brand" href="#"
          ><img
            alt="Vue logo"
            src="./assets/rohologo.png"
            width="
        83,46px"
        /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="material-icons d-icon">menu</i>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown">
              <a
                class="
                  nav-link
                  d-flex
                  justify-content-center
                  align-content-between
                "
                href="#"
                @click="dropdownCustom = !dropdownCustom"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                ABOUT US
                <i
                  class="material-icons d-icon"
                  :class="dropdownCustom ? 'arrow-up' : ''"
                  >expand_more</i
                >
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Action</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="
                  nav-link
                  d-flex
                  justify-content-center
                  align-content-between
                "
                href="#"
                @click="dropdownCustom = !dropdownCustom"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                HOW IT WORKS
                <i
                  class="material-icons d-icon"
                  :class="dropdownCustom ? 'arrow-up' : ''"
                  >expand_more</i
                >
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Action</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="
                  nav-link
                  d-flex
                  justify-content-center
                  align-content-between
                "
                href="#"
                @click="dropdownCustom = !dropdownCustom"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                INSPIRATION
                <i
                  class="material-icons d-icon"
                  :class="dropdownCustom ? 'arrow-up' : ''"
                  >expand_more</i
                >
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Action</a></li>
              </ul>
            </li>
          </ul>
          <div class="top-menu-left">
            <div style="padding-top: 8px; padding-right: 15px">
              <span class="px-2"> 3D STUDIO </span>
              <span class="px-2"> SHOP </span>
              <span class="px-2"> ACCOUNT </span>
              <span class="px-2"> CART </span>
            </div>

            <button
              class="btn"
              type="submit"
              style="background: #ff5a5f; color: white; padding: 8px 18px"
            >
              GET STARTED
            </button>
          </div>
        </div>
      </div>
    </nav>
    <Shop />
  </div>
</template>

<script>
import Shop from "/src/components/Shop.vue";

export default {
  name: "App",
  components: {
    Shop,
  },
  data() {
    return {
      dropdownCustom: false,
    };
  },
};
</script>
<style >
html,
body {
  font-family: "Exo", sans-serif;
}
.myfont {
  font-family: "Exo", sans-serif;
}
ul {
  margin: 0px;
  padding: 0px;
}
.footer-section {
  /* background:rgba(229, 229, 229, 0.25); */
  background: white;
  position: relative;
  color: black;
}
.footer-container {
  background: rgba(229, 229, 229, 0.25);
  position: relative;
}
.footer-cta {
  border-bottom: 1px solid #373636;
}
.single-cta i {
  color: #ff5e14;
  font-size: 30px;
  float: left;
  margin-top: 8px;
}
.cta-text {
  padding-left: 15px;
  display: inline-block;
}
.cta-text h4 {
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 2px;
}
.cta-text span {
  color: #757575;
  font-size: 15px;
}
.footer-content {
  position: relative;
  z-index: 2;
}
.footer-pattern img {
  position: absolute;
  top: 0;
  left: 0;
  height: 330px;
  background-size: cover;
  background-position: 100% 100%;
}
.footer-logo {
  margin-bottom: 30px;
}
.footer-logo img {
  max-width: 47px;
}
.footer-logo2 img {
  width: 137px;
  padding-top: 5px;
  padding-left: 20px;
}
.footer-text p {
  margin-bottom: 14px;
  font-size: 14px;
  color: black;
  line-height: 28px;
}
.footer-social-icon span {
  color: #fff;
  display: block;
  font-size: 20px;
  font-weight: 700;
  font-family: "Poppins", sans-serif;
  margin-bottom: 20px;
}
.footer-social-icon a {
  color: #fff;
  font-size: 16px;
  margin-right: 15px;
}
.footer-social-icon i {
  height: 40px;
  width: 40px;
  text-align: center;
  line-height: 38px;
  border-radius: 50%;
}
.facebook-bg {
  background: #3b5998;
}
.twitter-bg {
  background: #55acee;
}
.google-bg {
  background: #dd4b39;
}
.footer-widget-heading h3 {
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 40px;
  position: relative;
}
/* .footer-widget-heading h3::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: -15px;
  height: 2px;
  width: 50px;
  background: #ff5e14;
} */
.footer-widget ul li {
  /* display: inline-block;
  float: left;
  width: 50%; */
  margin-bottom: 12px;
}
ul {
  list-style-type: none;
}
.footer-widget ul li a:hover {
  color: #ff5e14;
}
.footer-widget ul li a {
  color: black;
  text-transform: capitalize;
  font-size: 16px;
}
.subscribe-form {
  position: relative;
  overflow: hidden;
}
.subscribe-form input {
  width: 100%;
  padding: 14px 28px;
  background: #2e2e2e;
  border: 1px solid #2e2e2e;
  color: #fff;
}
.subscribe-form button {
  position: absolute;
  right: 0;
  background: #ff5e14;
  padding: 13px 20px;
  border: 1px solid #ff5e14;
  top: 0;
}
.subscribe-form button i {
  color: #fff;
  font-size: 22px;
  transform: rotate(-6deg);
}
.copyright-area {
  background: transparent;
  padding: 25px 0;
}
.copyright-text p {
  margin: 0;
  font-size: 14px;
}
.copyright-text {
  margin: 0;
  font-size: 14px;
  display: flex;
}
.footer-menu li {
  display: inline-block;
  margin-left: 20px;
}
.footer-menu li:hover a {
  color: #ff5e14;
}
.footer-menu li a {
  font-size: 14px;
  color: #878787;
}
.footer-menu {
  text-align: right;
}
.footer-menu img {
  width: 20px;
  margin: 0 5px;
}
.dropdown-toggle::after {
  display: none;
}
.nav-link {
  display: block;
  padding: 0.5rem 1rem;
  color: black !important;
  text-decoration: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out;
}
/* .arrow-down {
  padding-left: 5px;  -ms-transform: rotate(180deg);
  transform: rotate(180deg)
} */
.arrow-up {
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
}
a {
  /* color: #0d6efd; */
  text-decoration: none !important;
}
.h-text-footer {
  font-weight: 500;
  font-size: 18px;
}
.cpbottom {
  display: flex;
  padding-left: 70px;
}
.cpbottom p {
  padding: 0 5px;
}
.d-icon {
  padding-left: 8px;
}
.btn:focus {
  outline: none !important;
  box-shadow: none !important;
}
.navbar-toggler:focus,
.navbar-toggler:active,
.navbar-toggler-icon:focus {
  outline: none !important;
  box-shadow: none !important;
}
.top-menu-left {
  display: flex;
}
@media only screen and (max-width: 700px) {
  .top-menu-left {
    display: inline-block;
    text-align: center;
  }
}
</style>

