<template>
  <!-- TODO : add link to projects pages -->
  <div class="q-pa-xs">
    <!-- bigCarousel{{{1 -->
    <div class="row" v-if="$q.screen.gt.sm">
      <div
        class="col roundedCorner imageContainer"
        :class="$q.screen.gt.md ? 'imageContainerBig' : 'imageContainerMedium'"
      >
        <!-- left container for video, img or text -->
        <transition enter-active-class="animated fadeIn">
          <div class="row items-center full-height" v-if="slides[slide].video">
            <transition enter-active-class="animated fadeIn">
              <div class="col" :key="slides[slide].name">
                <q-media-player
                  type="video"
                  :source="slides[slide].video"
                  :poster="`${slides[slide].image.url}.webp`"
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
            </transition>
          </div>
          <div v-else-if="slides[slide].image">
            <transition enter-active-class="animated fadeIn">
              <a
                v-if="slides[slide].link"
                :href="slides[slide].link"
                target="_blank"
                :key="slides[slide].name"
              >
                <img
                  class="roundedCorner"
                  :class="
                    slides[slide].image.landscape
                      ? 'imageLandscape absolute-center'
                      : 'image absolute-bottom'
                  "
                  :srcset="`${slides[slide].image.url}.webp`"
                  :src="`${slides[slide].image.url}.jpg`"
                />
              </a>
              <img
                v-else
                class="roundedCorner"
                :class="
                  slides[slide].image.landscape
                    ? 'imageLandscape absolute-center'
                    : 'image absolute-bottom'
                "
                :srcset="`${slides[slide].image.url}.webp`"
                :src="`${slides[slide].image.url}.jpg`"
              />
            </transition>
          </div>
          <div
            v-else
            class="q-pt-xl bg-primary text-grey-1 roundedCorner text-center text-h4"
          >
            No image for "{{ slides[slide].title }}"
          </div>
        </transition>
      </div>
      <q-space />
      <div class="col">
        <!-- text part of the carousel -->
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
            <div class="q-ma-md">
              <div :class="fontSize" class="text-center">
                {{ slide.title }}
              </div>
              <div class="column justify-between carousel-text-container">
                <div
                  class="text-h6 text-weight-light q-mt-lg col"
                  v-html="slide.text"
                ></div>
                <div class="col">
                  <q-chip
                    outline
                    color="purple-10"
                    v-for="chip in slide.chips"
                    :key="chip.id"
                    >{{ chip }}</q-chip
                  >
                </div>
              </div>
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
                :poster="`${slides[slide].image.url}.webp`"
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
          <div v-else-if="slides[slide].image">
            <a
              v-if="slides[slide].link"
              :href="slides[slide].link"
              target="_blank"
            >
              <q-img
                class="full-height roundedCorner"
                :srcset="`${slides[slide].image.url}.webp`"
                :src="`${slides[slide].image.url}.jpg`"
              >
              </q-img>
            </a>
            <q-img
              v-else
              class="full-height roundedCorner"
              :srcset="`${slides[slide].image.url}.webp`"
              :src="`${slides[slide].image.url}.jpg`"
            >
            </q-img>
          </div>
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
            <q-chip
              outline
              dense
              color="purple-10"
              v-for="chip in slide.chips"
              :key="chip.id"
              >{{ chip }}</q-chip
            >
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
      title: 'SaS',
      text:
        ' Web App to manage IoT with real time charts done, customized google map, tables and forms to manage users and devices permissions. Datas from REST API.',
      chips: [
        'Vue',
        'Vuex',
        'Vue-Router',
        'Vuetify',
        'D3',
        'REST API',
        'Typescript',
        'Jest',
      ],
      image: {
        url: 'statics/img/projects/sas',
        landscape: true,
      },
      link: '',
      video: '',
    },
    second: {
      name: 'second',
      title: 'Portail BN',
      text:
        ' Complete Web App with several pages, with specific content, theme color and animated svg for menu.<br/><span class="text-italic">Backend by excel sheet</span>, works surprisingly well.',
      chips: ['Vue', 'Vue-Router', 'Vuetify', 'Excel'],
      image: {
        url: 'statics/img/projects/portailScreen',
      },
      link: '',
      video: 'statics/videos/portail.webm',
    },
    third: {
      name: 'third',
      title: 'iotProject',
      text: 'Fully responsive app to manage IoT firmware, no backend.',
      chips: ['Vue', 'Vue-Router', 'Quasar'],
      image: { url: 'statics/img/projects/iot', landscape: true },
      link: 'https://iotproject.netlify.app/#/',
      video: '',
    },
    sixth: {
      name: 'sixth',
      title: 'Landing Page',
      text: 'Full responsive landing page project, no backend.',
      chips: ['Vue', 'Quasar'],
      image: { url: 'statics/img/projects/landingPage' },
      link: 'https://landingpagetemplate.netlify.app/#/',
      video: '',
    },
    fourth: {
      name: 'fourth',
      title: 'FixATable',
      text:
        'Responsive web app to book a table in cafes. Backend by Firebase. Differents users and cafe owner, manage availables tables in different cafes.',
      chips: ['Vue', 'Vue-Router', 'Vuetify', 'Firebase'],
      image: { url: 'statics/img/projects/fixatable' },
      link: '',
      video: '',
    },
    fifth: {
      name: 'fifth',
      title: 'Awesome ToDo',
      text:
        'Todo web and android single page app, backend by Firebase. <br/>Differents user, local storage for personnal settings.',
      chips: ['Vue', 'Quasar', 'Firebase'],
      image: { url: 'statics/img/projects/todoScreen' },
      link: '',
      video: 'statics/videos/todoApp.webm',
    },
    seventh: {
      name: 'seventh',
      title: 'Meal App',
      text:
        'Cooking app made with VueJS and Vuetify framework, based on an API reached with axios. Backend by Firebase.',
      chips: ['Vue', 'Vuetify', 'Firebase'],
      image: { url: 'statics/img/projects/mealScreen' },
      link: '',
      video: 'statics/videos/mealApp.webm',
    },
    heigth: {
      name: 'heigth',
      title: 'Tribute',
      text: 'Experimentation with verticals containers and sliders.',
      chips: ['HTML', 'CSS', 'Javascript'],
      image: { url: 'statics/img/projects/elonScreen' },
      link: 'https://breenbo.github.io/FCC_tribute/',
      video: 'statics/videos/elonTributeVideo.webm',
    },
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
.carousel-text-container {
  height: 250px;
}

.imageContainerBig {
  height: 170%;
}
.imageContainerMedium {
  height: 140%;
}
.image {
  height: 100%;
  padding-top: 5%;
  margin: 0 auto;
}
.imageLandscape {
  width: 100%;
}
.q-carousel {
  height: 350px;
}
.fadeIn {
  transition-duration: 1000ms;
}
</style>
