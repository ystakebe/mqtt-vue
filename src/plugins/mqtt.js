import Vue from 'vue'
import VueMqtt from 'vue-mqtt'

const option = {
}

Vue.use(VueMqtt, 'ws://localhost:8883', option) // mqtt on websocketなのでws://

export default VueMqtt
