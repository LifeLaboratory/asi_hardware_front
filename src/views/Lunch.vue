<script>
    import Api from '../utils/Api';
    import store from '../store'
    import LunchPending from "../components/lunch/LunchPending";
    import LunchStatus from "../enums/LunchStatus";
    import Lunch from "../models/Lunch";
    import Mocks from "../utils/Mocks";

    export default {
        name: 'Lunch',
        components: {
            LunchPending
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
                store.commit('setLunch', lunch)
            }
        }
    }
</script>
<template>
    <div class="search">
        <div v-if="lunch">
            <div v-if="lunch.status === lunchStatus.pending">
                Lunch is pending
            </div>
            <div v-if="lunch.status === lunchStatus.approved">
                <ActiveLunch lunch="lunch"/>
            </div>
        </div>
        <div v-if="!lunch">
            <div>
                <button v-on:click="onClick()" style="width:700px">Search</button>
            </div>
        </div>
    </div>
</template>