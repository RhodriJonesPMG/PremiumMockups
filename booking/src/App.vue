<template>
  <div id="app" class="antialiased text-gray-800" >
    <div class="min-h-screen" style="background-color: #e6e6e6">
      <Navbar/>
      <div>
          
      <img src="/img/golfcourse3.jpg" class="w-full object-cover shadow-xl" style="height: 550px;">

          <div class="relative mb-10 ml-0 max-w-2xl pt-3 z-10 ml-auto mr-auto shadow-xl  overflow-hidden" style="background-image: linear-gradient(rgba(255, 255, 255, 0.70),rgba(255,255,255, 1), rgba(255,255,255,1)); font-family: 'EB Garamond', serif; margin-top: -164px;" >
            
            <div class=""  style="">
              <div class="float-left p-2 pt-0 ml-5 inline font-semibold tracking-wide w-auto text-2xl border-b-2 border-red-800"><span class="pr-2">Wentworth Golf Club</span></div> 
              <div class="float-right uppercase text-gray-600 uppercase tracking-widest text-base font-sans pr-6 pt-2"><div class="text-red-800 inline">&bull;</div> Home</div>
              <br>
              <div class="p-5 mt-6 pb-3">Whether the rhododendrons are blooming along the sweeping driveway or the Virginia creeper dressing the castellated Clubhouse in shades of crimson and red, a timeless experience awaits your arrival at Wentworth, where you can't help but feel at home.</div>
           </div>

            <div class="p-5" style="background-color: #f6f6f6">

              <div class="flex justify-center">

                <div class="text-center pl-3 pr-3">
                    <div class="text-2xl font-bold text-red-800">8.3</div> 
                    <div>miles away</div>
                </div>

                <div class="text-center pl-3 pr-3">
                  <div class="text-2xl font-bold text-red-800">7.2</div> 
                  <div>average price</div>
                </div>

                <div class="text-center pl-3 pr-3">
                    <div class="text-2xl font-bold text-red-800">6-10</div> 
                    <div>price range</div>
                </div>

                <div class="text-center pl-3 pr-3">
                    <div class="text-2xl font-bold text-red-800">2<sup class="text-sm">nd</sup></div> 
                    <div>ranking</div>
                </div>

                <a href="#/">
                  <div class="mt-5 pl-10">
                    <span class="bg-red-800 p-2 pl-4 pr-4 text-white font-bold uppercase tracking-wider" >Select</span>
                    <span class="p-2 bg-gray-800 text-white" ><i class="fas fa-caret-right"></i></span>
                  </div>
                </a>
            </div>

            </div>
          </div>

          <div v-for="club in otherClubs">
            <ClubCard :club="club"/>
          </div>

      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import ClubCard from './components/ClubCard'

export default {
  name: 'app',
  components: {
    Navbar,
    ClubCard
  },
  data() {
    return {
      otherClubs: [
        {
          name : 'Garnant Golf Course',
          desc : 'With tees to suit golfers of all abilities Garnant Park Golf Club is a truly enjoyable test of golf in a stunning area of natural beauty. It’s easy to forget about a double bogey or a three putt whilst you’re overlooking the idyllic Black Mountains of the Brecon Beacons with native birds of prey soaring in the skies above.',
          distance : 10.3,
          averagePrice : 6.4,
          priceRange : '6-8',
          ranking : '1',
          sup : 'st',
          image : '/img/3.jpg',
        },
        {
          name : 'Langland Bay Golf Club',
          desc : 'Along with a perfectly maintained course, today’s players have a right to expect a complete golfing experience that goes beyond a simple 18 holes. Langland Bay has a long tradition of meeting this demand in every way, in a setting and style that has earned a long-held reverence in British golfing circles.',
          distance : 2.1,
          averagePrice : 7.1,
          priceRange : '5-8',
          ranking : '3',
          sup : 'rd',
          image : '/img/1.jpg',
        },
        {
          name : 'Centurion Club',
          desc : 'At Centurion Club, members are the lifeblood of the club. We believe in developing a community which revolves around member satisfaction with a relaxed ambience - a place where our members can enjoy the finer aspects of life, alongside exhilarating golf.',
          distance : 12.5,
          averagePrice : 9.1,
          priceRange : '8-12',
          ranking : '4',
          sup : 'th',
          image : '/img/4.jpg',
        },
      ]
    }
  }
}
</script>

<style src="./assets/tailwind.css"></style>
