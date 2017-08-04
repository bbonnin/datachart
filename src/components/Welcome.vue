<template>
    <v-app id="welcome">
        <main>
            <v-container fluid>
                <v-row>
                    <v-col sm8 offset-sm2 class="big-top-space text-sm-center">
                        <h3>The simplest way from your raw data to a nice chart !</h3>

                        <v-btn round primary dark large tag="a" href="https://github.com/bbonnin/datachart"><i class="fa icon icon--left icon--medium fa-github"></i> Github</v-btn>

                        <router-link to="/dataview" tag="button">
                            <v-btn round primary dark large><v-icon left dark>insert_chart</v-icon> Create a chart</v-btn>
                        </router-link>

                    </v-col>
                </v-row>

                <v-row>
                    <v-col sm4 offset-sm2 class="big-top-space text-sm-center">
                        <h5>From CSV...</h5>
                        <p>Type your values (separated by commas or tabs) or copy/paste your data from Excel</p>
                    </v-col>
                    <v-col sm4 class="big-top-space">
                        <img src="../assets/step1.png" style="width: 100%;">
                    </v-col>
                </v-row>

                <v-row>
                    <v-col sm4 offset-sm2 class="big-top-space">
                        <img src="../assets/step2.png" style="width: 100%;">
                    </v-col>
                    <v-col sm4 class="big-top-space text-sm-center">
                        <h5>... to nice charts !</h5>
                        <p>In the data table panel, select the rows and the type of chart</p>
                        <p>In the chart panel, select the fields you want to add in the chart (by default, all the fields are used)</p>
                    </v-col>
                </v-row>
            </v-container>
        </main>
    </v-app>
</template>

<script>
import 'font-awesome/css/font-awesome.css'

export default {
    name: 'welcome'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.big-top-space {
    margin-top: 50px;
}
</style>
