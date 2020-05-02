<template>
  <!-- TODO : classic carousel for small screens -->
  <div class="q-pa-xs">
    <div class="row" v-if="$q.screen.gt.sm">
      <div
        class="col roundedCorner imageContainer"
        :class="$q.screen.gt.md ? 'imageContainerBig' : 'imageContainerMedium'"
      >
        <q-img class="full-height roundedCorner" :src="slides[slide].image">
        </q-img>
      </div>
      <q-space />
      <div class="col">
        <q-carousel
          arrows
          animated
          infinite
          navigation
          padding
          navigation-position="bottom"
          v-model="slide"
          control-color="primary"
        >
          <q-carousel-slide
            v-for="slide in slides"
            :key="slide.id"
            class="roundedCorner"
            :name="slide.name"
          >
            <div class="q-mt-xl q-ma-md">
              <div :class="fontSize" class="text-center">
                {{ slide.title }}
              </div>
              <div class="text-body1 q-mt-lg" v-html="slide.text"></div>
            </div>
          </q-carousel-slide>
        </q-carousel>
      </div>
    </div>
    <div v-else>
      <q-carousel arrows animated infinite v-model="slide">
        <q-carousel-slide
          v-for="slide in slides"
          :key="slide.id"
          :name="slide.name"
          :img-src="slide.image"
        >
          <div class="absolute-bottom custom-caption q-pa-md">
            <div class="text-h6">{{ slide.title }}</div>
            <div class="text-caption" v-html="slide.text"></div>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </div>
</template>

<script lang="ts">
//Imports{{{1
import { Vue, Component } from 'vue-property-decorator';
//}}}

@Component
export default class Carousel extends Vue {
  //datas{{{1
  slide = 'first';
  slides = {
    first: {
      name: 'first',
      title: 'Portail BN',
      text:
        ' Complete Web App made with Vue and Vuetify. Several pages, with specific content.<br/><span class="text-italic">Backend by excel sheet</span>, works surprisingly well.',
      image: 'https://cdn.quasar.dev/img/mountains.jpg',
      link: ''
    },
    second: {
      name: 'second',
      title: 'Tribute to Elon Musk',
      text: 'Experimentation with verticals containers and sliders.',
      image: 'https://cdn.quasar.dev/img/parallax1.jpg',
      link: ''
    },
    third: {
      name: 'third',
      title: 'THIRD',
      text: '',
      image: '',
      link: ''
    }
  };
  //}}}
  //computed{{{1
  get fontSize(): string {
    return this.$q.screen.gt.md ? 'text-h2' : 'text-h4';
  }
  //}}}
}
</script>

<style scoped>
.custom-caption {
  background-color: hsla(0, 0%, 0%, 0.3);
  color: hsl(0, 0%, 90%);
}
.roundedCorner {
  border-radius: 8px;
}
.imageContainer {
  position: absolute;
  left: -100%;
  top: -60px;
  z-index: 2;
  width: 95%;
}
.imageContainerBig {
  height: 170%;
}
.imageContainerMedium {
  height: 140%;
}
.q-carousel {
  height: 350px;
}
</style>
