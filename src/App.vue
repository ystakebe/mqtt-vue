<template>
  <div id="app">
    <p>publish</p>
    <form>
      <input type="text" v-model="message"> <!-- 入力した値をpublishする -->
      <button type="button" @click="pubMessage()">publish</button>
    </form>
    <p>messages</p>
    <!-- ここに受信したメッセージ一覧が表示される -->
    <ul>
      <li v-for="(item, index) in items" :key="index">{{ item }}</li>
    </ul>
    <!-- ここまで -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [],
      topic: '/mqtt/test',
      message: ''
    }
  },
  methods: {
    // メッセージ送信処理
    pubMessage () {
      this.$mqtt.publish(this.topic, this.message)
    },
    // メッセージ受信処理
    onMessage (topic, subMessage) {
      this.items.push(subMessage)
    },
    onConnect () {
      console.log('connect!!')
    }
  },
  created () {
    this.$mqtt.on('connect', this.onConnect)
    this.$mqtt.on('message', this.onMessage)
    // メッセージのsubscribe処理
    this.$mqtt.subscribe(this.topic)
  }
}
</script>