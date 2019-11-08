<template>
  <div id="app" class="antialiased text-gray-800" >
    <div class="min-h-screen" style="background-color: #fbfbfb">
      <Navbar/>
    

        <div>
            <div class="absolute min-w-full bg-white p-2 pt-5 pr-0 font-proza">
                <div class="float-left">
                  
                </div>
    
                <div class="float-right ">
                    <div class="inline text-gray-800 p-3"><i class="fas fa-road text-gold-dark mr-1"></i>6.2 mi</div>
                    <div class="inline text-gray-800 p-3"><i class="fas fa-phone text-gold-dark mr-1"></i>01253 891336</div>
                    <a href="#"><div class="inline text-gray-800 p-3 hover:bg-gold-dark hover:text-white "><i class="fas fa-globe-europe text-gold-dark mr-1"></i>Website</div></a>
                    <a href="#"><div class="inline text-gray-800 p-3 hover:bg-gold-dark hover:text-white"><i class="fas fa-th text-base text-gold-dark mr-1"></i>Points Matrix</div></a>
                    <a href="#"><div class="inline text-gray-800 p-3 hover:bg-gold-dark hover:text-white"><i class="fas fa-map-marked-alt text-gold-dark mr-1"></i>Directions</div></a>
                    
                  </div>
            </div>        
          
            
            <img src="/img/gc3.jpg" id="header-image" class="header-image">


            <div class="relative w-64 min-w-full -mt-16 pt-2 pb-6"  style="background-color: #fbfbfb">
              
              <div class="text-gray-80 mb-10 ml-0 max-w-5xl z-10 ml-auto mr-auto rounded-sm  font-proza">

                <div class="clearfix">
                  <div class="float-left p-2 pl-6">
                    <div class="text-lg font-bold xs:bg-red-400">Saturday, 12th October</div>
                  </div>
                  
                  <div class="float-right p-2 pr-6">
                    <a href="#"><div class="inline h-12 min-h-full text-white text-gray-800 mr-2"><i class="fas fa-caret-left mr-1 text-gold-dark"></i> Previous day </div></a>
                    | <a href="#"><div class="inline text-white text-gray-800 ml-2">Next day <i class="fas fa-caret-right ml-1 text-gold-dark"></i></div></a>
                  </div>
                </div>
                
                <div class="sticky z-50 mt-2 h-12 m-4 bg-white shadow-md" style="border-width: thin; top: 80px;">
                  
                  <div class="flex float-left">
                    <div class="m-3">
                      <i class="far fa-flag mr-1 text-gold-dark"></i>
                      <select name="slct" id="slct" class="">
                        <option value="1" selected="selected">The Mill House (18 Holes)</option>
                        <option value="2" >The Garden (9 Holes)</option>
                      </select>
                    </div>

                    <div class="m-3">
                        <i class="far fa-users mr-1 text-gold-dark"></i>
                        <select name="slct" id="slct" class="">
                          <option value="1" >1</option>
                          <option value="2" selected="selected">2</option>
                          <option value="2" >3</option>
                          <option value="2" >4</option>
                        </select>
                    </div>

                    <a href="#"><div class="m-3"><i class="far fa-money-bill-wave mr-1 text-gold-dark"></i> Any<i class="fas fa-caret-down ml-2"></i></div></a>
                  </div>

                  <div class="flex float-right">
                    <div class="m-3">Sort by: </div>
                    <a href="#"><div class="p-3 border-inside-bottom-gold-dark" style="border-left-width: thin; border-right-width: thin;">Earliest</div></a>
                    <a href="#"><div class="p-3" style=" border-right-width: thin;">Latest</div></a>
                    <a href="#"><div class="p-3">Price</div></a>
                  </div>

                </div>   

                <div class="p-2">
                  <div class="text-lg pl-3"><i class="fas fa-cloud-sun-rain"></i><span class="ml-1"> Morning Tee Times</span> </div>

                  <div>
                    <div class="inline-block m-2" v-for="tee in morningTeeTimes">
                      <TeeTime :tee="tee"/>
                    </div>
                  </div>

                  <div class="text-lg pl-3 pt-5"><i class="fas fa-cloud-sun"></i><span class="ml-1"> Afternoon Tee Times</span></div>

                  <div>
                    <div class="inline-block m-2" v-for="tee in afternoonTeeTimes">
                      <TeeTime :tee="tee"/>
                    </div>
                  </div>

                  <div class="text-lg pl-3 pt-5"><i class="fas fa-cloud-sun"></i><span class="ml-1"> Evening Tee Times</span></div>

                  <div>
                    <div class="inline-block m-2" v-for="tee in eveningTeeTimes">
                      <TeeTime :tee="tee"/>
                    </div>
                  </div>
              </div>

              </div> 
            </div>
        </div>
      

    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import TeeTime from './components/TeeTime'

export default {
  name: 'app',
  components: {
    Navbar,
    TeeTime
  },
  data() {
    return {
      morningTeeTimes: [
        {
          time : '7:00 AM',
          price : '2',
          value : 'false'
        },
        {
          time : '7:08 AM',
          price : '2',
          value : 'false'
        },
        {
          time : '7:28 AM',
          price : '2',
          value : 'false'
        },
        {
          time : '7:40 AM',
          price : '2',
          value : 'false'
        },
        {
          time : '7:48 AM',
          price : '2',
          value : 'false'
        },
        {
          time : '7:56 AM',
          price : '2',
          value : 'false'
        },
        {
          time : '8:12 AM',
          price : '3',
          value : 'false'
        },
        {
          time : '8:20 AM',
          price : '3',
          value : 'false'
        },
        {
          time : '8:28 AM',
          price : '3',
          value : 'false'
        },
        {
          time : '8:46 AM',
          price : '3',
          value : 'false'
        },
        {
          time : '9:02 AM',
          price : '2',
          value : 'true'
        },
        {
          time : '9:14 AM',
          price : '2',
          value : 'true'
        },
        {
          time : '9:37 AM',
          price : '3',
          value : 'false'
        },
        {
          time : '10:12 AM',
          price : '4',
          value : 'false'
        },
        {
          time : '10:46 AM',
          price : '4',
          value : 'false'
        },
        {
          time : '11:05 AM',
          price : '4',
          value : 'false'
        },
        {
          time : '11:24 AM',
          price : '4',
          value : 'false'
        },
        {
          time : '11:32 AM',
          price : '4',
          value : 'false'
        },
        {
          time : '11:48 AM',
          price : '4',
          value : 'false'
        },
      ],
      afternoonTeeTimes: [
        {
          time : '12:02 PM',
          price : '5',
          value : 'false'
        },
        {
          time : '12:02 PM',
          price : '5',
          value : 'false'
        },
        {
          time : '12:15 PM',
          price : '5',
          value : 'false'
        },        {
          time : '12:25 PM',
          price : '5',
          value : 'false'
        },
        {
          time : '12:37 PM',
          price : '5',
          value : 'false'
        },
        {
          time : '12:43 PM',
          price : '5',
          value : 'false'
        },        {
          time : '12:52 PM',
          price : '5',
          value : 'false'
        },
        {
          time : '12:59 PM',
          price : '5',
          value : 'false'
        },
        {
          time : '13:17 PM',
          price : '6',
          value : 'false'
        },        
        {
          time : '13:32 PM',
          price : '6',
          value : 'false'
        },
        {
          time : '13:45 PM',
          price : '6',
          value : 'false'
        },
        {
          time : '14:04 PM',
          price : '6',
          value : 'false'
        },        
        {
          time : '14:31 PM',
          price : '6',
          value : 'false'
        },
        {
          time : '14:57 PM',
          price : '6',
          value : 'false'
        },
        {
          time : '13:22 PM',
          price : '6',
          value : 'false'
        },        
        {
          time : '13:48 PM',
          price : '5',
          value : 'false'
        },
        {
          time : '14:15 PM',
          price : '4',
          value : 'true'
        },
        {
          time : '15:22 PM',
          price : '4',
          value : 'true'
        },        
        {
          time : '15:54 PM',
          price : '4',
          value : 'true'
        },
        {
          time : '16:25 PM',
          price : '5',
          value : 'false'
        },
        {
          time : '16:38 PM',
          price : '6',
          value : 'false'
        },
      ],
      eveningTeeTimes: [
        {
          time : '17:02 PM',
          price : '6',
          value : 'false'
        },
        {
          time : '17:24 PM',
          price : '6',
          value : 'false'
        },
        {
          time : '17:57 PM',
          price : '6',
          value : 'false'
        },        
        {
          time : '18:04 PM',
          price : '2',
          value : 'true'
        },
        {
          time : '18:22 PM',
          price : '2',
          value : 'true'
        },
        {
          time : '18:44 PM',
          price : '4',
          value : 'false'
        },        
        {
          time : '18:54 PM',
          price : '3',
          value : 'false'
        },
        {
          time : '19:07 PM',
          price : '3',
          value : 'false'
        },
        {
          time : '19:14 PM',
          price : '2',
          value : 'false'
        },        
        {
          time : '19:37 PM',
          price : '2',
          value : 'false'
        },
        {
          time : '19:42 PM',
          price : '2',
          value : 'false'
        },
      ]
    }
  }
}
</script>

<style src="./assets/tailwind.css"></style>
