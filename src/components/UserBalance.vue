<template>
  <div id="UserBalance">
   
    <h2>
      Tus gastos registrados son: <span> </span>
    </h2>
<div>
  {{ detail }}
</div>
</div>
</template>

<script>
import axios from "axios";
export default {
  name: "UserBalance",
  data: function () {
    return {
     
      detail: "",
    };
  },
  created: function () {


    let self = this;
    axios
      .get("http://finanzaspersonalesapi.herokuapp.com/DataOut/")
      .then((result) => {
        self.detail = result.data;
      })
      .catch((error) => {
        alert("ERROR Servidor"+error);
      });
  },
};
</script>

<style>
#UserBalance {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#UserBalance h2 {
  font-size: 50px;
  color: #283747;
}
#UserBalance span {
  color: crimson;
  font-weight: bold;
}
</style>
