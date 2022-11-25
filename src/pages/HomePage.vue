<template>
    <div class="flex justify-content-center home-page min-h-screen">
        <Card class="w-full lg:w-9 main-layout">
            <template #header>
                <img src="../../public/images/img1.png" alt="" >
            </template>
            <template #title>
                <h1 class="title">CS CTS TENNIS DE TABLE</h1>
            </template>
            <template #content>
                <div class="flex flex-column align-items-start">
                    <h4><i class='bx bxs-calendar'></i> Horaires</h4>
                    <div class="card-content flex flex-column align-items-start">
                        <p><i class='bx bx-chevron-right'></i> Lundi : de 18h à 20h pour les jeunes et de 20h à 22h pour les adultes (Loisir - Entraînement)</p>
                        <p><i class='bx bx-chevron-right'></i> Mercredi : de 20h à 22h (Compétition - entraînement)</p>
                        <p><i class='bx bx-chevron-right'></i> Vendredi : de 20h à 22h (Loisir - Entraînement)</p>
                    </div>

                    <h4><i class='bx bxs-contact'></i> Contact</h4>
                    <div class="card-content flex flex-column align-items-start">
                        <p><i class='bx bx-mobile'></i> Compétition: Adi 06 81 64 85 89</p>
                        <p><i class='bx bx-mobile'></i> Entraîneur (jeunes): Pierre 06 89 08 82 93</p>
                        <p><i class='bx bx-envelope' ></i> : contact@tennisdetablects.fr</p>
                    </div>

                    <h4><i class='bx bx-map'></i> Plan d'accès</h4>
                    <div class="card-content">
                        <h5>Salle gymnase ST. Florent 11 route d'oberhausbergen (entrée côté tram)</h5>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1319.475298802929!2d7.718286958149344!3d48.591644768886596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4796c935113541f3%3A0x7c7b056d6ab0213b!2sGymnase%20Saint%20Florent!5e0!3m2!1sfr!2sfr!4v1668005381011!5m2!1sfr!2sfr"  style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </template>
        </Card>
    </div>
</template>

<script>
export default {
}
</script>