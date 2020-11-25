<template>
  <div id="painelLancamento">
    <div id="formularioLancamento">
      <form @submit="salvar">

        <label for="nome">Nome</label>
        <input
          type="text"
          name="nome"
          id="nome"
          required
          v-model="nome"
        />
        
        <label for="telefone">Telefone</label>
        <input
          type="text"
          name="telefone"
          id="telefone"
          required
          v-model="telefone"
        />

        <label for="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          v-model="email"
        /> 

        <button>Salvar</button>
      </form>
    </div>

    
  </div>
  <div id="areaLancamentos">
      <BlocoLancamento
        v-for="lancamento in todosLancamentos"
        v-bind:key="lancamento.id"
        :tipo="lancamento.nome"
        :lancamento="lancamento" 
      />
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import BlocoLancamento from "./BlocoLancamento.vue";
import Lancamento from "../models/Lancamento";

export default {
  name: "PainelLancamento",
  data: () => {
    return {
      nome: undefined,
      telefone: "",
      email: "",
    };
  },
  components: {
    BlocoLancamento,
  },
  computed: mapGetters(["todosLancamentos"]),
  methods: {
    ...mapActions(["salvarLancamento"]),
    salvar(event) {
      event.preventDefault();

      const lancamento = new Lancamento(this.nome, this.telefone, this.email);
      this.salvarLancamento(lancamento);
      this.limparFormulario();
    },
    limparFormulario() {
      this.nome = undefined;
      this.telefone = "";
      this.email = "";
    },
  },
};
</script>


<style scoped>
#painelLancamento {
  width: 40%;
  padding: 10px;
}

#formularioLancamento {
  font-size: 140%;
  font-weight: bold;
  padding-top: 20px;
  font-family: Arial, Helvetica, sans-serif;
}

#nome,
#telefone,
#email,
button {
  display: block;
  margin-bottom: 10px;
}

#nome,
#telefone,
#email{
  height: 35px;
  width: 80%;
  margin: 10px 0px 20px 0px;
  font-family: "padrao";
  font-size: 130%;
  border: 1px solid #cccccc;
  outline: none;
}

button {
  background-color: #8E15F4;
  border: none;
  outline: none;
  border-radius: 5px;
  padding: 10px 20px;
  color: white;
  font-family: "negrito";
  font-size: 120%;
}

#areaLancamentos {
  background-color: #F7E3FE;
  border-radius: 10px;
  padding: 20px;
  margin: 10px 0px 0px 70px;
  width: 45%;
}
</style>