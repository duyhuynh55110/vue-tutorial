<template lang="html">
  <section class="binding-class">
    <h1> Binding cho inline style </h1>
    <p v-bind:style="[style, style2]"> Binding style một cách chuẩn và gọn (dạng mảng) </p>
    <p v-bind:style="style"> Binding style một cách chuẩn và gọn </p>
    <p v-bind:style="{
         color: color,
         'font-size': fontSize,
      }"> Chiều chiều ra đứng ngõ sau, trông về quê mẹ ruột đau chín chiều. </p>
    
    <h1> Binding một class của selector </h1>
    <p v-bind:class="classP"> Cơm chẳng lành, canh chẳng ngọt </p>
    <p v-bind:class="[classP, textUnder]"> Cơm chẳng lành, canh chẳng ngọt (Dạng mảng) </p>
  </section>
</template>

<script lang="js">
  export default  {
    name: 'bindingClass',
    props: [],
    mounted () {

    },
    data () {
      return {
          style: {
            color: 'green',
            'text-decoration': 'underline',
          },
          style2: {
            'font-style': 'oblique'
          },
          color: 'blue',
          fontSize: "20px",
          classP: {
            "text-danger": true, // Thêm class này vào đối tượng
            "text-underline": false, // Không thêm class này vào đối tượng
          },
          textUnder: {
            "text-underline": true,
          }
      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped>
   .text-danger {
     color: red;
   }
   .text-underline {
     text-decoration: underline;
   }

</style>