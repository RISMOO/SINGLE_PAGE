
<!--vbase-->
<template>
    
<div>
  <b-card
   :title="title" 
   :img-src="'./images/'+ image"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      {{content}}
    </b-card-text>

    <b-button :href="href" variant="primary">Voir</b-button><!--v bind-->
  </b-card>
    </div>
</template>

<script>
    export default {  //pour utiliser mes propriétés je vais utilsé v-props propriété reactive
        props: {
            title: {
                type: String,
                default:"" 
            },
            content: {
                type: String,
                default:""
            },
            image: {
                type: String,
                default:""


            },
            href:{

                 type: String,
                default:""

            }
        },
    

    mounted () {

//sera executé au chargement du composant
console.log({title:this.title, content:this.content, image:this.image})
    },
    };
</script>

<style lang="scss" scoped>

</style>