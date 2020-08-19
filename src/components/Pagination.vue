<template>
    <!-- PAGINATION -->
    <div class="abs-center">
        <ul class="pagination ">
            <li class="page-item">
                <button class="page-item" v-on:click="downPage">Previous</button>
            </li>
            <li class="page-item active">
                <a class="page-link" href="">{{this.$store.state.page}} </a>
            </li>
            <li class="page-item disabled">
                <button class="page-item" v-on:click="upPage">Next</button>
            </li>
        </ul>
    </div>
    <!-- end pagination -->

</template>

<script>
export default {
    name: 'Pagination',
    data(){
        return{
            page: this.$store.state.page,
            total_page: 500
        }
    },

    methods:{
        upPage(){
            this.$store.commit('UP_PAGE');
            this.$store.dispatch("GET_MOVIES", this.$store.state.page);
        },

        downPage(){
            this.$store.commit('DOWN_PAGE');
            this.$store.dispatch("GET_MOVIES", this.$store.state.page);
        } 
    }
}
</script>