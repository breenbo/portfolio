<template>
  <div class="col">
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
  import smallCard from 'components/modules/smallCard.vue';
  import bigCard from 'components/modules/bigCard.vue';
  import carousel from 'components/modules/carousel.vue';
  //}}}

  @Component({
    //declare components{{{1
    components: { smallCard, bigCard, carousel }
    //}}}
  })
  export default class Card extends Vue {
    //datas{{{1
    datas: CardDatas = {
      cardPicture: 'statics/img/code.jpg',
      cardTitle: 'Do',
      cardSubtitle: 'Awesome apps',
      subCardTitle: '',
      subCardConclusion: '',
      topRight: false,
      bottomLeft: false
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
