<template>
  <div>
    <Plotly :data="cities" :layout="layout" :display-mode-bar="false"></Plotly>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Plotly } from 'vue-plotly';
import censusData from '@/assets/data/converted-data.json';
import { CensusDataType, LineDataType } from '@/types';

@Component({
  components: { Plotly },
})
export default class Graph extends Vue {
  censusData: CensusDataType = censusData;
  cities: LineDataType[] = [];

  mounted() {
    for (const key of Object.keys(this.censusData)) {
      //@ts-ignore
      const data = this.censusData[key];
      const lineData = {
        x: [2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
        y: [
          data['2011'],
          data['2012'],
          data['2013'],
          data['2014'],
          data['2015'],
          data['2016'],
          data['2017'],
          data['2018'],
          data['2019'],
        ],
        name: data.City,
        type: 'Scatter'
      };
      this.cities.push(lineData)

    }
  }
  data = [
    {
      x: [1, 2, 3, 4],
      y: [10, 15, 13, 17],
      type: 'scatter',
    },
  ];
  layout = {
    title: 'Median Household Incomes by Most Populous U.S. Metropolitan Areas',
  };
}
</script>

<style scoped></style>
