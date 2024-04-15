// CHECK 
console.log('JS VUE OK', Vue);

/* URL API */
const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';


/* ESTRAPOLO FUNZIONE DA VUE */
const { createApp } = Vue;


/* CREO VARIBILE E RICHIAMO LA FUNZIONE */
const app = createApp({


    /* NOME PAGINA */
    name: 'VueEmail',


    /* DATI DI BASE DA UTILIZZARE */
    data() {
        return {


            /* ARRAY A CUI AGGIURE LA LISTA EMAIL */
            mails: [],
        }
    },


    /* USO IL METODO CREATED PER FARE UNA CHIAMATA API ALL'AVVIO DELLA PAGINA  */
    created() {


        /* CICLO FOR PER RICHIAMRE 10 VOLTE API PER GENERARMI 10 EMAIL DIVERSE */
        for (let i = 0; i < 10; i++) {


            /* AXIOS */
            axios.get(endpoint).then((res) => {


                /* CONTROLLO RIPOSTA IN RES.DATA */
                console.log(res.data);


                /* RICHIAMO IL MIO ARRAY PER AGGIUNGERE A OGNI GIRO UN EMAIL DIVERSA */
                this.mails.push(res.data.response);
            });
        };
    }
})


/* COLLEGO ID  */
app.mount('#root');