const moduloLancamentos = {
    state: {
        lancamentos: [
            {
                id: Math.random().toString(36).substring(2, 5),
                nome: "Adalto",
                telefone: "(67)99999-9999",
                email: "casa@gmail.com"
            },
            {
                id: Math.random().toString(36).substring(2, 5),
                nome: "Mario",
                telefone: "(67)99988-9999",
                email: "empresa@gmail.com"
            },
            {
                id: Math.random().toString(36).substring(2, 5),
                nome: "Bruno",
                telefone: "(67)99977-9999",
                email: "ifms@gmail.com"
            }
            
        ],
    },
    getters: {
        todosLancamentos: state => state.lancamentos
    },
    actions: {
        salvarLancamento: ({ commit }, lancamento) => {
            commit("adicionarLancamento", lancamento);
        },
        excluirLancamento: ({commit}, id) => {
            commit('removerLancamento', id);
        }
    },
    mutations: {
        adicionarLancamento: 
            (state, lancamento) => state.lancamentos.unshift(lancamento),
       
        removerLancamento: 
            (state, id) => 
                state.lancamentos = 
                    state.lancamentos.filter(lancamento => lancamento.id !== id)
    }
};

export default moduloLancamentos;