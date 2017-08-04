<template>
    <v-app id="dataview">
        <v-toolbar class="blue darken-2 white--text">
            <v-toolbar-title>Create your chart in few seconds!</v-toolbar-title>
        </v-toolbar>
        <main>
            <v-content>
                <v-container fluid>
                    <v-row>
                        <v-col sm6 key="1">
                            <v-card>
                                <v-card-title>Your data</v-card-title>
                                <v-card-text>
                                    <v-card-row height="200px">
                                    <!-- ************************************************ --> 
                      
                                        <textarea class="user-data" v-model="csvdata"></textarea>
                      
                                    <!-- ************************************************ -->
                                    </v-card-row>
                                </v-card-text>
                                <v-card-row actions>
                                <!-- ******************************************************* -->

                                    <v-btn v-on:click.native="clear" class="grey lighten-4" default>Clear</v-btn>
                                    <v-btn v-on:click.native="setDefaultData" class="grey lighten-4" default>Show example</v-btn>

                                <!-- ******************************************************* -->                  
                                </v-card-row>
                            </v-card>
                        </v-col>

                        <v-col sm6 key="2">
                            <v-card>
                                <v-card-title>Data table</v-card-title>
                                <v-card-text>
                                    <v-card-row height="200px" class="data-table">
                                    <!-- ******************************************************* -->

                                        <div v-if="headers.length > 0">

                                            <table>
                                            <tr>
                                                <th>
                                                    <v-checkbox v-if="chartType === 'bar'" primary hide-details 
                                                        @click.native="toggleAll" 
                                                        :input-value="selected.all"></v-checkbox>
                                                </th>
                                                <th v-for="header in headers">{{ header }}</th>
                                            </tr>
                                            <tr v-for="(value, index) in values">
                                                <td>
                                                    <v-checkbox v-if="chartType === 'bar'" primary hide-details 
                                                        v-model="selected.items"
                                                        :input-value="selected.items" @click.native="toggle" :value="index"></v-checkbox>

                                                    <v-radio v-if="chartType === 'pie'" primary hide-details 
                                                        v-model="selected.item"
                                                        :input-value="selected.item" @click.native="toggle" 
                                                        :value="index"></v-radio>
                                                </td>
                                                <td v-for="item in value">{{ item }}</td>
                                            </tr>
                                            </table>

                                        </div>

                                        <div v-else class="no-data text-xs-center">No data</div>

                                    <!-- ******************************************************* -->
                                    </v-card-row>
                                </v-card-text>
                                <v-card-row actions>
                                <!-- ******************************************************* -->

                                    <v-col md12>
                                        <v-btn-toggle v-bind:options="chartOptions" v-model="chartType" class="right"></v-btn-toggle>
                                    </v-col>

                                <!-- ******************************************************* -->                  
                                </v-card-row>
                            </v-card>
                        </v-col>
                    </v-row>
                    <v-row class="mt-3" v-if="headers.length > 0 && chartType">
                        <v-col sm12 key="3">
                            <v-card>
                                <v-card-title>Your chart !</v-card-title>
                                <v-card-text style="padding-top: 0px;">
                                    <v-card-row>
                                        <v-select 
                                            label="Selected fields"
                                            v-bind:items="headers"
                                            v-model="selected.headers"
                                            multiple
                                            max-height="400"
                                            persistent-hint
                                        ></v-select>
                                    </v-card-row>
                                    <v-card-row height="203px">
                                    <!-- ******************************************************* -->

                                        <pie-chart v-if="chartType === 'pie'" height="250" width="250"
                                            :labels="selectedHeaders" 
                                            :values="selectedValues"></pie-chart>

                                        <bar-chart v-if="chartType === 'bar'" height="250" width="250"
                                            :labels="selectedHeaders" 
                                            :values="selectedValues"></bar-chart>

                                    <!-- ******************************************************* -->
                                    </v-card-row>
                                </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </v-content>
        </main>
    </v-app>
</template>

<script type="text/javascript">

import _ from 'lodash'
import PieChart from './PieChart.vue'
import BarChart from './BarChart.vue'

export default {
    name: 'dataview',

    data () {
        return {
            csvdata: '',
            chartType: 'pie',
            chartOptions: [
                { icon: 'pie_chart', value: 'pie', class: 'white--text' },
                { icon: 'insert_chart', value: 'bar' }
            ],
            selected: {
              all: false,
              item: 0,
              items: [],
              headers: []
            }
        }
    },

    components: {
        'pie-chart': PieChart, 'bar-chart': BarChart 
    },

    computed: {
        headers () {
            let headers = this.getRow(0)
            this.selected.headers = headers.slice()
            return headers
        },

        values () {
            let val = this.getRows()
            return val.slice(1)
        },

        selectedValues () {
            console.log(this.selectedHeaders)
            if (this.values.length > 0 && this.selectedHeaders.length > 0) {
                if (this.chartType === 'pie') {
                    return this.values[this.selected.item]
                        .filter((val, idx) => this.selectedHeaders.indexOf(this.headers[idx]) != -1)
                }
                else {
                    return this.selected.items.map(item => this.values[item]
                        .filter((val, idx) => this.selectedHeaders.indexOf(this.headers[idx]) != -1))
                }
            }

            return []
        },

        selectedHeaders () {
            return this.headers.filter(header => this.selected.headers.indexOf(header) != -1)
        }
    },

    watch: {
        csvdata (val) {
            this.csvdata = val.trim()
            this.selected.all = false
            this.selected.items = [ 0 ]
        }
    },

    methods: {
        getSeparator (lines) {
            let sep = ','
            if (lines[0].indexOf('\t') != -1) {
                sep = '\t'
            }
            return sep
        },

        getRows () {
            let lines = this.csvdata.split('\n')
            if (lines.length > 1) {
                return lines.map(line => line.split(this.getSeparator(lines)))
            }
            return []   
        },

        getRow (i) {
            let lines = this.csvdata.split('\n')
            if (lines.length > 1) {
                return lines[i].split(this.getSeparator(lines))
            }
            return []   
        },

        clear: function () {
            this.csvdata = ''
        },

        setDefaultData: function () {
            this.csvdata = 
                'Year,Chrome,IE,Firefox,Safari,Others\n' + 
                '2014,45.53,21.21,17.92,10.33,5.01\n' +
                '2015,50.97,17.3,16.02,9.93,5.78\n' +
                '2016,56.78,11.8,14.28,9.57,7.57'
        },

        toggleAll () {
            if (this.selected.all) {
                this.selected.items = []
            }
            else {
                this.selected.items = Array.from(Array(this.values.length).keys())
            }
            this.selected.all = !this.selected.all
        },

        toggle () {
            this.selected.all = this.selected.items.length == this.values.length
        }
    }
}
</script>

<style scoped>
.content>.container {
    padding: 1rem 3rem;
}

.no-data {
    width: 100%;
}

.data-table {
  display: grid;
  width: 100%;
  overflow: auto;
}

.user-data {
  width: 100%;
  height: 100%;
}

th {
    max-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>