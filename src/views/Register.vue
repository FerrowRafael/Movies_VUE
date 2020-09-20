<template>
    <div class="container register">
                <div class="row">
                    <div class="col-md-9 register-right">
                        
                        <form method="post" @submit.prevent="reg()" class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 class="register-heading">Sign Up</h3>
                                <div class="row register-form">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Nickname *" value="" id="username" v-model="user.username"/>
                                        </div>
                                        <div class="form-group">
                                            <input type="email" class="form-control" placeholder="Email *" value="" id="email" v-model="user.email"/>
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control" placeholder="Password *" value="" id="password" v-model="user.password"/>
                                        </div>
                                        <input type="submit" class="btnRegister" value="Register"/>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
</template>

<script>
export default {
    name: 'Register',
    data (){
      return {
        user: {
          username: '',
          password: '',
          email: ''
        }
      }
    },

     methods:{
      reg(){
        this.$store.dispatch('REGISTER', this.user);
      }
    }
}
</script>