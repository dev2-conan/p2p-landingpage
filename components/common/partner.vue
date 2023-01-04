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
          <swiper-slide>
            <div class="c-item d-flex w-100 flex-column">
              <div class="c-item__thumb">
                <div class="ratio ratio-1x1 ratio--contain">
                  <img
                    src="~/assets/images/components/partner/ico-recovery-convert.svg"
                    alt=""
                  />
                </div>
              </div>
              <div class="c-item__meta mb-4">
                <h3 class="c-item__title">Mua/bán bằng VND</h3>
                <div class="c-item__excerpt">
                  Mua và bán TetherUS một cách an toàn và dễ dàng trên VinEX P2P. Tìm ưu đãi tốt nhất bên dưới, mua và bán USDT bằng các phương thức thanh toán ưa thích của bạn ngay hôm nay.
                </div>
              </div>
              <div class="mt-auto">
                <a href="#" class="btn-readmore btn btn-secondary"
                  >Giao dịch ngay</a
                >
              </div>
            </div>
          </swiper-slide>
      
          <swiper-slide>
            <div class="c-item d-flex w-100 flex-column">
              <div class="c-item__thumb">
                <div class="ratio ratio-1x1 ratio--contain">
                  <img
                    src="~/assets/images/components/partner/ico-percentage-square.svg"
                    alt=""
                  />
                </div>
              </div>
              <div class="c-item__meta mb-4">
                <h3 class="c-item__title">Phí giao dịch thấp nhất</h3>
                <div class="c-item__excerpt">
                  VinEX dẫn đầu với phí giao dịch thấp và chương trình VIP hấp dẫn. Hãy tận hưởng mức phí giao dịch thấp nhất thị trường.
                </div>
              </div>
              <div class="mt-auto">
                <a href="#" class="btn-readmore btn btn-secondary"
                  >Giao dịch ngay</a
                >
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="c-item d-flex w-100 flex-column">
              <div class="c-item__thumb">
                <div class="ratio ratio-1x1 ratio--contain">
                  <img
                    src="~/assets/images/components/partner/ico-shield-security.svg"
                    alt=""
                  />
                </div>
              </div>
              <div class="c-item__meta mb-4">
                <h3 class="c-item__title">Bảo mật cao</h3>
                <div class="c-item__excerpt">
                  Các biện pháp bảo mật cao cấp cùng cùng quỹ sàn của VinEX sẽ bảo vệ dữ liệu và tài sản của bạn trước rủi ro.
                </div>
              </div>
              <div class="mt-auto">
                <a href="#" class="btn-readmore btn btn-secondary"
                  >Giao dịch ngay</a
                >
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="c-item d-flex w-100 flex-column">
              <div class="c-item__thumb">
                <div class="ratio ratio-1x1 ratio--contain">
                  <img
                    src="~/assets/images/components/partner/ico-24-support.svg"
                    alt=""
                  />
                </div>
              </div>
              <div class="c-item__meta mb-4">
                <h3 class="c-item__title">Hỗ trợ khách hàng 24/7</h3>
                <div class="c-item__excerpt">
                  Đội ngũ hỗ trợ nhiều kinh nghiệm của VinEX luôn túc trực 24/7 để sẵn sàng trợ giúp bạn.
                </div>
              </div>
              <div class="mt-auto">
                <a href="#" class="btn-readmore btn btn-secondary"
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
// import Swiper core and required modules
import { Navigation, A11y } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, A11y],
    };
  },
};
</script>

<style lang="scss" src="~/assets/scss/project/home/_partner.scss"></style>
