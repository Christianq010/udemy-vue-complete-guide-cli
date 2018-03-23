<template>
    <div>
        <h3>Server Status: {{status}} </h3>
        <hr>
        <button v-on:click="changeStatus">Change Status</button>
    </div>

</template>

<script>
    export default {
        data: function () {
            return {
                status: 'Critical'
            }
        },
        methods: {
            changeStatus() {
                this.status = 'Normal';
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
hr {
    width: 45%;
}
button {
  color: #42b983;
}
</style>

