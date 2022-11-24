<template>
    <TopBar @ligueSelecte="ligueSelecte"/>
    <div class="flex justify-content-center " >
        <div class="w-full lg:w-11">
            <FullCalendar :options="calendarOptions"/>
        </div>
    </div>
</template>

<script>
import FullCalendar from '@fullcalendar/vue3';
import listPlugin from '@fullcalendar/list';
import dayGridPlugin from '@fullcalendar/daygrid';
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
                plugins: [ interactionPlugin, listPlugin, dayGridPlugin  ],
                initialView: localStorage.getItem('calendarView'),
                eventClick: this.handleEventClick,
                locale: 'fr',
                buttonText: {
                    today: 'Aujourd\'hui',
                    month: 'Mois',
                    week: 'Semaines',
                    list: 'Liste'
                },
                headerToolbar: {
                    start: 'title',
                    center: '',
                    end: 'today prev,next dayGridMonth,dayGridWeek listMonth'
                },
            },
            data: null,
            ligueSelected: null,
        }
    },
    service: null,
    created() {
        this.service = new TournamentsService();
        this.loadTournaments();
        if(!localStorage.getItem('calendarView')){
            localStorage.setItem('calendarView', 'listMonth');
        }
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
            this.$router.push('/list-detail');
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