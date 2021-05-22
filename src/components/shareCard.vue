<template>
  <div class="col" id="share">
    <big-card :card-datas="datas">
      <!--slot {{{1-->
      <shareLogos />
      <!--}}}-->
    </big-card>

    <small-card :card-datas="datas">
      <!--slot{{{1-->
      <shareLogos />
      <!--}}}-->
    </small-card>
  </div>
</template>

<script lang="ts">
  //Imports{{{1
  import { Vue, Component } from 'vue-property-decorator';
  import { CardDatas } from 'components/models/models';
  //import smallCard from 'components/modules/smallCard.vue';
  //import bigCard from 'components/modules/bigCard.vue';
  //import shareLogos from 'components/modules/shareLogos.vue';
  //}}}

  @Component({
    //declare components{{{1
    components: {
      smallCard: () => import('components/modules/smallCard.vue'),
      bigCard: () => import('components/modules/bigCard.vue'),
      shareLogos: () => import('components/modules/shareLogos.vue')
    }
    //}}}
  })
  export default class Card extends Vue {
    //datas{{{1
    datas: CardDatas = {
      cardPicture: 'statics/img/share',
      cardTitle: 'Share',
      cardSubtitle: 'Networks',
      subCardTitle: "Let's work together",
      subCardConclusion: '',
      topRight: false,
      bottomLeft: true
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
