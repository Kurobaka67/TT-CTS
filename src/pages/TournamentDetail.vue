<template>
    <div class="flex justify-content-center h-screen" :class="[theme=='main-dark'?'light-text':'dark-text']">
        <div class="w-11 main-layout ">
            <h1>Détail de la compétition</h1>

            <h3><i class='bx bxs-time'></i> Date et heure</h3>
            <p>Le {{ date }} à {{ data.extendedProps.heure }}</p>

            <h3><i class='bx bx-map' ></i> Lieu</h3>
            <p v-if="data.extendedProps.lieu == '11 route d\'Oberhausbergen'">A domicile</p>
            <p v-else>En extérieur : <button @click="showMap">{{ data.extendedProps.lieu }}</button></p>
            <iframe v-show="isMapShow" id="miFrame" :src="mapUrl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <Button icon="pi pi-chevron-left" class="p-button-rounded button-dark" :class="[theme=='main-dark'?'button-light':'button-dark']" @click="goToList"/>
        </div>
    </div>
</template>

<script>
import dayjs from 'dayjs';


export default {
    props: ['theme'],
    data() {
        return {
            data: null,
            mapUrl: null,
            isMapShow: false,
            date: null
        }
    },
    created() {
        require('dayjs/locale/fr')
        this.data = JSON.parse(sessionStorage.getItem('event'));
        this.mapUrl = String.prototype.concat("https://www.google.com/maps?q=", this.data.extendedProps.lieu, "&output=embed");
        this.date = dayjs(this.data.start).locale("fr").format('dddd D MMMM, YYYY');
        console.log(this.data);
    },
    methods: {
        showMap(){
            this.isMapShow = true;
        },
        goToList() {
            this.$router.push('/list');
        }
    }
}
</script>