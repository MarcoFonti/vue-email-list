// CHECK 
console.log('JS VUE OK', Vue);

// URL BOOLEAN
const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';

// ESTRAPOLO FUNZIONE DA VUE
const {createApp} = Vue;

// CREO VARIBILE E RICHIAMO LA FUNZIONE
const app = createApp ({
    name: 'VueEmail',
    // USO DATA CON ALL'INTENRO IL RETURN 
    data() {
        return {
            // ARRAY DI LISTA EMAIL
            mails: [],
        }
    },

    // ALL'AVVIO DELLA PAGINA
    created() {
        // CICLO 10 EMAIL
        for (let i = 0; i < 10 ; i++) {
            // AXIOS
            axios.get(endpoint).then((res)=> {
                // CONSOLE 
                console.log(res.data);
                // PUSH NELL'ARRAY MAILS
                this.mails.push(res.data.response);
            });
            
        };
    }
})

// COLLEGO ID 
app.mount('#root');