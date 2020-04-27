<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar class="bg-secondary">
        <q-toolbar-title class="q-my-lg">FELB Portfolio</q-toolbar-title>
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
      <jumboTitle />
      <beCards />
    </q-page-container>

    <q-footer class="lt-md row justify-around">
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
  </q-layout>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Button } from 'components/models';
import jumboTitle from 'components/jumbo.vue';
import beCards from 'components/beCard.vue';

@Component({
  components: { jumboTitle, beCards }
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
