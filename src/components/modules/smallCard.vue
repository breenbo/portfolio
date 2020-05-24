<template>
  <q-intersection :class="$q.screen.lt.md ? 'smallCardContainer' : ''" once>
    <transition
      appear
      :enter-active-class="
        cardDatas.cardTitle === 'Be'
          ? 'animated fadeInUp waitBeCard'
          : 'animated fadeInUp'
      "
    >
      <div
        class="lt-md"
        :class="cardDatas.cardTitle !== 'Be' ? 'margin-top' : ''"
      >
        <q-img
          :id="cardDatas.cardTitle.toLowerCase()"
          :srcset="`${cardDatas.cardPicture}.webp`"
          :src="`${cardDatas.cardPicture}.jpg`"
          class="headerImage"
          :class="cardDatas.cardTitle === 'Be' ? 'q-mt-xl' : ''"
        ></q-img>
        <q-card
          :class="$q.screen.gt.xs ? 'q-mx-auto' : 'q-mx-md'"
          class="carte"
        >
          <q-card-section class="text-grey-8">
            <div class="q-ml-md">
              <div class="text-h3">{{ cardDatas.cardTitle }}</div>
              <div class="text-body1">{{ cardDatas.cardSubtitle }}</div>
              <div class="text-h6 text-weight-light q-mt-md">
                {{ cardDatas.subCardTitle }}
              </div>
            </div>
            <slot></slot>
            <div class="text-h5 text-weight-light text-center">
              <span v-html="cardDatas.subCardConclusion"></span>
            </div>
          </q-card-section>
        </q-card>
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
  export default class SmallCard extends Vue {
    //props{{{1
    @Prop(Object) readonly cardDatas!: CardDatas;
    //}}}
  }
</script>

<style scoped>
  .carte {
    position: relative;
    top: -100px;
    max-width: 600px;
  }
  .headerImage {
    max-height: 320px;
    min-height: 250px;
  }
  .margin-top {
    margin-top: -48px;
  }
  .smallCardContainer {
    min-height: 650px;
  }
  .fadeInUp {
    animation-duration: 1.2s;
  }
  .waitBeCard {
    animation-delay: 1.6s;
  }
</style>
