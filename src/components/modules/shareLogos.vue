<template>
  <div class="q-pt-none q-pb-md">
    <div
      class="row text-center text-weight-light"
      :class="
        $q.screen.gt.md ? 'text-h5' : $q.screen.gt.sm ? 'text-h6' : 'text-body1'
      "
    >
      <div class="col-4" v-for="logo in shareLogos" :key="logo.id">
        <q-btn
          v-if="logo.svg"
          class="col"
          :class="$q.screen.gt.md ? 'bigBouton' : 'smallBouton'"
          fab
          flat
          type="a"
          target="_blank"
          :href="logo.link"
        >
          <span v-html="logo.svg"></span>
        </q-btn>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
//Imports{{{1
import { Vue, Component } from 'vue-property-decorator';
// import upworkSVG from 'components/modules/svg/upwork.vue';
//}}}

@Component({
  //components: { upworkSVG }
})
export default class Logos extends Vue {
  //props{{{1
  //@Prop(String) readonly someProp!: string
  //}}}
  shareLogos = {
    /* upwork: { */
    /*   link: */
    /*     'https://www.upwork.com/o/profiles/users/~01d57d0ba60927dd72/?s=1110580755057594368', */
    /*   svg: */
    /*     '<svg width="100%" viewBox="0 0 2500 2500" xmlns="http://www.w3.org/2000/svg" > <path d="M1834.6 1453.7c-98.4 0-190.5-41.7-274.3-109.6l20.4-95.8.9-3.5c18.2-102 75.8-273.3 253-273.3 132.9 0 241 108.3 241 241.3-.4 132.6-108.5 240.9-241 240.9zm0-726.7c-226.4 0-401.9 147.3-473.2 389.5-109-163.7-191.4-360.2-239.7-525.7H878.1v634.8c0 125.1-101.9 227.1-226.9 227.1s-226.8-102-226.8-227.1V590.8H180.7v634.8c-.9 260 210.5 473.4 470.1 473.4s471-213.4 471-473.4v-106.5c47.4 98.9 105.4 198.7 175.9 287.5l-149.3 702.7h249.5l108.1-509.7c94.8 60.8 203.8 98.9 328.8 98.9 267.2 0 484.7-219.2 484.7-486.7-.2-267-217.7-484.8-484.9-484.8z" fill="#6fda44" /> </svg> ' */
    /* }, */
    linkedIn: {
      link: 'https://www.linkedin.com/in/brunoberrehuel/',
      svg:
        '<svg width="100%" viewBox="0 0 67 66" fill="#fff" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round"><use xlink:href="#A" x="1" y="1"/><symbol id="A" overflow="visible"><g stroke="none" fill-rule="nonzero"><path d="M59.26 0H4.724C2.12 0 0 2.066 0 4.61v54.788c0 2.53 2.12 4.6 4.724 4.6h54.54c2.61 0 4.736-2.07 4.736-4.6V4.61C64 2.066 61.874 0 59.26 0z" fill="#0177b5"/><path d="M9.49 23.992H19v30.54H9.49zm4.748-15.2c3.034 0 5.5 2.466 5.5 5.5a5.51 5.51 0 0 1-5.498 5.506 5.52 5.52 0 0 1-5.508-5.506 5.5 5.5 0 0 1 5.506-5.5m10.7 15.2h9.104v4.174h.126c1.268-2.4 4.364-4.932 9-4.932 9.612 0 11.386 6.326 11.386 14.548v16.752h-9.486V39.678c0-3.54-.064-8.1-4.932-8.1-4.94 0-5.7 3.86-5.7 7.84v15.108h-9.484v-30.54z"/></g></symbol></svg>',
    },
    /* twitter: { */
    /*   link: 'https://twitter.com/berrehuel', */
    /*   svg: */
    /*     ' <svg width="100%" viewBox="126.444 2.281 589 589"> <circle cx="420.944" cy="296.781" r="294.5" fill="#2daae1" /> <path d="M609.773 179.634c-13.891 6.164-28.811 10.331-44.498 12.204 16.01-9.587 28.275-24.779 34.066-42.86a154.78 154.78 0 01-49.209 18.801c-14.125-15.056-34.267-24.456-56.551-24.456-42.773 0-77.462 34.675-77.462 77.473 0 6.064.683 11.98 1.996 17.66-64.389-3.236-121.474-34.079-159.684-80.945-6.672 11.446-10.491 24.754-10.491 38.953 0 26.875 13.679 50.587 34.464 64.477a77.122 77.122 0 01-35.097-9.686v.979c0 37.54 26.701 68.842 62.145 75.961-6.511 1.784-13.344 2.716-20.413 2.716-4.998 0-9.847-.473-14.584-1.364 9.859 30.769 38.471 53.166 72.363 53.799-26.515 20.785-59.925 33.175-96.212 33.175-6.25 0-12.427-.373-18.491-1.104 34.291 21.988 75.006 34.824 118.759 34.824 142.496 0 220.428-118.052 220.428-220.428 0-3.361-.074-6.697-.236-10.021a157.855 157.855 0 0038.707-40.158z" fill="#fff" /> </svg> ', */
    /* }, */
    /* empty: { */
    /*   link: '', */
    /*   svg: '', */
    /* }, */
    /* freelancer: { */
    /*   link: 'https://www.fr.freelancer.com/u/breenbo', */
    /*   svg: */
    /*     ' <svg width="100%" viewBox="-0.23 0 97.266 72.333"> <path d="M56.897 0l6.624 9.29L97.036 0M22.075 72.333l18.13-17.725-10.912-11.71M54.152 0l-9.69 8.738 16.298.608M16.482 0l3.48 7.133 19.18 1.195M26.75 36.986l14.17-26.434L-.23 8.328M28.4 38.662L41.785 53.04 56.55 38.567l4.582-26.957-17.993-.918" fill="#29b2fe" /> </svg> ' */
    /* }, */
    gmail: {
      link: 'mailto:berrehuelbruno@gmail.com',
      svg:
        ' <svg id="quasar" width="100%" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" viewBox="7.086 7.087 1277.149 924.008" > <path fill="none" d="M1138.734 931.095h.283m0 0h-.283" /> <path d="M1179.439 7.087c57.543 0 104.627 47.083 104.627 104.626v30.331l-145.36 103.833-494.873 340.894L148.96 242.419v688.676h-37.247c-57.543 0-104.627-47.082-104.627-104.625V111.742C7.086 54.198 54.17 7.115 111.713 7.115l532.12 394.525L1179.41 7.115l.029-.028z" fill="#e75a4d" /> <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="1959.712" y1="737.107" x2="26066.213" y2="737.107" gradientTransform="matrix(.0283 0 0 -.0283 248.36 225.244)" > <stop offset="0" stop-color="#f8f6ef" /> <stop offset="1" stop-color="#e7e4d6" /> </linearGradient> <path fill="url(#a)" d="M111.713 7.087l532.12 394.525L1179.439 7.087z" /> <path fill="#e7e4d7" d="M148.96 242.419v688.676h989.774V245.877L643.833 586.771z" /> <path fill="#b8b7ae" d="M148.96 931.095l494.873-344.324-2.24-1.586L148.96 923.527z" /> <path fill="#b7b6ad" d="M1138.734 245.877l.283 685.218-495.184-344.324z" /> <path d="M1284.066 142.044l.17 684.51c-2.494 76.082-35.461 103.238-145.219 104.514l-.283-685.219 145.36-103.833-.028.028z" fill="#b2392f" /> <linearGradient id="b" gradientUnits="userSpaceOnUse" x1="1959.712" y1="737.107" x2="26066.213" y2="737.107" gradientTransform="matrix(.0283 0 0 -.0283 248.36 225.244)" > <stop offset="0" stop-color="#f8f6ef" /> <stop offset="1" stop-color="#e7e4d6" /> </linearGradient> <path fill="url(#b)" d="M111.713 7.087l532.12 394.525L1179.439 7.087z" /> <linearGradient id="c" gradientUnits="userSpaceOnUse" x1="1959.712" y1="737.107" x2="26066.213" y2="737.107" gradientTransform="matrix(.0283 0 0 -.0283 248.36 225.244)" > <stop offset="0" stop-color="#f8f6ef" /> <stop offset="1" stop-color="#e7e4d6" /> </linearGradient> <path fill="url(#c)" d="M111.713 7.087l532.12 394.525L1179.439 7.087z" /> <linearGradient id="d" gradientUnits="userSpaceOnUse" x1="1959.712" y1="737.107" x2="26066.213" y2="737.107" gradientTransform="matrix(.0283 0 0 -.0283 248.36 225.244)" > <stop offset="0" stop-color="#f8f6ef" /> <stop offset="1" stop-color="#e7e4d6" /> </linearGradient> <path fill="url(#d)" d="M111.713 7.087l532.12 394.525L1179.439 7.087z" /> <linearGradient id="e" gradientUnits="userSpaceOnUse" x1="1959.712" y1="737.107" x2="26066.213" y2="737.107" gradientTransform="matrix(.0283 0 0 -.0283 248.36 225.244)" > <stop offset="0" stop-color="#f8f6ef" /> <stop offset="1" stop-color="#e7e4d6" /> </linearGradient> <path fill="url(#e)" d="M111.713 7.087l532.12 394.525L1179.439 7.087z" /> <linearGradient id="f" gradientUnits="userSpaceOnUse" x1="1959.712" y1="737.107" x2="26066.213" y2="737.107" gradientTransform="matrix(.0283 0 0 -.0283 248.36 225.244)" > <stop offset="0" stop-color="#f8f6ef" /> <stop offset="1" stop-color="#e7e4d6" /> </linearGradient> <path fill="url(#f)" d="M111.713 7.087l532.12 394.525L1179.439 7.087z" /> <linearGradient id="g" gradientUnits="userSpaceOnUse" x1="1959.712" y1="737.107" x2="26066.213" y2="737.107" gradientTransform="matrix(.0283 0 0 -.0283 248.36 225.244)" > <stop offset="0" stop-color="#f8f6ef" /> <stop offset="1" stop-color="#e7e4d6" /> </linearGradient> <path fill="url(#g)" d="M111.713 7.087l532.12 394.525L1179.439 7.087z" /> <linearGradient id="h" gradientUnits="userSpaceOnUse" x1="1959.712" y1="737.107" x2="26066.213" y2="737.107" gradientTransform="matrix(.0283 0 0 -.0283 248.36 225.244)" > <stop offset="0" stop-color="#f8f6ef" /> <stop offset="1" stop-color="#e7e4d6" /> </linearGradient> <path fill="url(#h)" d="M111.713 7.087l532.12 394.525L1179.439 7.087z" /> <path fill="#f7f5ed" d="M111.713 7.087l532.12 394.525L1179.439 7.087z" /> </svg> ',
    },
    github: {
      link: 'https://www.github.com/breenbo',
      svg:
        '<svg width="100%" baseProfile="tiny" viewBox="0 0 2350 2314.8"> <path d="M1175 0C525.8 0 0 525.8 0 1175c0 552.2 378.9 1010.5 890.1 1139.7-5.9-14.7-8.8-35.3-8.8-55.8v-199.8H734.4c-79.3 0-152.8-35.2-185.1-99.9-38.2-70.5-44.1-179.2-141-246.8-29.4-23.5-5.9-47 26.4-44.1 61.7 17.6 111.6 58.8 158.6 120.4 47 61.7 67.6 76.4 155.7 76.4 41.1 0 105.7-2.9 164.5-11.8 32.3-82.3 88.1-155.7 155.7-190.9-393.6-47-581.6-240.9-581.6-505.3 0-114.6 49.9-223.3 132.2-317.3-26.4-91.1-61.7-279.1 11.8-352.5 176.3 0 282 114.6 308.4 143.9 88.1-29.4 185.1-47 284.9-47 102.8 0 196.8 17.6 284.9 47 26.4-29.4 132.2-143.9 308.4-143.9 70.5 70.5 38.2 261.4 8.8 352.5 82.3 91.1 129.3 202.7 129.3 317.3 0 264.4-185.1 458.3-575.7 499.4 108.7 55.8 185.1 214.4 185.1 331.9V2256c0 8.8-2.9 17.6-2.9 26.4C2021 2123.8 2350 1689.1 2350 1175 2350 525.8 1824.2 0 1175 0z" /> </svg> ',
    },
    /* fiverr: { */
    /*   link: 'https://www.fiverr.com/share/P4d6Dp', */
    /*   svg: */
    /*     ' <svg width="100%" viewBox="50 100 320 200"> <g fill="#00b22d"> <path d="M364.4 162.7c0-6.6-5.2-12-11.8-12-6.4 0-11.7 5.3-11.7 12 0 6.6 5.2 12 11.7 12 6.6.1 11.8-5.3 11.8-12zm-11.8 8.7c-4.5 0-8-3.8-8-8.7 0-4.8 3.5-8.6 8-8.6 4.6 0 8.2 3.8 8.2 8.6 0 4.9-3.6 8.7-8.2 8.7z" /> <path d="M355.8 163.7c.6-.2 1.9-1.1 1.9-3 0-2.3-1.5-3.7-4-3.7h-5.3v11.3h3.5v-3.8h.9l1.6 3.8h3.8l-2.1-3.9c-.2-.6-.3-.7-.3-.7zm-3-1.6h-.9v-2.7h.9c.8 0 1.2.4 1.2 1.3.1.9-.4 1.4-1.2 1.4z" /> <circle cx="104.6" cy="163" r="9" /> <path d="M114 177.9H72.8v-2.7c0-5.3 5.3-5.4 8-5.4 3.1 0 4.5.3 4.5.3v-14.6s-2.8-.4-6.6-.4c-8.6 0-24.5 2.4-24.5 20.6v2.3h-7.5v13.5h7.5V220h-7v13.5H81V220h-8.2v-28.5h22.5V220h-7v13.5H121V220h-7zm70 0h-29.5v13.5h5l-6.4 20c-1.2 3.3-1.5 7.3-1.5 7.3h-.4s-.3-4-1.5-7.3l-6.4-20h5v-13.5h-29.5v13.5h6.2l15.4 42h22l15.4-42h6.2zm54.6 25.5c0-15.4-9.3-26.8-25.8-26.8-17.9 0-28.9 12.7-28.9 29 0 14.8 10.7 29.1 30.5 29.1 15 0 23.9-7.8 23.9-7.8l-6.8-12.9s-7.4 5.3-15.6 5.3c-5.9 0-11.5-3.1-12.9-10.2h35.2c-.1-.1.4-3.9.4-5.7zm-35.2-4.6c1-4.3 3.6-8.2 8.9-8.2 4.1 0 7 3.8 7 8.2zm114.1-8.1h-.2s.2-1.1.2-2.8V185c0-5.1-2.8-7.1-7.9-7.1h-17.5v13.5h5.2c1.5 0 2.4.9 2.4 2.4V220h-7.5v13.5h33.7V220h-7.5v-8.1c0-10.1 5-16.7 15.3-16.7 2.3 0 3.8.3 3.8.3v-18.3s-1.1-.2-2.2-.2c-8.4-.1-15.4 6.1-17.8 13.7zm-49.3 0h-.2s.2-1.1.2-2.8V185c0-5.1-2.8-7.1-7.9-7.1h-17.5v13.5h5.2c1.5 0 2.4.9 2.4 2.4V220h-7.5v13.5h33.7V220h-7.5v-8.1c0-10.1 5-16.7 15.3-16.7 2.3 0 3.8.3 3.8.3v-18.3s-1.1-.2-2.2-.2c-8.5-.1-15.5 6.1-17.8 13.7z" /> </g> </svg> ' */
    /* }, */
    /* reddit: { */
    /*   link: 'https://www.reddit.com/user/Breenbo', */
    /*   svg: */
    /*     ' <svg width="100%" viewBox="0 0 810 810"><circle cx="406.6" cy="405.6" r="402.3" fill="#ff4500"/><path d="M674.9 405.6c-1.2-32.4-28.4-57.7-60.9-56.6-14.4.5-28.1 6.4-38.5 16.3-45.8-31.2-99.6-48.3-154.9-49.5l26.1-125.5 86.1 18.1c2.4 22.1 22.2 38.1 44.3 35.7 22.1-2.4 38.1-22.2 35.7-44.3s-22.2-38.1-44.3-35.7c-12.7 1.3-24.1 8.7-30.4 19.7l-98.6-19.7c-6.7-1.5-13.4 2.7-14.9 9.5v.2l-29.7 139.6c-56 .9-110.5 18.1-156.9 49.5-23.6-22.2-60.8-21.1-83 2.6-22.2 23.6-21.1 60.8 2.6 83 4.6 4.3 9.9 8 15.8 10.6-.4 5.9-.4 11.8 0 17.7 0 90.1 105 163.4 234.5 163.4S642.4 567 642.4 476.8c.4-5.9.4-11.8 0-17.7 20.2-10.1 32.9-30.9 32.5-53.5zm-402.3 40.3c0-22.2 18.1-40.3 40.3-40.3s40.3 18.1 40.3 40.3c0 22.2-18.1 40.3-40.3 40.3-22.3-.2-40.3-18.1-40.3-40.3zm233.7 110.6c-28.6 21.5-63.6 32.5-99.4 31-35.8 1.5-70.8-9.5-99.4-31-3.8-4.6-3.1-11.5 1.5-15.3 4-3.3 9.7-3.3 13.8 0 24.2 17.7 53.7 26.7 83.7 25.3 30 1.6 59.6-7 84.1-24.5 4.4-4.3 11.6-4.2 15.9.2s4.2 11.6-.2 15.9v-1.6zm-7.2-68.9c-22.2 0-40.3-18.1-40.3-40.3 0-22.2 18.1-40.3 40.3-40.3 22.2 0 40.3 18.1 40.3 40.3.9 22.2-16.4 40.9-38.6 41.8h-2l.3-1.5z" fill="#fff"/></svg> ' */
    /* } */
  };
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
#bigSVG {
  max-width: 480px;
}
#smallSVG {
  max-width: 200px;
}
#vue {
  width: 34%;
}
#quasar {
  background-color: lightgrey;
}
.bigBouton {
  height: 110px;
  width: 110px;
  padding: 0;
}
.smallBouton {
  height: 100px;
  width: 100px;
}
</style>
