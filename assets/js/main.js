const {
    createApp
} = Vue
createApp({
    data() {
        return {
            me: {
                avatar: '_io',
                name: 'Sofia'
            },

            userToBeFound: '',

            //contatto attivo per vedere i messaggi
            activeContact: 0,

            //stringa che contiene il messaggio al mio contatto
            newMsgToSend: '',

            contacts: [
                {
                    id: 1,
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [{
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [{
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [{
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: '_4',
                    visible: true,
                    messages: [{
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: '_5',
                    visible: true,
                    messages: [{
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                    }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: '_6',
                    visible: true,
                    messages: [{
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                    }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: '_7',
                    visible: true,
                    messages: [{
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                    }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: '_8',
                    visible: true,
                    messages: [{
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received'
                    }
                    ],
                }
            ],

        }
    },

    /*
       Milestone 2
    ● Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
    ● Click sul contatto mostra la conversazione del contatto cliccato
    
    */

    methods: {
        showActiveContact(i) {
            console.log(this.activeContact);
            console.log(i);
            this.activeContact = i;
            console.log(this.activeContact);
            console.log(i);
            return true;

        },



        /*
       Milestone 3
       ● Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando
       “enter” il testo viene aggiunto al thread sopra, come messaggio verde
       ● Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà
       un “ok” come risposta, che apparirà dopo 1 secondo.
    
    */

        sendMessage() {

            // imposto orario messaggio
            let DateTime = luxon.DateTime;
            const now = DateTime.now().toLocaleString(DateTime.DATETIME_SHORT);
            //console.log(now);
            //console.log(this);


            this.contacts[this.activeContact].messages.push({
                date: now,
                message: this.newMsgToSend,
                status: 'sent'
            });

            this.newMsgToSend = '';

            // console.log(newMsgToSend);

            setTimeout(() => {
                let DateTime = luxon.DateTime;
                const twoSecLater = DateTime.now().toLocaleString(DateTime.DATETIME_SHORT).plus({ second: 2 }).toFormat('HH:mm');

                this.contacts[this.activeContact].messages.push({
                    date: twoSecLater,
                    message: 'ok',
                    status: 'received'
                });
            }, 2000);

        },

        /* 
            Milestone 4
            ● Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)
        */
        searchUser() {

            console.log(this.userToBeFound);
            console.log(this.contacts[0].name.includes(this.userToBeFound));

            for (let i = 0; i < this.contacts.length; i++) {

                if (this.userToBeFound === '') {

                    this.contacts[i].visible = true;

                } else {

                    if (this.contacts[i].name.toLowerCase().includes(this.userToBeFound.toLowerCase())) {

                        //console.log(this.contacts[i].name);

                    } else {

                        this.contacts[i].visible = false;
                    }
                }

            }

        },








    },









}).mount('#app')
