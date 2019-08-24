<script>
    import Api from '../utils/Api';
    import store from '../store'
    import LunchPending from "../components/lunch/LunchPending";
    import LunchStatus from "../enums/LunchStatus";

    export default {
        name: 'Lunch',
        components: {
            LunchPending
        },
        data : () =>{
          return {
            lunchStatus: LunchStatus
          }
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
                Lunch approved
            </div>
        </div>
        <div v-if="!lunch">
            <div>
                <button v-on:click="onClick()" style="width:700px">Search</button>
            </div>
        </div>
    </div>
</template>