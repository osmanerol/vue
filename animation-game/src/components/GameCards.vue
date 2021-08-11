<script>
    import Card from './Card.vue';
    import DefaultCard from './DefaultCard.vue';

    export default {
        name: 'GameCards',
        components: {
            Card,
            DefaultCard
        },
        data() {
            return {
                cardList: [
                    { id: 1, component: 'card', image: '/src/assets/card-1.jpg'},
                    { id: 2, component: 'card', image: '/src/assets/card-2.jpg'},
                    { id: 3, component: 'card', image: '/src/assets/card-3.jpg'},
                    { id: 4, component: 'card', image: '/src/assets/card-4.jpg'},
                    { id: 5, component: 'card', image: '/src/assets/card-5.jpg'},
                ],
                selectedCard: null,
                answer: {},
                activeCard: 'default-card'
            }
        },
        created() {
            const answer = Math.ceil(Math.random() * this.cardList.length);
            this.answer = this.cardList[answer-1];
        },
        methods: {
            showCard(answer){
                if(this.selectedCard == null) {
                    alert('Once kart seciniz.')
                }
                else {
                    this.activeCard = answer.component;
                    setTimeout(() => {
                        if(answer.id == this.selectedCard){
                            this.$emit('activeCorrectEvent', 'Celebrate');
                        }
                        else {
                            this.$emit('activeCorrectEvent', 'Failure');
                        }
                    }, 1000)
                }
            }
        }
    }
</script>


<template>
    <div class="game-area">
        <h1 class="title">Kedi <span>Nerede</span><strong>?</strong></h1>
        <h4 class="description">Açık kartlardan birini seçtikten sonra kapalı olan karta tıklayınız.</h4>
        <div class="container">
            <transition-group name="rotate-all" class="card-container" appear>
                <card 
                    v-for="item in cardList" 
                    :key="item" 
                    :card="item" 
                    @click.native="selectedCard = item.id"
                    :class="{ shadow : selectedCard == item.id }"
                />
            </transition-group>
        </div>
        <div class="container">
            <transition name="rotate" mode="out-in">
                <component :is="activeCard" @click.native="showCard(answer)" :card="answer"></component>
            </transition>
        </div>
    </div>
</template>

<style scoped>
    .title{
        text-align: center;
        color: rosybrown;
    }
    .title span{
        color: mediumpurple;
    }
    .title strong{
        color: darkred;
    }
    .description{
        text-align: center;
        color: gray;
    }
    .container, .card-container{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 50px;
    }
    .shadow{
        box-shadow: 0px 5px 48px #30969f! important;
        transition: box-shadow .5s;
    }
    /* acik kartlarin animasyonlari icin gerekli classlar */
    .rotate-all-enter{ }
    .rotate-all-enter-active{
        animation: rotate-all ease-in-out 2s forwards;
    }
    .rotate-all-leave{ }
    .rotate-all-leave-active{ }

    @keyframes rotate-all {
        from{
            transform: rotateY(0);
        }
        to{
            transform: rotateY(1080deg);
        }
    }
    
    /* kapali kartlarin animasyonlari icin gerekli classlar */
    .rotate-enter{ }
    .rotate-enter-active{
        animation: rotate-in ease-in-out .5s forwards;
    }
    .rotate-leave{ }
    .rotate-leave-active{
        animation: rotate-out ease-in-out .5s forwards;
     }

    @keyframes rotate-in {
        from{
            transform: rotateY(90deg);
        }
        to{
            transform: rotateY(0deg);
        }
    }

    @keyframes rotate-out {
        from{
            transform: rotateY(0deg);
        }
        to{
            transform: rotateY(90deg);
        }
    }
</style>