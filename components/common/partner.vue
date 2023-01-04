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
        <carousel
        :items-to-show="2"
        :wrapAround="true"
        :breakpoints="{
            320: {
              itemsToShow: 1
            },
            576: {
              itemsToShow: 2
            },
            1200: {
              itemsToShow: 3
            }
          }">
          <slide v-for="partner in partnersRs" :key="partner.id">
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
          </slide>
        </carousel>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue';
import { partners } from '~/resources/partner'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'


export default {
  name: 'partner',
  components: {
    Carousel,
    Slide
  },
  setup() {
      // make users variable reactive with the ref() function
      const partnersRs = ref(partners)

      return {
          partnersRs
      };
  }
}
</script>

<style lang="scss" src="~/assets/scss/project/home/_partner.scss"></style>
