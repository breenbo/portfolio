<template>
  <!-- TODO : add link to projects pages -->
  <div class="q-pa-xs">
    <!-- bigCarousel{{{1 -->
    <div class="row" v-if="$q.screen.gt.sm">
      <div
        class="col roundedCorner imageContainer"
        :class="$q.screen.gt.md ? 'imageContainerBig' : 'imageContainerMedium'"
      >
        <div class="row items-center full-height" v-if="slides[slide].video">
          <div class="col">
            <q-media-player
              type="video"
              :source="slides[slide].video"
              :poster="slides[slide].image"
              :show-big-play-button="true"
              background-color="primary"
              :hide-volume-slider="hideVolume"
              :big-play-button-color="
                slides[slide].name == 'first' ? 'white ' : ' primary'
              "
              dense
            >
            </q-media-player>
          </div>
        </div>
        <q-img
          class="full-height roundedCorner"
          :src="slides[slide].image"
          v-else-if="slides[slide].image"
        >
        </q-img>
        <div
          v-else
          class="q-pt-xl bg-primary text-grey-1 roundedCorner text-center text-h4"
        >
          No image for "{{ slides[slide].title }}"
        </div>
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
            class="rounded-borders"
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
    <!-- }}} -->

    <!-- smallCarousel{{{1 -->
    <div v-else>
      <!-- TODO : open video in a modal on click on image ? -->
      <div class="col">
        <div class="col">
          <div class="text-center text-h6 q-mb-md">
            {{ slides[slide].title }}
          </div>
          <div class="row items-center full-height" v-if="slides[slide].video">
            <div class="col">
              <q-media-player
                dense
                type="video"
                :source="slides[slide].video"
                :poster="slides[slide].image"
                :show-big-play-button="true"
                background-color="primary"
                :hide-volume-slider="hideVolume"
                :big-play-button-color="
                  slides[slide].name == 'first' ? 'white ' : ' primary'
                "
              >
              </q-media-player>
            </div>
          </div>
          <q-img
            class="full-height roundedCorner"
            :src="slides[slide].image"
            v-else-if="slides[slide].image"
          >
          </q-img>
          <div
            v-else
            class="q-pt-xl bg-primary text-grey-1 roundedCorner text-center text-h4"
          >
            No image for "{{ slides[slide].title }}"
          </div>
        </div>
        <q-carousel
          id="smallCarousel"
          v-model="slide"
          swipeable
          animated
          infinite
          arrows
          padding
          control-color="primary"
          class="col"
          height="100%"
        >
          <q-carousel-slide
            v-for="slide in slides"
            :key="slide.id"
            :name="slide.name"
            class="no-wrap flex-center"
          >
            <div class="text-caption" v-html="slide.text"></div>
          </q-carousel-slide>
        </q-carousel>
      </div>
    </div>
    <!-- }}} -->
  </div>
</template>

<script lang="ts">
  //Imports{{{1
  import { Vue, Component } from 'vue-property-decorator';
  import { DoProject } from 'components/models/models';
  //}}}

  @Component
  export default class Carousel extends Vue {
    //datas{{{1
    hideVolume = true;
    slide = 'first';
    slides: DoProject = {
      first: {
        name: 'first',
        title: 'Portail BN',
        text:
          ' Complete Web App made with Vue and Vuetify. Several pages, with specific content, theme color and animated svg for menu.<br/><span class="text-italic">Backend by excel sheet</span>, works surprisingly well.',
        image: 'statics/img/projects/portailScreen.webp',
        link: '',
        video: 'statics/videos/portail.webm'
      },
      second: {
        name: 'second',
        title: 'Tribute to Elon Musk',
        text: 'Experimentation with verticals containers and sliders.',
        image: 'statics/img/projects/elonScreen.webp',
        link: 'https://breenbo.github.io/FCC_tribute/',
        video: 'statics/videos/elonTributeVideo.webm'
      },
      third: {
        name: 'third',
        title: 'Awesome ToDo',
        text:
          'Todo web and android single page app, made with Vue and Quasar. Backend by Firebase. <br/>Differents user, local storage for personnal settings.',
        image: 'statics/img/projects/todoScreen.webp',
        link: '',
        video: 'statics/videos/todoApp.webm'
      },
      fourth: {
        name: 'fourth',
        title: 'Meal App',
        text:
          'Cooking app made with Vue and Vuetify, based on an API reached with axios. Backend by Firebase.',
        image: 'statics/img/projects/mealScreen.webp',
        link: '',
        video: 'statics/videos/mealApp.webm'
      }
      //fourth: {
      //name: 'fifth',
      //title: 'Vue-Gram',
      //text:
      //'Little chat made with Vue and Vuetify. Backend by Firebase. <br/> Different users.',
      //image: '',
      //link: '',
      //video: ''
      //},
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
    left: -98%;
    top: -60px;
    z-index: 2;
    width: 95%;
    background-color: hsl(256, 38%, 80%);
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
