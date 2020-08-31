<template lang="html">
  <section class="example">
    <h1> Watcher </h1>
    <input v-model="question"/>
    <p> {{ answer }} </p>

    <h1> Computed getter - setter </h1>
    {{ fullName = "Johnny" }}
    <p> {{ fullName }}</p>

    <h1> Computed </h1>
    <p> Message ban đầu: "{{ msg }}"</p>
    <p> Khi dùng computed reversedMsg: "{{ reversedMsg }}" (Giá trị của reversedMsg luôn phụ thuộc vào msg) </p>

    <h1> V-once - @click </h1>
    <p v-once> Chỉ chịu tác động 1 lần: {{ age }} </p>
    <p> Chịu tác động n lần: {{ age }} </p>
    <button @click="increaseAge"> Increase </button>

    <h1> rawHTML </h1>
    <p> Gọi data bình thường chưa phải rawHTML: {{ rawHTML }}</p>
    <p> rawHTML trong Vue: <span v-html="rawHTML"></span></p>

    <h1> V-bind </h1>
    <button @click="toggleDisabledProperty"> Active </button>
    <button v-bind:disabled="isDisabled"> Button </button>

    <h1> Sử dụng các biểu thức JavaScripts </h1>
    Định nghĩa a: {{ a = 2 }}
    <p> Gọi a ngoài một thẻ khác {{ a * 2 }}</p>

    <h1> Directive (v-if, v-on) </h1>
    <p v-if="!isDisabled"> Đoạn HTML này chỉ hiện khi isDisabled = false </p>
    <select v-on:change="onChangeSelect(565)">
        <option value="1"> Option 1 </option>
        <option value="2"> Option 2 </option>
        <option value="3"> Option 3 </option>
    </select>

    <h1> Cú pháp rút gọn </h1>
    <p> Rút gọt v-bind:href -> :href </p>
    v-bind:href = <a v-bind:href="href"> ODA.VN </a> <br/>
    :href = <a :href="href"> ODA.VN </a>
    <p> Rút gọt v-on:click -> @click </p>
    <button @click="increaseAge"> Increase </button>
  </section>
</template>

<script lang="js">
  export default  {
    name: 'Example',
    props: [],
    data () {
      return {
        age: 18,
        rawHTML: "<span style='color:red'> rawHTML </span>",
        isDisabled: true,
        href: "https://oda.vn",
        msg: "Tháng bảy kiến bò, chỉ lo lại lụt",
        name: "Duy Huỳnh",
        question: "",
        answer: "Không tìm thấy kết quả cho câu hỏi này.",
      }
    },
    watch: {
      // Bất kỳ lúc nào question thay đổi hàm bên dưới đây sẽ chạy
      question: function () {
        this.answer = "Đang chờ bạn nhập xong câu hỏi...";
      }
    },
    methods: {
      increaseAge() {
        this.age++;
      },
      toggleDisabledProperty() {
        this.isDisabled = !this.isDisabled;
      },
      onChangeSelect(value) {
          alert(value);
      }
    },
    computed: {
      fullName: {
        get: function () {
            return "Nam có giá trị là: " + this.name;
        },
        set: function (value) {
            this.name = value;
        }
      },
      reversedMsg: function() {
          return this.msg.split(' ').reverse().join(' '); 
      }
    }
  }
</script>

<style scoped>
</style>
