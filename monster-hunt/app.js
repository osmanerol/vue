new Vue({
    el: '#app',
    data: {
        playerHeal : 100,
        monsterHeal : 100,
        gameIsOn : false,
        attackMultiple : 10,
        specialAttackMultiple : 25,
        healUpMultiple : 20,
        monsterAttackMultiple : 15,
        logText : {
            attack : "Oyuncu Atağı : ",
            specialAttack : "Özel Oyuncu Atağı : ",
            monsterAttack : "Canavar Atağı : ",
            healUp : "İlkyardım Atağı : ",
            giveUp : "Oyuncu Pes Etti"
        },
        logs : []
    },
    methods: {
        startGame() {
            this.gameIsOn = true;
        },
        attack() {
            const point = Math.ceil(Math.random() * this.attackMultiple);
            this.monsterHeal -= point;
            this.addToLog({ turn : 'p', text : `${this.logText.attack} ${point}`});
            this.monsterAttack();
        },
        specialAttack() {
            const point = Math.ceil(Math.random() * this.specialAttackMultiple);
            this.monsterHeal -= point;
            this.addToLog({ turn : 'p', text : `${this.logText.specialAttack} ${point}`});
            this.monsterAttack();
        },
        healUp() {
            const point = Math.ceil(Math.random() * this.healUpMultiple);
            this.playerHeal += point;
            this.addToLog({ turn : 'p', text : `${this.logText.healUp} ${point}`});
            this.monsterAttack();
        },
        giveUp() {
            this.playerHeal = 0;
            this.addToLog({ turn : 'p', text : `${this.logText.giveUp}`});
        },
        monsterAttack() {
            const point = Math.ceil(Math.random() * this.monsterAttackMultiple);
            this.playerHeal -= point;
            this.addToLog({ turn : 'm', text : `${this.logText.monsterAttack} ${point}`});
        },
        addToLog(log) {
            this.logs.push(log);
        }
    },
    watch: {
        playerHeal(value) {
            if(value <= 0) {
                this.playerHeal = 0;
                if(confirm("Oyunu kaybettin. Tekrar denemek ister misin?")) {
                    this.playerHeal = 100;
                    this.monsterHeal = 100;
                    this.logs = [];
                }
            }
            else if(value >= 100) 
                this.playerHeal = 100;
        },
        monsterHeal(value) {
            if(value <= 0) {
                this.monsterHeal = 0;
                if(confirm("Oyunu kazandım. Tekrar denemek ister misin?")) {
                    this.playerHeal = 100;
                    this.monsterHeal = 100;
                    this.logs = [];
                }
            }
        }
    },
    computed: {
        playerProgress() {
            return {
                width : this.playerHeal + '%'
            };
        },
        monsterProgress() {
            return {
                width : this.monsterHeal + '%'
            }
        }
    }
})