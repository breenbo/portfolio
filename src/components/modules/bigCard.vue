<template>
  <div id="cardContainer" class="gt-sm q-mx-auto">
    <div
      id="cardTitle"
      class="bg-white text-grey-8 q-px-lg q-pb-md roundCorner"
      :class="$q.screen.gt.md ? 'bigCardTitle' : 'smallCardTitle'"
    >
      <div :class="$q.screen.gt.md ? 'text-h2' : 'text-h3'">
        {{ cardDatas.cardTitle }}
      </div>
      <div :class="$q.screen.gt.md ? 'text-h5' : 'text-h6'">
        {{ cardDatas.cardSubtitle }}
      </div>
    </div>
    <div class="row">
      <q-card class="col-8 q-ml-md" flat>
        <q-img
          :src="cardDatas.cardPicture"
          :class="cardDatas.bottomLeft ? 'bigRoundBottomCorner' : ''"
        ></q-img>
      </q-card>
      <div class="col">
        <div
          id="cardText"
          class="roundCorner bg-grey-1 text-grey-8"
          :class="[
            $q.screen.gt.md ? 'bigCardText' : 'mediumCardText',
            cardDatas.topRight ? 'bigRoundTopCorner' : ''
          ]"
        >
          <!--change font size depending on screen size-->
          <div
            class="q-pl-lg"
            :class="$q.screen.gt.md ? 'text-h4 q-pt-xl' : 'text-h5 q-pt-md'"
          >
            {{ cardDatas.subCardTitle }}
          </div>
          <slot></slot>
          <div
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
#cardContainer {
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
#cardTitle {
  position: relative;
  left: 50px;
  z-index: 2;
  width: 35vw;
  max-width: 450px;
}
.bigCardTitle {
  top: 80px;
}
.smallCardTitle {
  top: 80px;
}
#cardText {
  position: relative;
  top: 60px;
  /*left: -26vw;*/
  z-index: 2;
}
.bigCardText {
  left: -400px;
  width: 178%;
}
.mediumCardText {
  left: -270px;
  width: 160%;
}
</style>
