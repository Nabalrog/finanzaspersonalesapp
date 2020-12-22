<template>
  <div id="User">
    <span>Digita tu nuevo frase motivacional:</span>

    
    <input v-model="nombreFrase" placeholder="Nombre de la frase motivacional" />

    <input v-model="frase" placeholder="Contenido de la frase" />

    <span><button v-on:click="GuardarFrase" > Registrar esta frase </button></span>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Frases",
  data: function () {
    return {
      nombreFrase: "elefante",
      frase: "elefante32",

      detail:"",
    };
  },
methods:{
  GuardarFrase: function () {

    let bodyIn = {
      nombreFrase: this.nombreFrase,
      frase: this.frase,
    };
   var self = this;
    axios
      .post("https://finanzaspersonalesapi5.herokuapp.com/DataIn/intfinanciera", bodyIn)
      .then((result) => {
        self.detail = this.$alert("tu frase ha sido registrada")
        
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