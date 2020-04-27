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
import { CardDatas } from 'components/models.ts';
//}}}

@Component({
  //filter{{{1
  //filters: {
  //niceDate(value: string): string {
  //return date.formatDate(value, 'Do MMMM');
  //}
  //// TIPS : filter must return something
  //}
  //}}}
})
export default class Card extends Vue {
  //props{{{1
  @Prop(Object) readonly cardDatas!: CardDatas;
  //}}}
  //datas{{{1
  //}}}
  //methods{{{1
  //submitForm(): void {
  //// send taskToSubmit to store
  //this.store.updateTasksAction({
  //id: this.id,
  //updates: this.taskToSubmit
  //});
  //}
  //}}}
  //computed{{{1
  // get data from store : computed method
  // don't use getter because no manipulation before get it
  // use getters to manipulate datas before getting them
  //get searchField(): string {
  //return this.store.searchField;
  //}
  //set searchField(term: string) {
  //this.store.setSearchFieldAction(term);
  //}
  //}}}
  //hooks{{{1
  //mounted() {
  //somefunction: () => {
  //return something
  //}
  //}
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
