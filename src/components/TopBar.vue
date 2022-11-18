<template>
    <div class="top-bar">
        <Dropdown v-model="selectedLigue" :options="ligue" :editable="true" @change="changeLigue"/>
    </div>
</template>

<script>
export default {
    props: ['theme'],
    emits: ["ligueSelecte"],
    data() {
        return {
            selectedLigue: null,
            ligue: [
                'AGR',
                'LAT'
            ]
        }
    },
    methods: {
        changeLigue() {
            this.$emit('ligueSelecte', this.selectedLigue);
        }
    }
}
</script>