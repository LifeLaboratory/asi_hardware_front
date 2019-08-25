<script>
    import Api from '../utils/Api';
    import store from '../store'
    import LunchProfile from '../components/lunch/ActiveLunch'
    import LunchPending from "../components/lunch/LunchPending";
    import LunchStart from "../components/lunch/StartSearch"
    import LunchStatus from "../enums/LunchStatus";
    import Lunch from "../models/Lunch";
    import Mocks from "../utils/Mocks";

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
            Api.getProfile(1).then((user)=> store.commit('setUser', user)).catch(e => console.error(e))
            Api.getActiveLunch().then((lunch)=> store.commit('setLunch', lunch)).catch(e => console.error(e))
        },
        computed: {
            lunch() {
                return this.$store.state.lunch
            }
        },
        methods: {
            onClick: async () => {
                const lunch = await Api.createLunch()
                store.dispatch('setLunch', lunch)
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
                    <button v-on:click="onClick()">Остановить поиск</button>
                </div>
            </div>
            <div v-if="lunch.status === lunchStatus.approved">
                <LunchProfile lunch="lunch"/>
            </div>
        </div>
        <div v-if="!lunch">

            <div class="lunch-step step-2">
                <LunchProfile lunch="lunch"/>
            </div>
            <!--<div class="lunch-step step-0">
                <LunchStart />
                <button v-on:click="onClick()">поиск</button>
            </div>-->
        </div>
    </div>
</div>
</template>