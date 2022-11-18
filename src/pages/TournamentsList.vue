<template>
    <TopBar @ligueSelecte="ligueSelecte"/>
    <div class="flex justify-content-center" >
        <div class="w-11">
            <FullCalendar :options="calendarOptions"/>
        </div>
    </div>
</template>

<script>
import FullCalendar from '@fullcalendar/vue3';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import TournamentsService from '../services/TournamentsService';
import TopBar from '../components/TopBar.vue';

export default {
    props: ['theme'],
    components: {
        FullCalendar,
        TopBar
    },
    data() {
        return {
            calendarOptions: {
                plugins: [ interactionPlugin, listPlugin ],
                initialView: 'listMonth',
                eventClick: this.handleEventClick,
                locale: 'fr',
                buttonText: {today: 'Aujourd\'hui'},
                dayHeaderClassNames  : 'darkest-color'
            },
            data: null,
            ligueSelected: null
        }
    },
    service: null,
    created() {
        this.service = new TournamentsService();
        this.loadTournaments();
    },
    watch: {
        ligueSelected(val, oldVal) {
            if(val != oldVal){
                this.loadTournaments();
            }
        }
    },
    methods: {
        handleEventClick: function(arg) {
            sessionStorage.setItem('event', JSON.stringify(arg.event));
            this.$router.push('/detail');
        },
        ligueSelecte(ligue) {
            this.ligueSelected = ligue;
            console.log(this.ligueSelected)
        },
        loadTournaments() {
            if(this.ligueSelected){
                this.service.getTournamentsFilter(this.ligueSelected).then(data => {
                    this.data = data;
                    this.data.forEach(d => {
                        d.title = d.ligue + " " + d.division + " - Poule: " + d.poule + " - " + d.equipe;
                    });
                    this.calendarOptions.events = this.data;
                });
            }else {
                this.service.getTournaments().then(data => {
                    this.data = data;
                    this.data.forEach(d => {
                        d.title = d.ligue + " " + d.division + " - Poule: " + d.poule + " - " + d.equipe;
                    });
                    this.calendarOptions.events = this.data;
                });
            }
        }
    }
}
</script>