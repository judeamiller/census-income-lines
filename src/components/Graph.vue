<template>
  <div>
    <Plotly :data="data" :layout="layout" :display-mode-bar="false"></Plotly>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Plotly } from 'vue-plotly';

@Component({
  components: {Plotly}
})
export default class Graph extends Vue {
  data = [
    {
      x: [1, 2, 3, 4],
      y: [10, 15, 13, 17],
      type: 'scatter',
    },
  ];
  layout = {
    title: 'My graph',
  };
}
</script>

<style scoped></style>
