
<template>
<div>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
    <meta name="generator" content="Hugo 0.83.1">
    <title>gestion_lsi</title>

    <link rel="canonical" href="https://getbootstrap.com/docs/5.0/examples/starter-template/">

    

    <!-- Bootstrap core CSS -->
<link href="/docs/5.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">

    <!-- Favicons -->
<link rel="apple-touch-icon" href="/docs/5.0/assets/img/favicons/apple-touch-icon.png" sizes="180x180">
<link rel="icon" href="/docs/5.0/assets/img/favicons/favicon-32x32.png" sizes="32x32" type="image/png">
<link rel="icon" href="/docs/5.0/assets/img/favicons/favicon-16x16.png" sizes="16x16" type="image/png">
<link rel="manifest" href="/docs/5.0/assets/img/favicons/manifest.json">
<link rel="mask-icon" href="/docs/5.0/assets/img/favicons/safari-pinned-tab.svg" color="#7952b3">
<link rel="icon" href="/docs/5.0/assets/img/favicons/favicon.ico">
<meta name="theme-color" content="#7952b3">
    
    <!-- Custom styles for this template -->
    <link href="starter-template.css" rel="stylesheet">
  </head>
  <body >
  

  <main>
<div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light ">
    <div class="col-md-5 p-lg-5 mx-auto my-5">
      <h1 class="display-4 fw-normal">Welcome to MYLSI</h1>
      <p class="lead fw-normal"> </p>
    </div>
    <div class="product-device shadow-sm d-none d-md-block"></div>
    <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
  </div>
  </main>

      
  </body>

<footer  class="pt-4 my-md-5 pt-md-5 border-top ">
    <div class="row" style="background-color:  hsla(50, 33%, 25%, .75)">
     
      <div class="col-2"></div>
      <div class="col-6 col-md">
        <h5>Resources</h5>
        <ul class="list-unstyled text-small">
          <li class="mb-1"><a class="link-secondary text-decoration-none text-white" href="#">Resource</a></li>
          <li class="mb-1"><a class="link-secondary text-decoration-none text-white" href="#">Resource name</a></li>
          <li class="mb-1"><a class="link-secondary text-decoration-none text-white" href="#">Another resource</a></li>
          <li class="mb-1"><a class="link-secondary text-decoration-none text-white" href="#">Final resource</a></li>
        </ul>
      </div>
      <div class="col-6 col-md">
        <h5>LIENS UILS</h5>
        <ul class="list-unstyled text-small">
          <li class="mb-1"><a class="link-secondary text-decoration-none text-white" href="http://www.fstt.ac.ma/Portail/formation/formation-initiale/cycle-ingenieur">SITE DE FSTT</a></li>
          <li class="mb-1"><a class="link-secondary text-decoration-none text-white" href="http://www.uae.ma/website/">SITE DE L'UNEVERSITE </a></li>
          <li class="mb-1"><a class="link-secondary text-decoration-none text-white" href="http://www.enssup.gov.ma/en">ENSEIGNEMENT SUPERIEUR</a></li>
        </ul>
      </div>
    </div>
  </footer>

</html></div>
</template>

  






<script>
import {mapGetters} from 'vuex'

export default {
    name: 'Home',

  data(){
return{
}},

computed:{
    ...mapGetters(['user'])
}   
}
</script>





<style>
      .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }
    </style>