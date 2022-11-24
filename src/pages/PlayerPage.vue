<template>
    <div class="flex justify-content-center h-screen">
        <Card class="w-full lg:w-11 main-layout">
            <template #content>
                <DataView :value="players" :layout="layout" :paginator="true" :rows="9" :sortOrder="sortOrder" :sortField="sortField">
                    <template #header>
                        <div class="grid grid-nogutter">
                            <span class="col-5"></span>
                            <span class="p-input-icon-left col-2">
                                <i class="pi pi-search" />
                                <InputText type="search" v-model="textSearch" placeholder="Rechercher" />
                            </span>
                            <div class="col-5" style="text-align: right">
                                <DataViewLayoutOptions v-model="layout" />
                            </div>
                        </div>
                    </template>

                    <template #list="slotProps">
                        <div class="col-12 ">
                            <div class="player flex align-content-start" @click="goToDetail(slotProps.data.id)">
                                <p>{{slotProps.data.nom}}</p>
                            </div>
                        </div>
                    </template>

                    <template #grid="slotProps">
                        <div class="col-12 md:col-4">
                            <div class="card player" @click="goToDetail(slotProps.data.id)">
                                <p>{{slotProps.data.nom}}</p>
                            </div>
                        </div>
                    </template>
                </DataView>
            </template>
        </Card>
    </div>
</template>

<script>
import PlayersService from '../services/PlayersService';

export default {
    data() {
        return {
            players: null,
            layout: 'grid',
            sortKey: null,
            sortOrder: null,
            sortField: null,
            textSearch: null
        }
    },
    service: null,
    created() {
        this.service = new PlayersService();
    },
    watch: {
        textSearch(val, oldVal) {
            if(val != oldVal){
                this.search(val);
            }
        }
    },
    mounted() {
        this.service.getPlayers().then(data => this.players = data);
    },
    methods: {
        goToDetail(id) {
            this.$router.push(`/player-detail/${id}`);
        },
        search(text) {
            if(this.textSearch){
                this.service.searchPlayers(text).then(data => this.players = data)
            }
            else {
                this.service.getPlayers().then(data => this.players = data);
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.player {
    cursor: pointer;
}
</style>