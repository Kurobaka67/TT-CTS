<template>
    <VueSidebarMenu :isMenuOpen="true" :menuItems="menu" :menuTitle="'Menu'" :menuIcon="'bx-question-mark'" :isSearch="false" />
</template>

<script>
export default {
    data() {
        return {
            menu: [
                {
                    link: window.location.origin+'/#/',
                    name: 'Accueil',
                    tooltip: 'Accueil',
                    icon: 'bx bxs-home'
                },
                {
                    link: window.location.origin+'/#/list',
                    name: 'Compétitions',
                    tooltip: 'Compétitions',
                    icon: 'bx bxs-trophy'
                },
                {
                    link: window.location.origin+'/#/player',
                    name: 'Joueurs',
                    tooltip: 'Joueurs',
                    icon: 'bx bxs-group'
                }
            ]
        }
    }
}
</script>