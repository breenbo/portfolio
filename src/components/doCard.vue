<template>
  <div
    class="col"
    id="do"
  >
    <big-card :card-datas="datas">
      <!--slot {{{1-->
      <carousel />
      <!--}}}-->
    </big-card>

    <small-card :card-datas="datas">
      <!--slot{{{1-->
      <carousel />
      <!--}}}-->
    </small-card>
  </div>
</template>

<script lang="ts">
//Imports{{{1
import { Vue, Component } from 'vue-property-decorator';
import { CardDatas } from 'components/models/models';

@Component({
  // declare components{{{1
  components: {
    smallCard: () => import('components/modules/smallCard.vue'),
    bigCard: () => import('components/modules/bigCard.vue'),
    carousel: () => import('components/modules/carousel.vue'),
  },
  //}}}
})
export default class Card extends Vue {
  //datas{{{1
  datas: CardDatas = {
    cardPicture: 'statics/img/code',
    cardTitle: 'Do',
    cardSubtitle: 'Awesome apps',
    subCardTitle: '',
    subCardConclusion: '',
    topRight: false,
    bottomLeft: false,
  };
  //}}}
}
</script>

<style scoped>
#bigSVG {
  max-width: 480px;
}
#smallSVG {
  max-width: 200px;
}
</style>
