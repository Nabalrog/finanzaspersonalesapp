<template>
  <div id="User">
    <span>Digita tu nuevo gasto:</span>

    
    <input v-model="nombreGasto" placeholder="nombre gasto" />

    <input v-model.number="valor" type="number" placeholder="valor" />
    <span><button v-on:click="GuardarGasto" > Registrar este gasto </button></span>
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

      detail:"",
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
      .post("https://finanzaspersonalesapi.herokuapp.com/DataIn/", bodyIn)
      .then((result) => {
        self.detail = this.$alert("tu gasto ha sido registrado")
        
      })
      .catch((error) => {
        alert("ERROR Servidor" + error);
      });
  },
}
}
</script>

<style>

#User{
        width: 100%;
        height: 100%;

        display: flex;
        justify-content: space-evenly;
       
    }
    #User h2{
        font-size: 50px;
        color: #283747;
    }
    #User span{
        color: black;
        font-weight: bold;
    }
</style>