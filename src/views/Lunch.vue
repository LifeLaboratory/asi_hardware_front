<script>
    import Api from '../utils/Api';
    import store from '../store'
    import LunchProfile from '../components/lunch/ActiveLunch'
    import LunchStart from "../components/lunch/StartSearch"
    import LunchStatus from "../enums/LunchStatus";
    import Lunch from "../models/Lunch";
    import Mocks from "../utils/Mocks";


    const fetchActive = () => {
        Api
            .getActiveLunch()
            .then((lunch) => {
                store.commit('setLunch', lunch)
            })
            .catch(e => console.error(e))
    }
    export default {
        name: 'Lunch',
        components: {
            LunchStart,
            LunchProfile
        },
        data: () => {
            return {
                lunchStatus: LunchStatus
            }
        },
        mounted: () => {
            setInterval(fetchActive, 3000)
        },
        computed: {
            lunch() {
                return this.$store.state.lunch
            },
        },
        methods: {
            onClick: async () => {
                const lunch = await Api.createLunch()
                store.commit('setLunch', lunch)
                fetchActive()
            },

            sendStatus: async (status) => {
                await Api.setLunchStatus(status)
                fetchActive()
            }
        }
    }
</script>
<template>
    <div>
        <Header/>

        <div class="page">
            <div v-if="lunch">
                <div v-if="lunch.status === lunchStatus.pending">
                    <div class="lunch-step step-1">
                        <div>
                            <div class="lunch-step__image">
                                <img src="@/assets/img/radar.png">
                            </div>
                            <div class="lunch-step__introduction">
                                Идет поиск собеседника
                            </div>
                        </div>
                        <button v-on:click="sendStatus(lunchStatus.declined)">Остановить поиск</button>
                    </div>
                </div>
                <div v-if="lunch.status === lunchStatus.approved">
                    <LunchProfile :lunch="lunch"/>
                    <div class="lunch-step__buttons">
                        <button class="button--green" v-on:click="sendStatus('finished')"> встреча состоялась</button>
                        <button class="button--red" v-on:click="sendStatus('declined')"> отклонить</button>
                    </div>
                </div>
            </div>
            <div v-if="!lunch">
                <div class="lunch-step step-0">
                    <LunchStart/>
                    <button v-on:click="onClick()">поиск</button>
                </div>
            </div>
        </div>
    </div>
</template>