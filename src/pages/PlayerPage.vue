<template>
    <div class="h-screen">
        <div class="card">
        <DataView :value="players" :layout="layout" :paginator="true" :rows="9" :sortOrder="sortOrder" :sortField="sortField">
			<template #header>
                <div class="grid grid-nogutter">
                    <div class="col-12" style="text-align: right">
                        <DataViewLayoutOptions v-model="layout" />
                    </div>
                </div>
			</template>

			<template #list="slotProps">
				<div class="col-12">
					<div class="">
						<p>{{slotProps.data.prenom}} {{slotProps.data.nom}}</p>
					</div>
				</div>
			</template>

			<template #grid="slotProps">
				<div class="col-12 md:col-4">
					<div class=" card">
						<p>{{slotProps.data.prenom}} {{slotProps.data.nom}}</p>
                        <div class="flex ">
                            <p>Compétitions : </p>
                            <ul>
                                <li>AGR - {{ slotProps.data.agr?slotProps.data.agr:'N/A' }}</li>
                                <li>LGETT - {{ slotProps.data.lgett?slotProps.data.lgett:'N/A' }}</li>
                            </ul>
                        </div>
					</div>
				</div>
			</template>
		</DataView>
	</div>
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
        }
    },
    service: null,
    created() {
        this.service = new PlayersService();
    },
    mounted() {
        this.service.getPlayers().then(data => {
            this.players = data;
            });
    },
}
</script>