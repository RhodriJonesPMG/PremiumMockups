<template>
  <div id="app" class="antialiased text-gray-800">
    <div class="min-h-screen text-gray-800" style="background-color: #f3f3f3; font-family: 'Proza Libre', sans-serif;">
    <Navbar/>
       
    <div class="ml-auto mr-auto w-1/2 p-8 pb-0 pt-24 z-20">

      <div class="shadow-lg mt-24" >
              <div class="bg-white">
                <img class="object-cover w-full min-w-full" src="/img/premiumclub.jpg" style="max-height: 350px;">
                
                <div class="flex text-gray-800 p-5 pl-6">
                  <div>
                    <div class="text-gray-700 uppercase font-bold tracking-wide">Home Club</div>
                    <div class="">Queenwood Golf Club</div>
                  </div>

                  <div class="ml-8">
                    <div class="text-gray-700 uppercase font-bold tracking-wide">Duration</div>
                    <div class="">12 Months</div>
                  </div>

                  <div class="ml-8">
                    <div class="text-gray-700 uppercase font-bold tracking-wide">Home Points</div>
                    <div class="">70</div>
                  </div>

                  <div class="ml-8">
                    <div class="text-gray-700 uppercase font-bold tracking-wide">Flexi Points</div>
                    <div class="">30</div>
                  </div>

                  <div class="ml-8">
                    <div class="text-gray-700 uppercase font-bold tracking-wide">Promo Code</div>
                    <div class="">48Hour</div>
                  </div>

                  <div class="ml-8">
                    <div class="text-gray-700 uppercase font-bold tracking-wide">Price</div>
                    <div class="">£1200</div>
                  </div>
                </div>

              </div>
      </div>

    </div>

    <div class="ml-auto mr-auto w-1/2 p-8 mt-4 pt-2 z-20">

      <div class="shadow-lg" >
          <div class="bg-white">
            
            <div class="text-gray-800 p-5 pl-6">

              <div class="flex">
                <div>
                  <div class="text-gray-700 uppercase font-bold tracking-wide">Card details</div>
                  <div class="flex mt-2">
                    <input class="p-2 pl-3 text-sm" placeholder="1234 1234 1234 1234 " style="border-width: thin; width: 170px;">
                    <input class="ml-2 p-2 pl-3 text-sm" placeholder="MM / YY" style="border-width: thin; width: 100px;">
                    <input class="ml-2 p-2 pl-3 text-sm" placeholder="CVC " style="border-width: thin; width: 100px;">
                  </div>
                </div>

                <div class="ml-8">
                  <div class="text-gray-700 uppercase font-bold tracking-wide">Personal details</div>
                  <div class="flex mt-2">
                    <input class="p-2 pl-3 text-sm" placeholder="Name on card " style="border-width: thin;">
                    <input class="ml-2 p-2 pl-3 text-sm" placeholder="Postcode" style="border-width: thin;">
                  </div>
                </div>
              </div>

             
            </div>

            <a href="#/">
              <div class="bg-gold-dark hover:bg-gold-light text-center p-2 text-white">
                <i class="fas fa-lock mr-1 "></i> Pay securely online
              </div>
            </a>

          </div>
      </div>

      


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
      package : "1",
    }
  }
}
</script>

<style src="./assets/tailwind.css"></style>
