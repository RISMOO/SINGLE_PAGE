<template>
  <div id="app">
          <b-navbar type="dark" variant="dark">
    <b-navbar-brand href="#">Rismo</b-navbar-brand>


      <b-navbar-nav >
        <b-nav-item href="/">Accueil</b-nav-item>
        <b-nav-item href="/about">A propos</b-nav-item>
      
      </b-navbar-nav>
   
  </b-navbar>
    <div class="container">
    <router-view></router-view><!-- router se charge de recuperere le composant-->
  
  </div>
  </div>
</template>

<script>

export default {               //components:declaration des composants a utiliser
  name: 'App',                 //data:declaration des variables
                  //mounted: code a executer au chargement du composant                          //methods:toute les fonctions necessaires pour l'execution de mon composant
};
</script>

<style>

</style>
