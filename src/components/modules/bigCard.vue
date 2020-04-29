<template>
  <div class="cardContainer gt-sm q-mx-auto">
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
      <!-- show background image if not do card -->
      <q-card class="col-8 q-ml-md" flat v-if="cardDatas.cardTitle !== 'Do'">
        <q-img
          class="imageFond"
          :src="cardDatas.cardPicture"
          :class="cardDatas.bottomLeft ? 'bigRoundBottomCorner' : ''"
        ></q-img>
      </q-card>
      <q-card
        v-else
        class="col-8 q-ml-md"
        flat
        :class="$q.screen.gt.md ? 'doBackground' : 'doMediumBackground'"
      >
      </q-card>
      <!-- change size and position if doCard to show the carousel -->
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
    </div>
  </div>
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
.cardContainer {
  max-width: 1600px;
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
  z-index: 2;
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
.imageFond {
  max-height: 580px;
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
  left: -105%;
  width: 200%;
}
</style>
