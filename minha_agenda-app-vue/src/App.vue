<template>
  <div>
    
    <Header />

    <div id="container">
      <PainelLancamentos />
     
    </div>
  </div>
</template>

<script>
import PainelLancamentos from "./components/PainelLancamentos.vue";
import Header from "./components/Header.vue";
export default {
  name: "App",
  components: {  Header, PainelLancamentos },
};
</script>

<style>
@font-face {
  font-family: "padrao";
  src: url(./fonts/KumbhSans-Regular.ttf);
}

@font-face {
  font-family: "negrito";
  src: url(./fonts/KumbhSans-Bold.ttf);
}


body {
  margin: 0;
}

#container {
  display: flex;
  padding: 20px;
}
</style>
