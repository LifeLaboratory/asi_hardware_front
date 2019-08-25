<script>
    import Api from '../utils/Api';
    import store from '../store'
    import LunchProfile from '../components/lunch/ActiveLunch'
    import LunchPending from "../components/lunch/LunchPending";
    import LunchStart from "../components/lunch/StartSearch"
    import LunchStatus from "../enums/LunchStatus";
    import Lunch from "../models/Lunch";
    import Mocks from "../utils/Mocks";
    import { async } from 'q';

    export default {
        name: 'Lunch',
        components: {
            LunchPending,
            LunchStart,
            LunchProfile
        },
        data: () => {
            return {
                lunchStatus: LunchStatus
            }
        },
        mounted: () => {
            Api.getProfile(3).then((user) => store.commit('setUser', user)).catch(e => console.error(e))
            Api.getActiveLunch().then((lunch) => {store.commit('setLunch', lunch)}).catch(e => console.error(e))
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
            },
            
            sendStatus: async (status) => {
                await Api.putLuch(status)
                store.commit('setLunch', null)
            }
        }
    }
</script>
<template>
<div>
    <Header />

    <div class="page">
        <div v-if="lunch">
            <div v-if="lunch.status === lunchStatus.pending">
                <div class="lunch-step step-1">
                    <LunchPending />
                    <button v-on:click="sendStatus('declined')">Остановить поиск</button>
                </div>
            </div>
            <div v-if="lunch.status === lunchStatus.approved">
                <LunchProfile :lunch="lunch"/>
                <div class="lunch-step__buttons"> 
                    <button class="button--green" v-on:click="sendStatus('finished')"> встреча состоялась </button>
                    <button class="button--red" v-on:click="sendStatus('declined')"> отклонить </button>
                </div>
            </div>
        </div>
        <div v-if="!lunch">
            <div class="lunch-step step-0">
                <LunchStart />
                <button v-on:click="onClick()">поиск</button>
            </div>
        </div>
    </div>
</div>
</template>