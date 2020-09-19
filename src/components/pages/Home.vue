<!--vbase-->

<template>
  <div>
  
        
    <h1 class="mt-5 text-muted"> Bienvenue sur ma single page<strong class="text-success"> VueCli </strong></h1>
    <hr><br>

<div class="row">
<div class="col-sm-4">

<Card title="Sports"             
 content="Mes sports pratiqués"
  image="sport.jpg"                     
  href="/posts/Sport"/><!--mon component card avec ces props -->
</div>
<div class="col-sm-4">
  <Card title="Photos"
   content="Mes plus belles photos"
    image="photo.jpg"
    href="/posts/Photo"/> <!--mon component card -->
</div>
<div class="col-sm-4">
<Card title="Voyages"
 content="Mes plus beaux voyages"
  image="voyage.jpg"
  href="/posts/Voyage"/><!--mon component card -->
</div>
</div>

    </div>

  
</template>

<script>

//on va importer notre  composant dans notre fichier app.vue
import Card from "@/components/Card"
export default {               //components:declaration des composants a utiliser
                 //data:declaration des variables
     components: {              //mounted: code a executer au chargement du composant        
      Card,                    
     },                          //mounted: code a executer au chargement du composant                          //methods:toute les fonctions necessaires pour l'execution de mon composant

};
</script>

<style>

</style>
