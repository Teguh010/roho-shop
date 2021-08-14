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
            src="../assets/rohologo.png"
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
  </div>
</template>

<script>
export default {
    data(){
        return {
            dropdownCustom: false
        }
    }
}
</script>

<style>

</style>