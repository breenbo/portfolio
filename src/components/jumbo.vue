<template>
  <q-card
    id="top"
    flat
    square
    class="bg-primary col"
    :class="
      $q.screen.gt.sm
        ? 'bigTitleCard'
        : $q.screen.gt.xs
        ? 'mediumTitleCard'
        : 'smallTitleCard'
    "
  >
    <transition appear enter-active-class="animated fadeIn">
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
        >Think out of the
        <transition appear enter-active-class="animated fadeIn boxAnimation"
          ><span>box</span></transition
        >
      </span></transition
    >
    <transition appear enter-active-class="animated fadeIn subtitleAnimation">
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
    </transition>
    <transition appear enter-active-class="animated fadeInRight">
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
        <rect
          x="0"
          y="0"
          width="40"
          height="40"
          fill="hsla(270,100%,70%,0.6)"
        />
      </svg>
    </transition>
    <svg
      id="ellipse"
      class="backgroundSVG"
      :width="$q.screen.gt.xs ? '330px' : '150px'"
      :height="$q.screen.gt.xs ? '440px' : '170px'"
      viewBox="10 2 50 100"
    >
      <ellipse cx="10" cy="90" rx="30" ry="50" fill="hsla(205,95%,52%,0.7)" />
      <ellipse
        v-if="$q.screen.gt.md"
        cx="10"
        cy="90"
        rx="30"
        ry="50"
        fill="hsla(205,95%,52%,0.1)"
        transform="scale(1.8) translate(-10 -38)"
      />
    </svg>
    <!--arrows {{{1-->
    <transition appear enter-active-class="animated fadeInUp arrowAnimation">
      <svg
        class="arrow"
        :class="
          $q.screen.gt.sm
            ? 'bigArrow'
            : $q.screen.gt.xs
            ? 'mediumArrow'
            : 'smallArrow'
        "
        :height="$q.screen.gt.xs ? '150px' : '50px'"
        :width="$q.screen.gt.xs ? '80px' : '100px'"
        viewBox="0 -80 100 400"
      >
        <!-- <polygon points="0 0, 0 100, 75 50" :fill="menu.color" /> -->
        <g transform="rotate(-60)">
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
        </g>
      </svg>
    </transition>
    <!--}}}-->
  </q-card>
</template>

<script lang="ts">
  //Imports{{{1
  import { Vue, Component } from 'vue-property-decorator';
  //}}}

  @Component
  export default class Title extends Vue {}
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
  .arrow {
    position: absolute;
    /*transform: rotate(-60deg);*/
  }
  .bigArrow {
    top: 260px;
    right: 620px;
  }
  .mediumArrow {
    top: 210px;
    right: 370px;
    z-index: 3;
  }
  .smallArrow {
    top: 155px;
    right: 180px;
    z-index: 3;
  }
  .fadeInRight {
    animation-duration: 550ms;
  }
  .fadeIn {
    animation-duration: 550ms;
  }
  .boxAnimation {
    animation-delay: 550ms;
  }
  .subtitleAnimation {
    animation-delay: 600ms;
  }
  .arrowAnimation {
    animation-delay: 800ms;
    animation-duration: 600ms;
  }
  #test {
    background-color: red;
  }
</style>
