<template>
  <div id="Gastos">
    <span>tu gasto fue {{ detail }}</span>
    <input v-model="nombreGasto" placeholder="nombre gasto" />

    <input v-model.number="valor" type="number" placeholder="valor" />
    <button v-on:click="GuardarGasto" > Registrar este gasto y obtener todos los gastos </button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Gastos",
  data: function () {
    return {
      nombreGasto: "elefante",
      valor: 23444,

      detail: 0,
    };
  },
methods:{
  GuardarGasto: function () {
    this.Gastos = this.$route.params.Gastos;
    
    let bodyIn = {
      nombreGasto: this.nombreGasto,
      valor: this.valor,
    };
   var self = this;
    axios
      .post("http://finanzaspersonalesapi.herokuapp.com/DataIn/", bodyIn)
      .then((result) => {
        self.detail = result.data;
      })
      .catch((error) => {
        alert("ERROR Servidor" + error);
      });
  },
}
}
</script>

<style>
</style>