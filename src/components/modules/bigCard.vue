<template>
  <q-intersection
    class="gt-sm q-mx-auto"
    :class="$q.screen.gt.md ? 'bigCardContainer' : 'mediumCardContainer'"
    :treshold="0.75"
    once
  >
    <!-- add some wait for the be card -->
    <transition
      appear
      :enter-active-class="
        cardDatas.cardTitle === 'Be'
          ? 'animated fadeInUp waitBeCard'
          : 'animated fadeInUp '
      "
    >
      <!-- div to use transition instead of transition group -->
      <div>
        <!-- cardtitle{{{1 -->
        <div class="cardTitle bg-white text-grey-8 q-px-lg q-pb-md roundCorner">
          <div :class="$q.screen.gt.md ? 'text-h2' : 'text-h3'">
            {{ cardDatas.cardTitle }}
          </div>
          <div :class="$q.screen.gt.md ? 'text-h5' : 'text-h6'">
            {{ cardDatas.cardSubtitle }}
          </div>
        </div>
        <!-- }}} -->
        <div class="row">
          <!-- card image background{{{1 -->
          <!-- show background image if not do card -->
          <q-card
            class="col-8 q-ml-md"
            flat
            v-if="cardDatas.cardTitle !== 'Do'"
          >
            <q-img
              :srcset="`${cardDatas.cardPicture}.webp`"
              :src="`${cardDatas.cardPicture}.jpg`"
              :class="[
                cardDatas.bottomLeft ? 'bigRoundBottomCorner' : '',
                $q.screen.gt.md ? 'imageFondBig' : 'imageFondMedium'
              ]"
            ></q-img>
          </q-card>
          <q-card
            v-else
            class="col-8 q-ml-md"
            flat
            :class="$q.screen.gt.md ? 'doBackground' : 'doMediumBackground'"
          >
          </q-card>
          <!-- }}} -->
          <!-- change size and position if doCard to show the carousel -->
          <!-- card text {{{1 -->
          <div class="col">
            <div
              class="roundCorner bg-grey-1 text-grey-8"
              :class="[
                cardDatas.topRight ? 'bigRoundTopCorner' : '',
                cardDatas.cardTitle === 'Do' ? 'doCardText' : 'cardText'
              ]"
            >
              <!--change font size depending on screen size, only for other card than Do -->
              <div
                v-if="cardDatas.cardTitle !== 'Do'"
                class="q-pl-lg"
                :class="$q.screen.gt.md ? 'text-h4 q-pt-xl' : 'text-h5 q-pt-md'"
              >
                {{ cardDatas.subCardTitle }}
              </div>
              <slot></slot>
              <div
                v-if="cardDatas.cardTitle !== 'Do'"
                class="row q-pl-lg q-pt-xs"
                :class="$q.screen.gt.md ? 'text-h4 q-py-md' : 'text-h5 q-pb-sm'"
              >
                <span v-html="cardDatas.subCardConclusion"></span>
              </div>
            </div>
          </div>
          <!-- }}} -->
        </div>
      </div>
    </transition>
  </q-intersection>
</template>

<script lang="ts">
  //Imports{{{1
  import { Vue, Component, Prop } from 'vue-property-decorator';
  import { CardDatas } from 'components/models/models';
  //}}}

  @Component
  export default class Card extends Vue {
    //props{{{1
    @Prop(Object) readonly cardDatas!: CardDatas;
    //}}}
    //Computed {{{1
    //}}}
  }
</script>

<style scoped>
  .bigCardContainer {
    max-width: 1600px;
    min-height: 700px;
  }
  .mediumCardContainer {
    max-width: 1600px;
    min-height: 500px;
  }
  .roundCorner {
    border-radius: 8px !important;
  }
  .bigRoundTopCorner {
    border-top-right-radius: 15vw !important;
  }
  .bigRoundBottomCorner {
    border-bottom-left-radius: 15vw !important;
  }
  .cardTitle {
    position: relative;
    top: 80px;
    left: 50px;
    z-index: 10;
    width: 35%;
  }
  .cardText {
    position: relative;
    top: 60px;
    right: 85%;
    width: 180%;
    /*left: -26vw;*/
    z-index: 2;
  }
  .imageFondBig {
    height: 580px;
  }
  .imageFondMedium {
    height: 400px;
  }
  .doBackground {
    height: 620px;
    background-color: hsl(256, 38%, 93%);
  }
  .doMediumBackground {
    height: 520px;
    background-color: hsl(256, 38%, 93%);
  }
  .doCardText {
    position: relative;
    top: 110px;
    right: 55%;
    width: 150%;
  }
  .fadeInUp {
    animation-duration: 500ms;
  }
  .waitBeCard {
    animation-delay: 1200ms;
  }
</style>
