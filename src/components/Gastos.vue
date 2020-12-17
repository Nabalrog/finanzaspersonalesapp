<template>
  <div id="Gastos">
    
    

    <span>tu gasto fue  {{detail}}</span>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Gastos",
  data: function () {
    return {
        body:{nombreGasto:"elefante",
        valor:23444},
        
        detail:0
     
    };
  },
  
  created: function () {
    this.Gastos = this.$route.params.Gastos;

   
    let self = this;
    axios
      .post(
        "http://finanzaspersonalesapi.herokuapp.com/DataIn/", this.body
      )
      .then((result) => {
        self.detail = result.data;
      })
      .catch((error) => {
        alert("ERROR Servidor" + error);
      });
  },

    beforeCreate: function(){
    
    
     
  }
};
</script>

<style>

</style>