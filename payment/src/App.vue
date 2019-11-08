<template>
  <div id="app" class="antialiased text-gray-800">
    <div class="min-h-screen text-gray-800" style="background-color: #f3f3f3; font-family: 'Proza Libre', sans-serif;">
    <Navbar/>
    
    <img src="/img/paymentbg2.jpg" id="header-image" class="header-image" style="z-index: 10;" >
    
    <div class="ml-auto mr-auto w-1/2 p-8 pt-24" >

          <div class="shadow-md relative" style="margin-top: -227px; z-index: 30;">

              <div class="flex bg-white p-4">
                <div class="">
                  <img src="/img/greenwood.png" style="min-width: 150px;">
                </div>

                <div class="pl-4 pr-4">
                  <div class="uppercase text-xl font-semibold" style="font-family: 'Marcellus', serif;">Queenwood Golf Club</div>
                  <div class="text-sm pt-1" style="font-family: 'Marcellus', serif;">At Queenwood, members are the lifeblood of the club. We believe in developing a community which revolves around member satisfaction with a relaxed ambience - a place where our members can enjoy the finer aspects of life, alongside exhilarating golf.</div>
                </div>
              </div>

              <div class="flex  text-white bg-gold-dark" >
                <a href="#/"><div class="p-2 hover:bg-gold-light pl-4 pr-4"> <i class="fas fa-info-circle text-white mr-1"></i> View club </div></a>
                <a href="#/"><div class="p-2 hover:bg-gold-light pl-4 pr-4"> <i class="fas fa-table text-white mr-1"></i> Points matrix</div></a>
              </div>

          </div>

        <div class="pt-6">Let's choose the right points package for you. Please select the number of home and flexi points you would like to purchase. Remember, your home points can be
           used at your home club and your flexi points can be used at any club in our premium club network.</div>



        <div class="flex mt-4">
          <div class="flex ml-auto mr-0 shadow-md" style="width: 287px;">
            <input class="mr-0 p-2 pl-3 pr-3 bg-white  text-gray-800" placeholder="Have a promo code?" spellcheck="false" autocomplete="off" autocorrect="off" style="border-width: thin;">
            <a href="#/"><div class="p-2 pr-3 pl-3 text-gold-dark min-h-full" style="border-width: thin; border-left:none;">Apply</div></a>
          </div>
        </div>

        <div class="bg-white text-gray-100 text-center shadow-md w-full" style="background-image: linear-gradient(rgba(21,26,47,0.5),rgba(21, 26, 47, 0.6)),url(/img/gc1.jpg);"> 
          
          <div class="flex justify-center mt-4 p-8 pt-10 pb-2">
            <div class="">
              <div class="text-xl text-white font-semibold tracking-wide uppercase">Premium 12 Month Flexible Membership</div>
              <div class="text-left mt-2"><i class="fas fa-check text-gold-dark mr-1"></i> Access our premium network of clubs</div>
              <div class="text-left mt-2"><i class="fas fa-check text-gold-dark mr-1"></i> Genuine membership benefits</div>
              <div class="text-left mt-2"><i class="fas fa-check text-gold-dark mr-1"></i> Use your points for up to 3 guests</div>
              <div class="text-left mt-2"><i class="fas fa-check text-gold-dark mr-1"></i> CONGU handicap</div>      
            </div>
            
            <div class="" style="margin-left: 195px;">
              <div class="text-4xl leading-none pt-1">£1199</div>
              <div class="">Finance plan available</div>
            </div>
          </div>

          <div id="sliderHelp" class="relative box p-1 text-gold-dark bg-gray-100 opacity-1" style="left: 435px; width: 170px; transition: opacity 0.5s; -webkit-transition: opacity 0.5s;">Adjust your points</div>
          <div class="flex items-center p-8 pt-0 mt-6 pr-12 pl-8 font-semibold text-gray-400">

            <div class="text-center pr-4 uppercase clearfix whitespace-no-wrap"><div id="homePoints" class="pl-2 inline text-gray-300">80</div> Home</div>
            <input type="range" min="50" max="90" value="80" class="slider" id="pointsSlider" oninput="updatePoints(this.value)" onchange="updatePoints(this.value)">
            <div class="text-center pl-4 uppercase clearfix whitespace-no-wrap"><div id="flexiPoints" class="pl-2 inline text-gray-300">20</div> Flexi</div>
  
          </div>

        </div>
      
        <div class="flex mt-16 mb-2">
          <div class="w-1/2">Been referred by another PlayMoreGolf Member? You can both receive 20 free home points!</div>
          <input class="w-1/2 mr-0 p-2 pl-3 ml-5 pr-3 bg-white shadow-md text-gray-800" placeholder="Referral's email address" spellcheck="false" autocomplete="off" autocorrect="off" style="border-width: thin; max-height: 40px;">
        </div>


        <a href="#/"><div class="hover:bg-gold-light p-2 text-center border-gold-dark bg-gold-dark text-white tracking-wide shadow-md">Confirm & Pay</div></a>

      </div>

    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  name: 'app',
  components: {
    Navbar
  },
  data() {
    return {
      overlay : false,
      homePoints : "20",
      awayPoints : "20",
    }
  }
}
</script>

<style src="./assets/tailwind.css"></style>
