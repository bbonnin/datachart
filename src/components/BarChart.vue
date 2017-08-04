<template>
    <div class="chart-container">
        
        <canvas v-show="values.length > 0" 
                v-bind:id="id" 
        ></canvas>

        <div v-show="values.length === 0 && labels.length > 0" class="text-xs-center">Select rows</div>

        <div v-show="labels.length === 0" class="text-xs-center">No data</div>

    </div>
</template>

<script type="text/javascript">
    
import Chart from 'chart.js'

const colors = [ "#FF6384", "#4BC0C0", "#FFCE56", "#E7E9ED", "#36A2EB", "#DB97E6" ]

export default {

    name: 'bar-chart',

    data () {
        return {
            chart: null
        }
    },

    props: {
        id: { default: 'barchart-canvas' },
        width: { type: [ String, Number ], required: true },
        height: { type: [ String, Number ], required: true },

        labels: { type: Array, required: true },
        values: { type: Array, required: true }
    },

    watch: {
        labels: 'valuesUpdated',
        values: 'valuesUpdated' 
    },

    methods: {
        valuesUpdated (n, o) {
            this.chart.data.labels = this.labels
            this.chart.data.datasets = []
            this.values.forEach(values => this.chart.data.datasets.push({ data: values, backgroundColor: colors }))
            //this.chart.data.datasets[0].data = this.values[0]
            this.chart.update()
        }

    },

    mounted () {
        let datasets = []
        this.values.forEach(values => datasets.push({ data: values, backgroundColor: colors }))

        this.chart = new Chart(this.id, {
            type: 'bar',
            data: { labels: this.labels, datasets: datasets },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                animation: { animateScale:true },
                legend: { display: false },
                scales: {
                    yAxes: [{
                        ticks: {
                            min: 0,
                        }
                    }]
                }
            }
        });
    }
}
</script>

<style scoped>
.chart-container {
    width: 100%;
    height: 100%;
}
</style>