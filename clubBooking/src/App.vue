<template>
  <div id="app" class="antialiased text-gray-800" >
    <div class="min-h-screen bg-white" >
      <Navbar/>
      <div>
          <div class="flex">

              <div class="inline w-1/2 mt-24">
            
                <div class="text-gray-800 uppercase font-semibold text-xl tracking-wider p-20 pt-5" style="font-family: 'Julius Sans One', sans-serif;">A HERITAGE LIKE NO OTHER</div>
  
                <div class="pl-20 uppercase text-gray-800 font-thin text-6xl leading-none tracking-wide" style="font-family: 'EB Garamond', sans-serif;">
                  <div>Welcome To</div>
                  <div>Wentworth</div>
                </div>
  
                <div class="pl-20 pr-20 pt-10 leading-relaxed text-lg" style="font-family: 'EB Garamond', serif">
                    Whether the rhododendrons are in bloom along the sweeping driveway or the Virginia creeper is dressing the castellated Clubhouse in shades of crimson and red, a timeless experience awaits your arrival at Wentworth, where you can't help but feel at home.
                </div>
  
                <div class="pl-20 pr-20 pt-6 leading-relaxed text-lg" style="font-family: 'EB Garamond', serif">
                    In 1805, ‘Wentworths' was a private residence for the extended family of the Duke of Wellington, but it was the visionary George Tarrant, who established the house and grounds as the home of Wentworth Club in 1922.
                </div>
  
                <div class="pl-20 pr-20 pt-6 leading-relaxed text-lg" style="font-family: 'EB Garamond', serif">
                    Over 90 years later, the most prestigious professional golf tournament in Europe now resides here, but Wentworth has also remained as an exclusive home to another family - our Members.
                </div>
  
                <div class="flex pl-20 pt-5">
                  <div class="font-semibold tracking-wider" style="font-family: 'Julius Sans One', sans-serif;"><i class="far fa-flag text-red-800"></i> 9/18 Holes</div>
                  <div class="font-semibold tracking-wider pl-10" style="font-family: 'Julius Sans One', sans-serif;"><i class="fas fa-pencil-alt text-red-800"></i> 70 Par</div>
                  <div class="font-semibold tracking-wider pl-10" style="font-family: 'Julius Sans One', sans-serif;"><i class="fas fa-golf-ball text-red-800"></i> 6497 yards</div>
                </div>
  
                <div class="ml-16 mr-20  mt-8 " style="font-family: 'EB Garamond', serif;" >
                    
                    <div class="flex p-4">
        
                      <a href="#">
                        <div class="relative mt-0 mr-0 mr-4 rounded-sm overflow-hidden shadow-lg grow" style="width: 365px;">
                          <img src="/img/golfcourse3.jpg" class="min-w-full h-24 object-cover rounded-sm">
                          <div class="pl-2 text-white absolute bottom-0 left-0 w-full" style="background-color:rgba(0, 0, 0, 0.5);">The Mill (18 Holes) <i class="fas fa-check text-green-500"></i></div>
                        </div>
                      </a>
        
                      <a href="#">
                        <div class="relative mt-0 mr-0 rounded-sm overflow-hidden w-64 shadow-lg grow" style="width: 368px">  
                            <img src="/img/golfcourse1.jpg" class="min-w-full h-24 object-cover rounded-sm">
                            <div class="pl-2 text-white absolute bottom-0 left-0 w-full" style="background-color:rgba(0, 0, 0, 0.5);">The Garden (9 Holes)</div>
                        </div>
                      </a>

                    </div>
        
                    <div class="flex items-center p-4 pt-0">
                      <div class="inline" style="width: 353px">
                        <div class="pl-4 pr-4 rounded-sm shadow-md border-gray-400" style="padding-top: 0.6em; padding-bottom: 0.6em; border-width: thin;"><i class="far fa-calendar pr-1 text-red-800"></i> Saturday, October 12th</div>
                      </div>

                      <div class="inline ml-2" style="width: 110px">
                        <div class="pl-4 pr-4 rounded-sm shadow-md border-gray-400" style="padding-top: 0.6em; padding-bottom: 0.6em; border-width: thin;"><i class="far fa-users text-red-800 mr-1"></i> <select name="slct" id="slct" class="">
                          <option value="1" >1</option>
                          <option value="2" selected="selected">2</option>
                          <option value="2" >3</option>
                          <option value="2" >4</option>
                        </select></i></div>
                      </div>

                      <div class="inline ml-2" style="width: 110px">
                        <div class="pl-4 pr-4 rounded-sm shadow-md border-gray-400" style="padding-top: 0.6em; padding-bottom: 0.6em; border-width: thin;"><i class="far fa-money-bill-wave mr-1 text-red-800"></i> Any<i class="fas fa-caret-down ml-2"></i></div>
                      </div>

      
                      <div class="inline ml-2 shadow-lg">
                          <span class="bg-red-800 p-3 pl-8 pr-6 text-white font-bold uppercase tracking-wider rounded-l-sm" >Search</span>
                          <span class="p-3 bg-gray-800 text-white rounded-r-sm" ><i class="ion-md-arrow-dropright"></i></span>
                      </div>
                    </div>
            
                  </div>
              </div>

            <div class="inline w-1/2 min-h-full h-full"><img src="/img/wentworthside.jpg" class="w-full object-fill  min-h-full h-screen" ></div>

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
      ]
    }
  }
}
</script>

<style src="./assets/tailwind.css"></style>
