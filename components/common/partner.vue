<template>
  <section class="l-partner">
    <div class="container">
      <header class="c-header">
        <h2 class="c-header__title">
          Đối tác đáng tin cậy cho hành trình của bạn
        </h2>
        <div class="c-header__sub">Giao dịch bằng VND với phí 0đ</div>
      </header>
      <div class="c-content">
        <swiper
            :loop="true"
          :modules="modules"
          :slides-per-view="3"
          :space-between="12"
          :breakpoints="{
            // when window width is >= 320px
            320: {
              slidesPerView: 'auto',
              spaceBetween: 16
            },
            // when window width is >= 640px
            576: {
              slidesPerView: 2,
              spaceBetween: 24
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 24
            }
          }"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <swiper-slide v-for="partner in partnersRs" :key="partner.id">
            <div class="c-item d-flex w-100 flex-column">
              <div class="c-item__thumb">
                <div class="ratio ratio-1x1 ratio--contain">
                  <img
                    :src="partner.img"
                    :alt="partner.title"
                  />
                </div>
              </div>
              <div class="c-item__meta mb-4">
                <h3 class="c-item__title">{{ partner.title }}</h3>
                <div class="c-item__excerpt">
                  {{ partner.excerpt }}
                </div>
              </div>
              <div class="mt-auto">
                <a :href="partner.link" class="btn-readmore btn btn-secondary"
                  >Giao dịch ngay</a
                >
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue';
import { partners } from '~/resources/partner'
// import Swiper core and required modules
import { Navigation, A11y } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


export default {
  name: 'partner',
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
      // make users variable reactive with the ref() function
      const partnersRs = ref(partners)

      return {
          partnersRs,
          modules: [Navigation, A11y],
      };
  }
}
</script>

<style lang="scss" src="~/assets/scss/project/home/_partner.scss"></style>
