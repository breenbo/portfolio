<template>
  <div class="lt-md">
    <q-img :src="cardDatas.cardPicture" class="q-mt-xl headerImage"></q-img>
    <q-card :class="$q.screen.gt.xs ? 'q-mx-auto' : 'q-mx-md'" flat id="carte">
      <q-card-section class="text-grey-8 q-ml-md">
        <div class="text-h3">{{ cardDatas.cardTitle }}</div>
        <div class="text-body1">{{ cardDatas.cardSubtitle }}</div>
        <div class="text-h6 text-weight-light q-mt-md">
          {{ cardDatas.subCardTitle }}
        </div>
        <slot></slot>
        <div class="text-h5 text-weight-light text-center">
          <span v-html="cardDatas.subCardConclusion"></span>
        </div>
      </q-card-section>
    </q-card>
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
}
</script>

<style scoped>
#carte {
  position: relative;
  top: -100px;
  max-width: 600px;
}
.headerImage {
  max-height: 320px;
}
</style>
