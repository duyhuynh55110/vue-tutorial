<template lang="html">

  <section class="render-condition">
    <h1> v-for </h1>
    <ul v-for="(item, key) in items" :key="key">
        <li @click="clickItem(item)"> {{ item }} </li>
    </ul>

    <h1> v-else-if </h1>
    <div v-if="type === 'A'">A</div>
    <div v-else-if="type === 'B'">B</div>
    <div v-else-if="type === 'C'">C</div>
    <div v-else-if="type === 'D'">D</div>
    <div v-else>Chiến Sĩ không thể nhớ nổi</div>

    <h1> Hiện v-if và <code> template </code> </h1>
    <template v-if="true">
        <p> Thẻ p trong template </p>
        <h6> Thẻ h6 trong template </h6>
    </template>

    <h1>v-if</h1>
    <p v-if="typeof a != 'undefined'"> Đang chạy vào điều kiện đúng </p>
    <p v-else> Đang chạy vào điều kiện sai </p>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'render-condition',
    props: [],
    mounted () {

    },
    data () {
      return {
          items: [
            'PHP',
            'MySQL',
            'JavaScripts',
            'HTML',
            'CSS',
            'Python',
            'C++',
          ]
      }
    },
    methods: {
      clickItem: function (item) {
          alert(item);
      }
    },
    computed: {

    }
}


</script>