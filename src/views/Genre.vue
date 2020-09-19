<template>
    <div>
        <p>Hola que tal {{param}}</p>
    </div>
</template>

<script>
export default {
    name: 'Genre',
    data(){
        return{
        param: this.$route.params.name
        }
    },
    methods:{
    }
}
</script>