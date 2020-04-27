<template>
  <div id="cardContainer" class="gt-sm q-mx-auto">
    <div
      id="cardTitle"
      class="bg-white text-grey-8 q-px-lg q-pb-md roundCorner"
      :class="$q.screen.gt.md ? 'bigCardTitle' : 'smallCardTitle'"
    >
      <div :class="$q.screen.gt.md ? 'text-h1' : 'text-h2'">
        {{ cardDatas.cardTitle }}
      </div>
      <div :class="$q.screen.gt.md ? 'text-h4' : 'text-h5'">
        {{ cardDatas.cardSubtitle }}
      </div>
    </div>
    <div class="row">
      <q-card class="col-8 q-ml-md">
        <q-img :src="cardDatas.cardPicture"></q-img>
      </q-card>
      <div class="col">
        <div
          id="cardText"
          class="roundCorner bg-grey-1 text-grey-8"
          :class="$q.screen.gt.md ? 'bigCardText' : 'mediumCardText'"
        >
          <!--change font size depending on screen size-->
          <div
            class="q-pl-lg"
            :class="$q.screen.gt.md ? 'text-h2 q-pt-xl' : 'text-h4 q-pt-md'"
          >
            {{ cardDatas.subCardTitle }}
          </div>
          <slot></slot>
          <div
            class="row q-pl-lg q-pt-xs"
            :class="$q.screen.gt.md ? 'text-h3 q-py-md' : 'text-h4 q-pb-sm'"
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
import { CardDatas } from 'components/models.ts';
//}}}

@Component
export default class Card extends Vue {
  //props{{{1
  @Prop(Object) readonly cardDatas!: CardDatas;
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
#cardTitle {
  position: relative;
  left: 50px;
  z-index: 2;
  width: 35vw;
  max-width: 450px;
}
.bigCardTitle {
  top: 100px;
}
.smallCardTitle {
  top: 80px;
}
#cardText {
  position: relative;
  top: 60px;
  /*left: -26vw;*/
  z-index: 2;
  border-top-right-radius: 10vw !important;
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
