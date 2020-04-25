<template>
  <q-card flat square class="bg-primary titleCard">
    <span id="titleText" class="text-h1 text-white">Think out of the box</span>
    <span id="subtitleText" class="text-h3 text-white"
      >And create <span class="text-italic">your</span> (web)app</span
    >
    <svg id="boxSVG" class="backgroundSVG" width="250px" viewBox="0 0 40 40">
      <rect x="0" y="0" width="40" height="40" fill="hsla(270,100%,70%,0.6)" />
    </svg>
    <svg
      id="ellipse"
      class="backgroundSVG"
      width="330px"
      height="440px"
      viewBox="10 2 50 100"
    >
      <ellipse cx="10" cy="90" rx="30" ry="50" fill="hsla(205,95%,52%,0.7)" />
    </svg>
    <svg id="arrow" class="triangle" height="60px" viewBox="-200 0 300 100">
      <!-- <polygon points="0 0, 0 100, 75 50" :fill="menu.color" /> -->
      <polygon points="0 0, 100 50, 0 100" fill="hsl(52,100%,75%)" />
      <polygon
        points="0 0, 100 50, 0 100"
        fill="hsl(52,100%,75%)"
        transform="translate(-70 25) scale(0.5)"
      />
      <polygon
        points="0 0, 100 50, 0 100"
        fill="hsl(52,100%,75%)"
        transform="translate(-140 25) scale(0.5)"
      />
    </svg>
  </q-card>
</template>

<script lang="ts">
//Imports{{{1
import { Vue, Component } from 'vue-property-decorator';

//{{{1. props
//const taskProp = Vue.extend({
//props: ['task', 'id']
//});
//}}}

@Component({
  //declare components{{{1
  //}}}
  //filter{{{1
  //filters: {
  //niceDate(value: string): string {
  //return date.formatDate(value, 'Do MMMM');
  //}
  //// TIPS : filter must return something
  //}
  //}}}
})
export default class Title extends Vue {
  //props{{{1
  //@Prop(String) readonly someProp!: string;
  //}}}
  //datas{{{1
  // get the store from TaskStore
  //store = getModule(TaskStore);
  // somedata:string = "some"
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
.titleCard {
  height: 70vh;
}
.backgroundSVG {
  position: absolute;
  z-index: 1;
}
#boxSVG {
  top: 80px;
  right: 110px;
}
#ellipse {
  bottom: 0;
  left: 0;
}
#titleText {
  position: absolute;
  top: 80px;
  right: 200px;
  z-index: 2;
}
#subtitleText {
  position: absolute;
  top: 200px;
  right: 380px;
  z-index: 2;
}
#arrow {
  position: absolute;
  top: 310px;
  right: 600px;
  transform: rotate(-60deg);
}
</style>
