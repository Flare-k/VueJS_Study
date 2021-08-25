<template>
    <div>
        <h1>Hello Home - {{title}}! </h1>
        <input type="text" v-model="input1" />
        <button type="button" @click="getData">Get</button>
        <button type="button" @click="setData">Set</button>

        <select class="form-control" v-model="region" @change="changeRegion">
            <option :key="idx" :value="d.v" v-for="(d, idx) in options">{{d.t}}</option>
        </select>

        <table class="tabel table-bordered" v-if="tableShow">
            <tr :key="idx" v-for="(d, idx) in options">
                <td>{{d.v}}</td>
                <td>{{d.t}}</td>
            </tr>
        </table>
    </div>
</template>
<script>
export default {
    data() {
        return {
            title : "dev",
            input1 : "ID",
            options: [
                {v: "S", t: "Seoul"},
                {v: "J", t: "Jeju"},
                {v: "B", t: "Busan"}
            ],
            region: "J",
            tableShow: true,
        };
    },
    watch: {
        input1() {
            console.log(this.input1);
        }
    },
    methods: {
        // 여기서 모든 함수 관리
        getData () {
            alert(this.input1);
        },
        setData() {
            this.input1 = "12345"
        },
        changeRegion() {
            alert(this.region);
        }
    },
    
}
</script>