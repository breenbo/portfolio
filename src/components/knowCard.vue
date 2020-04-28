<template>
  <div class="col">
    <big-card :card-datas="datas">
      <!--slot {{{1-->
      <logos />
      <!-- }}} -->
    </big-card>

    <small-card :card-datas="datas">
      <!--slot{{{1-->
      <logos />
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
import logos from 'components/modules/logos.vue';
//}}}

@Component({
  //declare components{{{1
  components: { smallCard, bigCard, logos }
  //}}}
})
export default class Card extends Vue {
  //datas{{{1
  datas: CardDatas = {
    cardPicture: 'statics/img/libraryKnow.jpg',
    cardTitle: 'Know',
    cardSubtitle: 'Advanced tools',
    subCardTitle: 'Use modern and advanced tools',
    subCardConclusion:
      'To respect <span class="text-italic">your</span> schedule',
    topRight: false,
    bottomLeft: false
  };
  //}}}
}
</script>

<style scoped>
</style>
