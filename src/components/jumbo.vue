<template>
  <q-card
    flat
    square
    class="bg-primary"
    :class="
      $q.screen.gt.sm
        ? 'bigTitleCard'
        : $q.screen.gt.xs
        ? 'mediumTitleCard'
        : 'smallTitleCard'
    "
  >
    <span
      id="titleText"
      class="text-white"
      :class="
        $q.screen.gt.sm
          ? 'text-h1 bigTitle'
          : $q.screen.gt.xs
          ? 'text-h2 mediumTitle'
          : 'text-h4 smallTitle'
      "
      >Think out of the box</span
    >
    <span
      id="subtitleText"
      class="text-white text-weight-light"
      :class="
        $q.screen.gt.sm
          ? 'text-h3 bigSubtitle'
          : $q.screen.gt.xs
          ? 'text-h4 mediumSubtitle'
          : 'text-h6 smallSubtitle'
      "
      >And create <span class="text-italic">your</span> (web)app</span
    >
    <svg
      :class="
        $q.screen.gt.sm
          ? 'bigBoxSVG'
          : $q.screen.gt.xs
          ? 'mediumBoxSVG'
          : 'smallBoxSVG'
      "
      class="backgroundSVG"
      :width="$q.screen.gt.sm ? '250px' : $q.screen.gt.xs ? '150px' : '80px'"
      viewBox="0 0 40 40"
    >
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
    <!--arrows {{{1-->
    <svg
      id="arrow"
      :class="
        $q.screen.gt.sm
          ? 'bigArrow'
          : $q.screen.gt.xs
          ? 'mediumArrow'
          : 'smallArrow'
      "
      :height="$q.screen.gt.xs ? '100px' : '50px'"
      :width="$q.screen.gt.xs ? '200px' : '100px'"
      viewBox="-100 0 100 220"
    >
      <!-- <polygon points="0 0, 0 100, 75 50" :fill="menu.color" /> -->
      <g fill="hsla(270,100%,60%,0.4)" transform="translate(-100 80)">
        <polygon points="0 0, 100 50, 0 100" transform="scale(1.3)" />
        <polygon
          points="0 0, 100 50, 0 100"
          transform="translate(-70 40) scale(0.5)"
        />
        <polygon
          points="0 0, 100 50, 0 100"
          transform="translate(-140 40) scale(0.5)"
        />
      </g>
      <g fill="hsl(52,100%,75%)">
        <polygon points="0 0, 100 50, 0 100" transform="scale(1.3)" />
        <polygon
          points="0 0, 100 50, 0 100"
          transform="translate(-70 40) scale(0.5)"
        />
        <polygon
          points="0 0, 100 50, 0 100"
          transform="translate(-140 40) scale(0.5)"
        />
      </g>
    </svg>
    <!--}}}-->
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
.bigTitleCard {
  height: 500px;
}
.mediumTitleCard {
  height: 400px;
}
.smallTitleCard {
  height: 250px;
}
.backgroundSVG {
  position: absolute;
  z-index: 1;
}
.bigBoxSVG {
  top: 80px;
  right: 110px;
}
.mediumBoxSVG {
  top: 80px;
  right: 35px;
}
.smallBoxSVG {
  top: 80px;
  right: 20px;
}
#ellipse {
  bottom: 0;
  left: 0;
}
#titleText {
  position: absolute;
  top: 80px;
  z-index: 3;
}
.bigTitle {
  right: 200px;
}
.mediumTitle {
  right: 85px;
}
.smallTitle {
  right: 40px;
}
#subtitleText {
  position: absolute;
  z-index: 2;
}
.bigSubtitle {
  top: 200px;
  right: 380px;
}
.mediumSubtitle {
  top: 160px;
  right: 200px;
}
.smallSubtitle {
  top: 120px;
  right: 110px;
}
#arrow {
  position: absolute;
  transform: rotate(-60deg);
}
.bigArrow {
  top: 290px;
  right: 570px;
}
.mediumArrow {
  top: 240px;
  right: 320px;
  z-index: 3;
}
.smallArrow {
  top: 170px;
  right: 180px;
  z-index: 3;
}
</style>
