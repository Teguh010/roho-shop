<template>
  <div>
    <Navbar />
    <div>
      <div class="main-container">
        <div
          class="left-container"
          :style="showMobileMenu ? 'display:none' : 'display:block'"
        >
          <div>
            <div
              class="
                filter-container
                row
                sticky
                d-flex
                justify-content-center
                align-content-between
              "
            >
              <div class="col-md-8 col-sm-12 col-xs-12 d-flex">
                <button
                  type="button"
                  class="
                    back-tfd
                    btn
                    d-flex
                    justify-content-center
                    align-content-between
                  "
                >
                  <i class="material-icons back-icon">arrow_back_ios</i>BACK TO
                  FEED
                </button>
                <span class="feed-title">Title From Feed</span>
              </div>
              <div
                class="col d-flex flex-row-reverse"
                style="text-align: right"
              >
                <button
                  @click="dropdownCustom2 = !dropdownCustom2"
                  type="button"
                  class="
                    mx-1
                    btn
                    d-flex
                    justify-content-center
                    align-content-between
                  "
                >
                  FILTERS
                  <i
                    class="material-icons arrow-icon"
                    :class="dropdownCustom2 ? 'arrow-up' : ''"
                    >expand_more</i
                  >
                </button>
                <button
                  @click="dropdownCustom2 = !dropdownCustom2"
                  type="button"
                  class="
                    mx-1
                    btn
                    d-flex
                    justify-content-center
                    align-content-between
                  "
                >
                  FILTERS
                  <i
                    class="material-icons arrow-icon"
                    :class="dropdownCustom2 ? 'arrow-up' : ''"
                    >expand_more</i
                  >
                </button>
              </div>
            </div>
          </div>
          <div class="row" style="padding: 90px 10px 10px 10px">
            <div
              v-for="item in items"
              :key="item.index"
              class="col-md-4 col-sm-12 col-xs-12"
            >
              <div class="card shop-card">
                <div style="padding: 10px">
                  <img
                    src="../assets/fooimage.png"
                    class="card-img-top"
                    alt="..."
                  />
                </div>
                <div class="row card-body">
                  <span class="main-title"> {{ item.mainTitle }} </span>
                  <span class="sub-title"> {{ item.subTitle }} </span>
                  <span class="main-title"> ${{ item.price }}</span>
                  <div class="row sub-title" style="padding-top: 15px">
                    <div class="col-7 action-bottom">Add To 3D Studio</div>
                    <div class="col text-right action-bottom" style="text-align: right">
                      Add To Cart
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="col right-container"
          :style="
            showMobileMenu
              ? ' position: relative;top: 55px;'
              : ' position: fixed; width: 50%; right: 0; top: 55px;'
          "
        >
          <div
            :style="
              showMobileMenu
                ? 'position: absolute; left: 30px; top: 20px'
                : 'position: absolute; right: 30px; top: 20px'
            "
          >
            <button
              @click="showMobileMenu = !showMobileMenu"
              class="btn d-flex justify-content-center"
              style="
                padding: 10px 10px 10px 15px;
                border: 2px solid black;
                background: white;
                font-size: 14px;
                border-radius: 8px;
              "
            >
              <i v-if="!showMobileMenu" class="material-icons"
                >arrow_back_ios</i
              >
              <i v-else class="material-icons">arrow_forward_ios</i>
            </button>
          </div>
          <div :class="showMobileMenu ? 'bg2' : 'bg'"></div>
          <!-- <img alt="Vue logo" src="../assets/roholanding.png"   class="bg3"/> -->
        </div>
      </div>
    </div>
    <Footer v-if="!showMobileMenu"/>
  </div>
</template>

<script>
import Navbar from "/src/components/Navbar.vue";
import Footer from "/src/components/Footer.vue";
export default {
  components: {
    Footer,
    Navbar
  },
  // mixins: [windowScrollPosition('position')],
  name: "HelloWorld",

  data() {
    return {
      count: 0,
      showMobileMenu: false,
      dropdownCustom2: false,
      items: [
        {
          mainTitle: "Lorem ipsum dolor sit amet",
          subTitle: "Lorem ipsum dolor sit amet",
          price: 1000,
        },
        {
          mainTitle: "Lorem ipsum dolor sit amet",
          subTitle: "Lorem ipsum dolor sit amet",
          price: 1000,
        },
        {
          mainTitle: "Lorem ipsum dolor sit amet",
          subTitle: "Lorem ipsum dolor sit amet",
          price: 1000,
        },
        {
          mainTitle: "Lorem ipsum dolor sit amet",
          subTitle: "Lorem ipsum dolor sit amet",
          price: 1000,
        },
        {
          mainTitle: "Lorem ipsum dolor sit amet",
          subTitle: "Lorem ipsum dolor sit amet",
          price: 1000,
        },
        {
          mainTitle: "Lorem ipsum dolor sit amet",
          subTitle: "Lorem ipsum dolor sit amet",
          price: 1000,
        },
        {
          mainTitle: "Lorem ipsum dolor sit amet",
          subTitle: "Lorem ipsum dolor sit amet",
          price: 1000,
        },
        {
          mainTitle: "Lorem ipsum dolor sit amet",
          subTitle: "Lorem ipsum dolor sit amet",
          price: 1000,
        },
        {
          mainTitle: "Lorem ipsum dolor sit amet",
          subTitle: "Lorem ipsum dolor sit amet",
          price: 1000,
        },
        {
          mainTitle: "Lorem ipsum dolor sit amet",
          subTitle: "Lorem ipsum dolor sit amet",
          price: 1000,
        },
        {
          mainTitle: "Lorem ipsum dolor sit amet",
          subTitle: "Lorem ipsum dolor sit amet",
          price: 1000,
        },
        {
          mainTitle: "Lorem ipsum dolor sit amet",
          subTitle: "Lorem ipsum dolor sit amet",
          price: 1000,
        },
      ],
      // isIntersectingElement: false,
    };
  },
};
</script>
<style>
html,
body {
  font-family: "Exo", sans-serif;
}
.myfont {
  font-family: "Exo", sans-serif;
}
.display-position {
  position: fixed;
  top: 50%;
  left: 0;
  width: 100%;
  transform: translateY(-50%);
  margin: 0;
  padding: 0 1em;
  box-sizing: border-box;

  text-align: center;

  font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier,
    monospace;
  font-weight: 300;
  font-size: 3em;
  color: white;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
}
.bg {
  /* The image used */
  background-image: url("../assets/roholanding.png");

  /* Full height */
  height: 100vh;
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-right: -20px;
}
.bg2 {
  background-image: url("../assets/roholanding.png");
  height: 100vh;
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.bg3 {
  width: 100%;
  /* Full height */
  height: 100vh;
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

@media only screen and (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}
.arrow-up {
  /* padding-left: 5px; */
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
}
/* .arrow-icon {
  padding-left: 5px;
} */
.h-text-footer {
  font-weight: 500;
  font-size: 18px;
  padding-bottom: 20px;
}
.main-title {
  font-weight: 500;
  font-size: 14px;
  text-transform: uppercase;
}
.sub-title {
  font-weight: normal;
  font-size: 11px;
  text-transform: capitalize;
}
.btn:focus {
  outline: none !important;
  box-shadow: none !important;
}
.shop-card {
  width: 239px;
  margin: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
  border: none;
}
.left-container {
  background: white;
  width: 50% !important;
  left: 0;
  padding-top: 57px;
}
.right-container {
  padding-right: 0px;
  display: block;
}
.filter-container {
  padding: 10px;
  background: white;
  margin: 10px;
  position: fixed;
  z-index: 100;
  width: 50%;
  padding-top: 20px;
}
.back-tfd {
  height: 40px;
  border: 2px solid black !important;
  width: 212px;
  font-size: 14px;
  border-radius: 8px !important;
}
.feed-title {
  padding: 0px 0px 0px 20px;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
}
.back-icon {
  padding-right: 30px;
}
.action-bottom {
  text-decoration: underline;
}
@media only screen and (max-width: 700px) {
  .shop-card {
    width: 239px;
    margin: 5px auto;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 2px;
    border: none;
  }
  .left-container {
    background: white;
    width: 100% !important;
    left: 0;
    padding-top: 57px;
  }
  .right-container {
    padding-right: 0px;
    display: none;
  }
  .filter-container {
    padding: 10px;
    background: white;
    margin: 10px;
    position: fixed;
    z-index: 100;
    width: 100%;
    padding-top: 10px;
  }
  .back-tfd {
    height: 40px;
    border: 2px solid black !important;
    width: 160px;
    font-size: 14px;
    border-radius: 8px !important;
  }
  .feed-title {
    padding: 10px 0px 0px 20px;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
  }
  .back-icon {
    padding-right: 0px;
  }
}
</style>


