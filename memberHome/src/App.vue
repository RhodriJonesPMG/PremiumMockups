<template>
  <div id="app" class="antialiased text-gray-800">
    <div class="min-h-screen" style="background-color: #f3f3f3;">

      <!-- Navigation bar  -->
      <div class="container">
        <ul id="gn-menu" class="gn-menu-main fixed top-0 left-0 w-full text-xs z-20 overflow-hidden bg-white text-gray-700 p-0 m-0 list-none normal-case font-light menu-line">
          <li class="gn-trigger ">
            <a id="menuButton" class="block h-full pt-1 text-gray-800 no-underline cursor-pointer text-red-800 hover:text-white hover:bg-red-800 gn-icon gn-icon-menu"><i class="fal fa-bars fa-2x "></i></a>
            <nav class="gn-menu-wrapper fixed bottom-0 left-0  overflow-hidden bg-white">
              <div class="gn-scroller absolute overflow-y-scroll h-full">
                <ul class="gn-menu text-left text-lg m-0 p-0 bg-white text-gray-700 list-none normal-case font-light menu-line">
                  <li class="relative select-none"><a class="block h-full text-gray-800 no-underline cursor-pointer hover:bg-red-800 hover:text-white gn-icon gn-icon-cog"><i class="ml-6 mr-8 fas fa-home fa-lg"></i> Home</a></li>
                  <li class="relative select-none"><a class="block h-full text-gray-800 no-underline cursor-pointer hover:bg-red-800 hover:text-white gn-icon gn-icon-help"><i class="ml-6 mr-8 fas fa-map-marked-alt fa-lg"></i> Clubs</a></li>
                  <li class="relative select-none"><a class="block h-full text-gray-800 no-underline cursor-pointer hover:bg-red-800 hover:text-white gn-icon gn-icon-help"><i class="ml-6 mr-8 fas fa-trophy-alt fa-lg"></i> Trophies</a></li>
                  <li class="relative select-none"><a class="block h-full text-gray-800 no-underline cursor-pointer hover:bg-red-800 hover:text-white gn-icon gn-icon-help"><i class="ml-6 mr-8 far fa-question-circle fa-lg"></i> Help</a></li>
                  <li class="relative select-none" style="border-bottom: 1px solid #c6d0da;"><a class="block h-full text-gray-800 no-underline cursor-pointer hover:bg-red-800 hover:text-white gn-icon gn-icon-help"><i class="ml-6 mr-8 fas fa-sign-out alt fa-lg"></i> Logout</a></li>
                </ul>
              </div>
            </nav>
          </li>
          <li id="homeClub"><a href="http://google.com/" class="pl-10 pr-10 uppercase tracking-wider font-bold block h-full text-gray-800 no-underline cursor-pointer hover:bg-red-800 hover:text-white lg:text-base sm:text-xs" style="font-family: 'EB Garamond', serif;">Wentworth Golf Club</a></li>
    
          <span class="flex float-right">
            <li><div id="flexiPoints" class="codrops-icon font-sans uppercase" style="font-family: 'Proza Libre', sans-serif;"><span span class="hover:text-gray-900 mr-5 ml-5">Home 70 &bull; Flexi 30</span></div></li>
            <li><div class="codrops-icon font-sans" style="font-family: 'Proza Libre', sans-serif;"><span class="hover:text-gray-900 mr-5 ml-5">tiger.woods@golf.com</span></div></li>
            <li><div v-bind:class="(basket === '0')?'hidden':'visible'" class="codrops-icon noEffect font-sans " style="font-family: 'Proza Libre', sans-serif;"><span class="mr-5 ml-5 basket" data-count="1"><i class="fas fa-shopping-basket" data-count="3"></i></span></div></li>
            <li id="notificaitons"><div class="codrops-icon font-sans" style="font-family: 'Proza Libre', sans-serif;"><span class="mr-5 ml-0"><i class="far fa-bell"></i></span></div></li>
          </span>
        </ul>
      </div>
      
      <img src="/img/4.jpg" id="header-image" class="header-image">

      <!-- Member Card -->
      <div class="relative z-10 -m-64 max-w-5xl  ml-auto mr-auto shadow-lg " style="margin-top: -135px; background-image: linear-gradient(rgba(255, 255, 255, 0.84),rgba(255,255,255,0.98), rgba(255,255,255,1))">

        <div class="flex">
          <img src="/img/tiger.jpg" class="w-64 border-gray-400 object-cover shadow-md" >

          <div class="ml-8 pt-4 pb-4 w-4xl" style="min-width: 710px;">

              <div class="flex justify-between min-w-full w-64">
                <div class="inline-block float-left text-2xl font-semibold tracking-wide" >Tiger Woods</div>

                <div class="inline-block float-right">
                    <div class="text-gray-600 uppercase tracking-widest"><div class="inline text-red-800">&bull;</div> Premium</div>
                </div>
              </div>

            <div class="mt-4 uppercase font-semibold" style="font-family: 'EB Garamond', serif;">Wentworth Golf Club</div>
            <div class="mt-0 text-green-700" >Membership expires on 17/12/2019 at 2:23pm</div>

            <div class="mt-3"><i class="fas fa-star text-red-800"></i> <i class="fas fa-star text-red-800"></i> <i class="fas fa-star text-red-800"></i> <i class="far fa-star"></i> <i class="far fa-star"></i></div>
          </div>
        </div>

      </div>

      <div class="relative z-10 text-gray-800 ml-0 max-w-5xl mt-56 ml-auto mr-auto overflow-hidden" style="margin-top: 200px;">
        
        <div class="mt-16 h-12 bg-white shadow-md" style="border-width: thin;">

            <div class="flex float-left">
              <a href="#"><div v-on:click="view = 'statistics'" v-bind:class="(view === 'statistics')?'border-inside-bottom-red-800':''" class="p-3 " style="border-right-width: thin;">Statistics</div></a>
              <a href="#"><div v-on:click="view = 'bookings'" v-bind:class="(view === 'bookings')?'border-inside-bottom-red-800':''" class="p-3" style=" border-right-width: thin;">Bookings</div></a>
              <a href="#"><div v-on:click="view = 'renew'" v-bind:class="(view === 'renew')?'border-inside-bottom-red-800':''" class="p-3" style=" border-right-width: thin;">Renew</div></a>
              <a href="#"><div v-on:click="view = 'topUp'" v-bind:class="(view === 'topUp')?'border-inside-bottom-red-800':''" class="p-3" style=" border-right-width: thin;">Top-up</div></a>
              <a href="#"><div v-on:click="view = 'referrals'" v-bind:class="(view === 'referrals')?'border-inside-bottom-red-800':''" class="p-3" style=" border-right-width: thin;">Referrals</div></a>
            </div>
        </div>  
      </div>
            
      <!-- Statistics -->
      <div v-show="view === 'statistics'" class="text-gray-800 max-w-5xl ml-auto mr-auto overflow-hidden">
        
          <div>
              <div class="flex">
                <div class="h-32 w-64 m-4 ml-0 mb-0 mt-2 bg-white shadow-md text-center "  style="border-width: thin;">
                  <div class="p-6 pt-5">
                    <div class="flex justify-center items-center" style="font-size: 1.8rem;"><div class="text-2xl pr-3"><i class="fas fa-flag text-red-800"></i></div><div class="text-3xl font-semibold">22</div></div>
                    <div class="text-xl pt-1 font-light">totals rounds</div>
                  </div>
                </div>
                <div class="h-32 w-64 m-4 ml-0 mb-0  mt-2  bg-white shadow-md text-center "  style="border-width: thin;">
                    <div class="p-6 pt-5">
                      <div class="flex justify-center items-center" style="font-size: 1.8rem;"><div class="text-2xl pr-3"><i class="fas fa-road text-red-800"></i></div><div class="text-3xl font-semibold">8</div></div>
                      <div class="text-xl pt-1 font-light">clubs visited</div>
                    </div>
                </div>
                <div class="h-32 w-64 m-4 ml-0 mb-0 mt-2  bg-white shadow-md text-center "  style="border-width: thin;">
                    <div class="p-6 pt-5">
                      <div class="flex justify-center items-center" style="font-size: 1.8rem;"><div class="text-2xl pr-3"><i class="fas fa-home text-red-800"></i></div><div class="text-3xl font-semibold">12</div></div>
                      <div class="text-xl pt-1 font-light">home bookings</div>
                    </div>
                </div>
                <div class="h-32 w-64 m-4 ml-0 mr-0 mt-2  mb-0 bg-white shadow-md text-center "  style="border-width: thin;">
                    <div class="p-6 pt-5">
                      <div class="flex justify-center items-center" style="font-size: 1.8rem;"><div class="text-2xl pr-3"><i class="fas fa-map-marked-alt text-red-800"></i></div><div class="text-3xl font-semibold">10</div></div>
                      <div class="text-xl pt-1 font-light">away bookings</div>
                    </div>
                </div>
              </div>
          </div>

          <div>
              <div class="flex">
                  <div class="h-32 w-64 m-4 ml-0 mb-0 bg-white shadow-md text-center "  style="border-width: thin;">
                    <div class="p-6 pt-5">
                      <div class="flex justify-center items-center" style="font-size: 1.8rem;"><div class="text-2xl pr-3"><i class="fas fa-sun text-red-800"></i></div><div class="text-3xl font-semibold">14</div></div>
                      <div class="text-xl pt-1 font-light">summer bookings</div>
                    </div>
                  </div>
                  <div class="h-32 w-64 m-4 ml-0 mb-0 bg-white shadow-md text-center "  style="border-width: thin;">
                      <div class="p-6 pt-5">
                        <div class="flex justify-center items-center" style="font-size: 1.8rem;"><div class="text-2xl pr-3"><i class="fas fa-cloud-showers-heavy text-red-800"></i></div><div class="text-3xl font-semibold">8</div></div>
                        <div class="text-xl pt-1 font-light">winter bookings</div>
                      </div>
                  </div>
                  <div class="h-32 w-64 m-4 ml-0 mb-0 bg-white shadow-md text-center "  style="border-width: thin;">
                      <div class="p-6 pt-5">
                        <div class="flex justify-center items-center" style="font-size: 1.8rem;"><div class="text-2xl pr-3"><i class="fas fa-users text-red-800"></i></div><div class="text-3xl font-semibold">9</div></div>
                        <div class="text-xl pt-1 font-light">buddy bookings</div>
                      </div>
                  </div>
                  <div class="h-32 w-64 m-4 ml-0 mr-0 mb-0 bg-white shadow-md text-center "  style="border-width: thin;">
                      <div class="p-6 pt-5">
                        <div class="flex justify-center items-center" style="font-size: 1.8rem;"><div class="text-2xl pr-3"><i class="fas fa-globe-europe text-red-800"></i></div><div class="text-3xl font-semibold">112</div><div class="text-sm mt-3">mi</div></div>
                        <div class="text-xl pt-1 font-light">furthest booking</div>
                      </div>
                  </div>
                </div>
          </div>

          <div>
              <div class="flex mb-4">
                  <div class="h-32 w-64 m-4 ml-0 mb-0 bg-white shadow-md text-center "  style="border-width: thin;">
                    <div class="p-6 pt-5">
                      <div class="flex justify-center items-center" style="font-size: 1.8rem;"><div class="text-2xl pr-3"><i class="fas fa-mobile text-red-800"></i></div><div class="text-3xl font-semibold">17</div></div>
                      <div class="text-xl pt-1 font-light">app bookings</div>
                    </div>
                  </div>
                  <div class="h-32 w-64 m-4 ml-0 mb-0 bg-white shadow-md text-center "  style="border-width: thin;">
                      <div class="p-6 pt-5">
                        <div class="flex justify-center items-center" style="font-size: 1.8rem;"><div class="text-2xl pr-3"><i class="fas fa-user-plus text-red-800"></i></div><div class="text-3xl font-semibold">5</div></div>
                        <div class="text-xl pt-1 font-light">guest count</div>
                      </div>
                  </div>
                  <div class="h-32 w-64 m-4 ml-0 mb-0 bg-white shadow-md text-center "  style="border-width: thin;">
                      <div class="p-6 pt-5">
                        <div class="flex justify-center items-center" style="font-size: 1.8rem;"><div class="text-2xl pr-3"><i class="fas fa-sync text-red-800"></i></div><div class="text-3xl font-semibold">3</div></div>
                        <div class="text-xl pt-1 font-light">renewal count</div>
                      </div>
                  </div>
                  <div class="h-32 w-64 m-4 ml-0 mr-0 mb-0 bg-white shadow-md text-center "  style="border-width: thin;">
                      <div class="p-6 pt-5">
                        <div class="flex justify-center items-center" style="font-size: 1.8rem;"><div class="text-2xl pr-3"><i class="fas fa-trophy text-red-800"></i></div><div class="text-3xl font-semibold">925</div></div>
                        <div class="text-xl pt-1 font-light">achievement score</div>
                      </div>
                  </div>
                </div>
          </div>

          
          
      </div>

      <!-- Bookings -->
      <div v-show="view === 'bookings'" class="text-gray-800 max-w-5xl ml-auto mr-auto overflow-hidden mt-0 mb-2">

      <a href="#/"><div class=" overflow-hidden shadow-md bg-white m-2 p-3 ml-0 mr-0" style="border-width: thin;"><i class="far fa-calendar-plus text-red-800"></i> <span class="pl-2 font-semibold">Create a new booking</span></div></a>
      
      <div>
        <div class="inline-block" v-for="booking in bookings">
          <BookingCard :booking="booking"/>
        </div>
      </div>

      </div>

      <!-- Renew -->
      <div v-show="view === 'renew'" class="text-gray-800 max-w-5xl ml-auto mr-auto overflow-hidden mt-2">

          <div class="text-gray-600 overflow-hidden">

            <div class="pt-12 text-gray-400 overflow-hidden" style="background-image: linear-gradient(rgba(21,26,47,0.2),rgba(21, 26, 47, 0.5)),url(/img/topUpHeader.jpg);">
           
              <div class="text-4xl text-gray-200 pt-2 pr-10 pl-10 pb-24" style="font-family: 'EB Garamond', serif;">Extend your premium experience</div>

            </div>

        <div class="bg-white mt-12 text-gray-100 text-center shadow-md w-full" style="background-image: linear-gradient(rgba(21,26,47,0.4),rgba(21, 26, 47, 0.5)),url(/img/gc1.jpg);"> 
          
          <div class="flex justify-center p-8 pt-10 pb-2">
            <div class="">
              <div class="text-xl text-white font-semibold tracking-wide uppercase">Premium 12 Month Flexible Membership</div>
              <div class="text-left mt-2"><i class="fas fa-check text-red-800 mr-1"></i> Access our premium network of clubs</div>
              <div class="text-left mt-2"><i class="fas fa-check text-red-800 mr-1"></i> Genuine membership benefits</div>
              <div class="text-left mt-2"><i class="fas fa-check text-red-800 mr-1"></i> Use your points for up to 3 guests</div>
              <div class="text-left mt-2"><i class="fas fa-check text-red-800 mr-1"></i> CONGU handicap</div>      
            </div>
            
            <div class="" style="margin-left: 325px;">
              <div class="text-4xl leading-none pt-1">£1199</div>
              <div class="">Finance plan available</div>
            </div>
          </div>

          <div id="sliderHelp" class="relative box p-1 text-red-800 bg-gray-100 opacity-1 font-semibold" style="left: 532px; width: 170px; transition: opacity 0.5s; -webkit-transition: opacity 0.5s;">Adjust your points</div>
          
          <div class="flex items-center p-8 pt-0 mt-6 pr-16 pl-12 font-semibold text-gray-400">

            <div class="text-center pr-4 uppercase clearfix whitespace-no-wrap"><div id="homePoints" class="pl-2 inline text-gray-300">80</div> Home</div>
            <input type="range" min="50" max="90" value="80" class="slider" id="pointsSlider" oninput="updatePoints(this.value)" onchange="updatePoints(this.value)">
            <div class="text-center pl-4 uppercase clearfix whitespace-no-wrap"><div id="flexiPoints" class="pl-2 inline text-gray-300">20</div> Flexi</div>
  
          </div>

        </div>


            <div class="flex justify-center min-w-full pb-16 pt-16" style="font-family: 'EB Garamond', serif;">

                <img class="object-cover" src="/img/went.jpg" style="height: 460px; width: 677px;">
      
                <div class="p-10 m-24 mt-20 ml-0 -ml-24 pr-0 mr-0" style="background-color: #f3f3f3;">
                    <div class="text-2xl text-gray-800 font-normal" ><span class="text-red-800">P</span>remium membership offers an unforgettable experience at the very best courses, for an even better price. Don't forget to browse our range of exclusive clubs, only for premium members.</div>
                    <a href="#/"><div class="uppercase text-red-800 text-center p-1  mt-3 hover:bg-red-800 hover:text-white  border-red-800" style="border-width: thin; width: 230px;">Explore premium clubs</div></a>
                </div>
      
            </div>

            <div class="flex justify-center pb-16">

                <div class="m-4 ml-0 pl-0 mt-0 mb-0 border-red-800 text-lg" style="border-bottom-width: 30px;" >
                    <div class="uppercase text-2xl text-gray-800 tracking-wider font-semibold " style="font-family: 'EB Garamond', serif;">The <span class="text-red-800">W</span>entworth Experience</div>
                    <div class="p-2 pb-0 text-gray-700 pl-0" style="font-family: 'EB Garamond', serif;">
                        Whether the rhododendrons are in bloom along the sweeping driveway or the Virginia creeper is dressing the castellated Clubhouse in shades of crimson and red, a timeless experience awaits your arrival at Wentworth, where you can't help but feel at home.
                    </div>
                    
                    <div class="p-2 pt-2 pb-0 text-gray-700 pl-0" style="font-family: 'EB Garamond', serif;">
                        In 1805, ‘Wentworths' was a private residence for the extended family of the Duke of Wellington, but it was the visionary George Tarrant, who established the house and grounds as the home of Wentworth Club in 1922.
                    </div>

                    <a href="#/"><div class="text-base uppercase text-red-800 text-center p-1 mt-4 mb-2 ml-0 hover:bg-red-800 hover:text-white  border-red-800" style="font-family: 'EB Garamond', serif; border-width: thin; width: 220px;">Discover Wentworth</div></a>
                </div>

                <img class="object-cover" src="/img/loch.jpg" style="height: 400px; width: 560px;">

            </div>

            
  
          </div>
        
      </div>

      <!-- Top-up -->
      <div v-show="view === 'topUp'" class="text-gray-800 max-w-5xl ml-auto mr-auto overflow-hidden mt-0 mb-2 pb-12">
        
        <a href="#"><div v-on:click="view = 'renew'" class="overflow-hidden shadow-md bg-white m-2 p-3 ml-0 mr-0" style="border-width: thin;"><i class="fas fa-exclamation-triangle text-orange-500"></i> <span class="pl-2 font-semibold">Your membership is due to expire in 24 days, renew to avoid losing your points.</span></div></a>

        <div class="relative bg-white m-2 mt-4 z-10 ml-auto mr-auto shadow-lg">
          <div class="p-10" style="background-image: linear-gradient(rgba(8,11,5,0.4),rgba(31,47,21,0.5)),url(/img/homePoints.jpg);">
            <div class="text-2xl text-white font-semibold tracking-wide">Home points</div>
            <div class="text-lg text-gray-400 max-w-lg pb-4">More points to play at home</div>

            <div class="flex">

                <div>
                  <div class="border-gray-500 bg-gray-200 border-t-8 shadow-md p-2 pb-1 pl-3 pr-3 rounded-l-sm" style="width: 150px;">
                    <div class="border-gray-400" style="border-bottom-width: thin;"><div class="text-2xl inline font-semibold">20</div><div class="inline font-semibold"> home</div></div>
                    <div>£200</div>
                  </div>
                  <a href="#/">
                    <div v-on:click="basket = '1'" class="bg-gray-800 hover:bg-red-800 m-2 mt-0 ml-0 pt-1 pb-1 text-white max-w-full text-center  shadow-lg" style="width: 150px;"><i class="fas fa-shopping-basket pr-1"></i> Add to basket</div>
                  </a>
                </div>
              
                <div class="ml-4">
                  <div class="border-gray-500 bg-gray-200 border-t-8 shadow-md p-2 pb-1 pl-3 pr-3 rounded-l-sm" style="width: 150px;">
                    <div class="border-gray-400" style="border-bottom-width: thin;"><div class="text-2xl inline font-semibold">40</div><div class="inline font-semibold"> home</div></div>
                    <div>£400</div>
                  </div>
                  <a href="#/">
                    <div v-on:click="basket = '1'" class="bg-gray-800 hover:bg-red-800 m-2 mt-0 ml-0 pt-1 pb-1 text-white max-w-full text-center  shadow-lg" style="width: 150px;"><i class="fas fa-shopping-basket pr-1"></i> Add to basket</div>
                  </a>
                </div>
  
                <div class="ml-4">
                  <div class="border-gray-500 bg-gray-200 border-t-8 shadow-md p-2 pb-1 pl-3 pr-3 rounded-l-sm" style="width: 150px;">
                    <div class="border-gray-400" style="border-bottom-width: thin;"><div class="text-2xl inline font-semibold">60</div><div class="inline font-semibold"> home</div></div>
                    <div>£600</div>
                  </div>
                  <a href="#/">
                    <div v-on:click="basket = '1'" class="bg-gray-800 hover:bg-red-800 m-2 mt-0 ml-0 pt-1 pb-1 text-white max-w-full text-center  shadow-lg" style="width: 150px;"><i class="fas fa-shopping-basket pr-1"></i> Add to basket</div>
                  </a>
                </div>
  
            </div>
            

            <div class="text-gray-400 pt-24 max-w-lg">Additional Home Points can be spent on rounds of golf at your home club. Any Home Points remaining can be carried over to next year's membership, at renewal.</div>
            
            <div class="text-gray-400 text-sm pt-6 max-w-lg font-semibold">This package won't extend your renewal date.</div>
          </div>
        </div>
 
        <div class="relative bg-white m-2 mt-4 z-10 ml-auto mr-auto shadow-lg">
          <div class="p-10" style="background-image: linear-gradient(rgba(8,11,5,0.4),rgba(31,47,21,0.5)),url(/img/awayPoints.jpg);">
            <div class="text-2xl text-white font-semibold tracking-wide">Flexi points</div>
            <div class="text-lg text-gray-400 max-w-lg pb-4">More points to play at home or away</div>

            <div class="flex">

                <div>
                    <div class="border-gray-500 bg-gray-200 border-t-8 shadow-md p-2 pb-1 pl-3 pr-3 rounded-l-sm" style="width: 150px;">
                      <div class="border-gray-400" style="border-bottom-width: thin;"><div class="text-2xl inline font-semibold">20</div><div class="inline font-semibold"> flexi</div></div>
                      <div>£300</div>
                    </div>
                    <a href="#/">
                      <div v-on:click="basket = '1'" class="bg-gray-800 hover:bg-red-800 m-2 mt-0 ml-0 pt-1 pb-1 text-white max-w-full text-center  shadow-lg" style="width: 150px;"><i class="fas fa-shopping-basket pr-1"></i> Add to basket</div>
                    </a>
                  </div>
                
                  <div class="ml-4">
                    <div class="border-gray-500 bg-gray-200 border-t-8 shadow-md p-2 pb-1 pl-3 pr-3 rounded-l-sm" style="width: 150px;">
                      <div class="border-gray-400" style="border-bottom-width: thin;"><div class="text-2xl inline font-semibold">40</div><div class="inline font-semibold"> flexi</div></div>
                      <div>£600</div>
                    </div>
                    <a href="#/">
                      <div v-on:click="basket = '1'" class="bg-gray-800 hover:bg-red-800 m-2 mt-0 ml-0 pt-1 pb-1 text-white max-w-full text-center  shadow-lg" style="width: 150px;"><i class="fas fa-shopping-basket pr-1"></i> Add to basket</div>
                    </a>
                  </div>
    
                  <div class="ml-4">
                    <div class="border-gray-500 bg-gray-200 border-t-8 shadow-md p-2 pb-1 pl-3 pr-3 rounded-l-sm" style="width: 150px;">
                      <div class="border-gray-400" style="border-bottom-width: thin;"><div class="text-2xl inline font-semibold">60</div><div class="inline font-semibold"> flexi</div></div>
                      <div>£900</div>
                    </div>
                    <a href="#/">
                      <div v-on:click="basket = '1'" class="bg-gray-800 hover:bg-red-800 m-2 mt-0 ml-0 pt-1 pb-1 text-white max-w-full text-center  shadow-lg" style="width: 150px;"><i class="fas fa-shopping-basket pr-1"></i> Add to basket</div>
                    </a>
                  </div>

            </div>

            <div class="text-gray-400 pt-24 max-w-lg">Additional Flexi Points can be spent on rounds of golf at any club in the PlayMoreGolf network, including your Home Club. They are valid for 12 months from purchase.</div>
            
            <div class="text-gray-400 text-sm pt-6 max-w-lg font-semibold">This package won't extend your renewal date.</div>
          </div>
        </div>

      </div>

      <!-- Referrals -->
      <div v-show="view === 'referrals'" class="text-gray-800 max-w-5xl ml-auto mr-auto overflow-hidden mt-0 mb-2 pb-12">
        
          <div class="relative bg-white m-2 z-10 ml-auto mr-auto shadow-lg  overflow-hidden">
              <div class="p-10" style="background-image: linear-gradient(rgba(8,11,5,0.5),rgba(31,47,21,0.5)),url(/img/refer.jpg);">
                <div class="text-2xl text-white font-semibold tracking-wide">Golf is better with friends</div>
                <div class="text-lg text-gray-400 pt-4 max-w-lg">By referring a friend to the PlayMoreGolf scheme you can both benefit from 20 free home points when they sign up*</div>
                <a href="https://offers.playmore.golf/refer-a-friend" target="_blank"><div class="bg-gray-800 hover:bg-red-800 m-2 ml-0 pt-1 pb-1 text-white max-w-full text-center  shadow-lg" style="width: 190px;">Send my friend an email</div></a>

                <div class="text-gray-400 pt-24 max-w-lg">Prefer to talk in person? When you talk to your friend, give them your account email address, which they add on the Register page to receive their referral bonus.</div>
                
                <div class="text-gray-400 text-sm pt-6 max-w-lg">* You'll both receive referral points when your friend signs up and completes their purchase - If your friend signs up on instalment plan, both your points will be credited when they complete their final payment.</div>
              </div>
          </div>
      </div>
 
      </div>

    </div>
  </div>
</template>

<script>
import BookingCard from './components/BookingCard'

export default {
  name: 'app',
  components: {
    BookingCard
  },
  data() {
    return {
      homePoints : "20",
      awayPoints : "20",
      basket : "0",
      view : "statistics",
      ex1: { label: 'color', val: 25, color: 'orange darken-3' },
        ex2: { label: 'track-color', val: 75, color: 'green lighten-1' },
        ex3: { label: 'thumb-color', val: 50, color: 'red' },
      bookings: [
        {
          club : "Wentworth Golf Club",
          course : "The Mill (18 Holes)",
          date : "22",
          day : "Saturday",
          month : "January",
          year : "2020",
          sup: "nd",
          time : "1:00 PM",
          players : "2",
          bookedBy : "Tiger Woods",
          image: "/img/golfcourse3.jpg"
        },
        {
          club : "Wentworth Golf Club",
          course : "The Garden (9 Holes)",
          date : "5",
          day : "Friday",
          month : "February",
          year : "2020",
          time : "11:00 AM",
          sup: "th",
          players : "3",
          bookedBy : "Rory Mcllroy",
          image: "/img/gc2.jpg"
        },
      ],
    }
  }
}
</script>

<style src="./assets/tailwind.css"></style>
