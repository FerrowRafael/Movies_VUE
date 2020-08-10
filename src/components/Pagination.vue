<template>
    <!-- PAGINATION -->
    <div class="abs-center">
        <ul class="pagination ">
            <li class="page-item">
                <button class="page-item" v-on:click="downPage">Previous</button>
            </li>
            <li class="page-item active">
                <a class="page-link" href="">{{this.page}} </a>
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
            page: 1,
            total_page: 500
        }
    },

    methods:{
        upPage(){
            if(this.page<=500){
                this.page = this.page + 1
                this.allmovies()
            }
        },

        downPage(){
            if(this.page>1){
                this.page = this.page - 1
                this.allmovies()
            }
        }
        
    }
}
</script>