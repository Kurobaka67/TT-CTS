<template>
    <div class="flex justify-content-center h-screen">
        <Card class="w-11 main-layout" v-if="player">
            <template #title>
                <h1 class="title">{{ player.nom }}</h1>
            </template>
            
            <template #content>
                <Panel header="AGR">
                    <ul>
                        <li>
                            Licence : {{player.id}}
                        </li>
                        <li>
                            Classement : {{player.agr}}
                        </li>
                    </ul>
                </Panel>
                <Divider />
                <Panel header="LGETT">
                
                </Panel>
            </template>

            <template #footer>
                <Button icon="pi pi-chevron-left" class="p-button-rounded button-dark" @click="goToPlayer"/>
            </template>
        </Card>
        <Card class="w-11 main-layout" v-else>
            <template #content>
                <ProgressSpinner style="width:50px;height:50px" strokeWidth="8" fill="var(--primary-color)" animationDuration=".5s" aria-label="Custom ProgressSpinner"/>
            </template>
        </Card>
    </div>
</template>

<script>
import PlayersService from '../services/PlayersService';

export default {
    props:['id'],
    data() {
        return {
            player: null,
        }
    },
    service: null,
    created() {
        this.service = new PlayersService();
    },
    mounted() {
        this.service.getplayerById(this.id).then(data => {
            this.player = data;
        });
    },
    methods: {
        goToPlayer() {
            this.$router.push('/player');
        }
    }
}
</script>