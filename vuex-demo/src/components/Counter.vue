<template>
    <div name="counter">
        <h3>State "count" gọi từ Vuex có giá trị là: {{ count }}</h3>
        <h3> State "count" gọi từ Vuex có giá trị là (lấy bằng getter - Không render lại khi cập nhật giá trị 'count'): {{ countGetter }}</h3>
        <button @click="increment"> Increase </button>
        <button @click="incrementByAction"> Increase (Dùng action của vuex) </button>
        <button @click="incrementByAction('Gọi hàm increment bằng action (cú pháp vuex helper)')"> Increase (Dùng action của vuex, gọi bằng Vuex Helper) </button>

        <h3> Modules </h3>
        <p> {{ result }} </p>
    </div>
</template>
<script>
    import Vuex from "vuex"
    
    export default {
        name: "Counter",
        data () {
            return {
                countGetter: this.$store.getters.count,
            }
        },
        computed: {
            // count () {
            //     return this.$store.state.count
            // }
            ...Vuex.mapState(['count', 'score', 'result']) // Dùng Vuex helper thay vì gán thông thường
        },
        methods: {
            ...Vuex.mapActions({
                incrementByActionHelper: "incrementByAction",
                incrementScore: "incrementScore",
            }), // Dùng Vuex helper thay vì phải viết trực tiếp như hai hàm dưới (Tham số truyền sẽ trong phần @click)
            increment() { // Dùng multation trong một hàm để đổi giá trị 
                return this.$store.commit("increment", 3);
            },
            incrementByAction() {
                return this.$store.dispatch('incrementScore', "Dùng action trong vuex để gián tiếp cập nhật count");
            }
       }
    }
</script>