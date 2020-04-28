<template>
  <q-layout view="lHh Lpr lFf">
    <q-header reveal>
      <q-toolbar class="bg-secondary">
        <q-toolbar-title class="q-my-md">FELB Portfolio</q-toolbar-title>
        <q-space />
        <q-btn
          v-for="button in buttons"
          :key="button.name"
          :to="button.route"
          unelevated
          color="dark"
          class="q-mx-xs gt-sm"
          >{{ button.name }}</q-btn
        >
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page class="q-mb-md">
        <jumboTitle />
        <beCards />
        <knowCard />
        <doCard />
        <shareCard />
      </q-page>
    </q-page-container>

    <q-footer class="lt-md row justify-around" reveal>
      <!--TODO : navigate with tabs-->
      <q-btn
        v-for="button in buttons"
        :key="button.name"
        :to="button.route"
        unelevated
        class="q-pa-sm"
        >{{ button.name }}</q-btn
      >
    </q-footer>
    <q-page-scroller
      id="scroller"
      position="bottom-right"
      :scroll-offset="150"
      :offset="[18, 18]"
    >
      <q-btn id="upButton" fab icon="keyboard_arrow_up" color="accent" />
    </q-page-scroller>
  </q-layout>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Button } from 'components/models/models';
import jumboTitle from 'components/jumbo.vue';
import beCards from 'components/beCard.vue';
import knowCard from 'components/knowCard.vue';
import doCard from 'components/doCard.vue';
import shareCard from 'components/shareCard.vue';

@Component({
  components: { jumboTitle, beCards, knowCard, doCard, shareCard }
})
export default class MainLayout extends Vue {
  buttons: Button = {
    be: {
      name: 'Be',
      route: '/be'
    },
    know: {
      name: 'Know',
      route: '/know'
    },
    do: {
      name: 'Do',
      route: '/do'
    },
    share: {
      name: 'Share',
      route: '/share'
    }
  };
}
</script>
<style scoped>
#container {
  z-index: 1;
}
#scroller {
  position: relative;
  z-index: 90;
}
</style>
