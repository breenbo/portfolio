<template>
  <div class="q-pa-xs">
    <q-carousel
      arrows
      animated
      infinite
      navigation
      navigation-position="top"
      v-model="slide"
      :height="$q.screen.gt.md ? '480px' : '380px'"
    >
      <q-carousel-slide
        class="roundedCorner"
        name="first"
        img-src="https://cdn.quasar.dev/img/mountains.jpg"
      >
        <div class="absolute-bottom custom-caption">
          <div :class="fontSize">
            Portail BN/FOST
          </div>
          <div class="text-subtitle1">
            Complete Web App made with Vue and Vuetify. Backend by excel sheet,
            works surprisingly well.
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide
        name="second"
        img-src="https://cdn.quasar.dev/img/parallax1.jpg"
      >
        <div class="absolute-bottom custom-caption">
          <div :class="fontSize">Tribute to Elon Musk</div>
          <div class="text-subtitle1">
            Experimentation with verticals containers and sliders.
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide
        name="third"
        img-src="https://cdn.quasar.dev/img/parallax1.jpg"
      >
        <div class="absolute-bottom custom-caption">
          <div :class="fontSize">Awesome ToDo App</div>
          <div class="text-subtitle1">
            ToDo App made with Vue and Quasar. Backend by Firebase.
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>
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
  text-align: center;
  padding: 12px;
  color: white;
  background-color: rgba(0, 0, 0, 0.3);
}
.roundedCorner {
  border-radius: 4px;
}
</style>
