<template>
  <div class="blocoLancamento">
    <div class="botoes">
      <img class="imagemLancamento" src="../img/contato.png" alt="imagens de contato" />
        
      
    </div>

    <div class="descricaoLancamento">
      <span class="nome">{{ lancamento.nome }}</span >      
      <span>{{ lancamento.telefone }}</span>
      <span>{{ lancamento.email }}</span>


    </div>
    <button @click="excluirLancamento(lancamento.id)" class="botaoRemover">
        <img src="../img/lixeira.png" alt="Remover lançamento" />
      </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: mapActions(["excluirLancamento"]),
  props: {
    tipo: String,
    lancamento: Object,
  },
};
</script>

<style scoped>
.blocoLancamento {
  display: flex;
  background-color: white;
  border-radius: 20px;
  font-family: "padrao";
  padding: 10px;
  margin-bottom: 30px;
  
}

.botoes {
  width: 50%;
}

.imagemLancamento {
  width: 60px;
}
.botaoRemover {
  border: none;
  outline: none;
  background-color: white;
}

.botaoRemover:hover {
  cursor: pointer;
}

.botaoRemover img {
  width: 37px;
  margin: 30px -15px -30px 10px;
}

.botaoRemover img:active {
  filter: invert(100%);
}

.descricaoLancamento {
  width: 50%;
  float: right;
  text-align: right;
  font-family: "padrao";
}

.descricaoLancamento span {
  display: block;
  font-size: 80%;
}

.nome {
  font-size: 150% !important;
  font-family: "negrito";
   padding-top: 13px;
}
</style>