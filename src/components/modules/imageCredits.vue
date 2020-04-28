<template>
  <div>
    Know
    <a
      style='background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, "San Francisco", "Helvetica Neue", Helvetica, Ubuntu, Roboto, Noto, "Segoe UI", Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px'
      href="https://unsplash.com/@alfonsmc10?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
      target="_blank"
      rel="noopener noreferrer"
      title="Download free do whatever you want high-resolution photos from Alfons Morales"
      ><span style="display:inline-block;padding:2px 3px"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white"
          viewBox="0 0 32 32"
        >
          <title>unsplash-logo</title>
          <path
            d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"
          ></path></svg></span
      ><span style="display:inline-block;padding:2px 3px"
        >Alfons Morales</span
      ></a
    >

    Share table with computer
    <a
      style='background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, "San Francisco", "Helvetica Neue", Helvetica, Ubuntu, Roboto, Noto, "Segoe UI", Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px'
      href="https://unsplash.com/@marvelous?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
      target="_blank"
      rel="noopener noreferrer"
      title="Download free do whatever you want high-resolution photos from Marvin Meyer"
      ><span style="display:inline-block;padding:2px 3px"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white"
          viewBox="0 0 32 32"
        >
          <title>unsplash-logo</title>
          <path
            d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"
          ></path></svg></span
      ><span style="display:inline-block;padding:2px 3px">Marvin Meyer</span></a
    >
  </div>
</template>

<script lang="ts">
//Imports{{{1
import { Vue, Component, Props } from 'vue-property-decorator';
// use store datas
import { getModule } from 'vuex-module-decorators';
import TaskStore from '../store/task-store';
//}}}

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
export default class imageCredits extends Vue {
  //props{{{1
  //@Prop(String) readonly someProp!: string
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
</style>
