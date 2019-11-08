<template>
  <div id="app" class="antialiased text-gray-800">
    <div class="min-h-screen" style="background-color: #f6f6f6; font-family: 'Marcellus', serif;">
    
      <a v-if="overlay" v-on:click="overlay = false" onclick="overlayBackTransition()" href="#/" class="z-40">
        <div id="backButton" class="fixed top-0 right-0 uppercase text-2xl tracking-wide text-gold-dark p-3 pr-4  font-semibold tracking-widest opacity-0" style="z-index: 100; transition: opacity 2s; -webkit-transition: opacity 2s; text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3), 2px 2px 2px rgba(0, 0, 0, 0.4);">Back </div>
      </a>

      <!-- Overlay -->
      <div id="overlay" class="fixed display-none w-full h-full top-0 left-0 right-0 bottom-0 opacity-0" style="z-index: -1; ;background-color: rgba(0,0,0,0.84); transition: opacity 2s; -webkit-transition: opacity 2s">
      
        <div class="absolute w-full text-center text-lg" style="top: 25%;">
          <div class="p-4">

            <img class="ml-auto mr-auto" src="/img/greenwood.png" />

            <div class="pt-4" >
              <input id="forenameInput" oninput="validateInput()" class="m-2 mr-0 p-2 pl-3 pr-3 bg-transparent border-2 text-gray-400" placeholder="Forename" spellcheck="false" autocomplete="off" autocorrect="off" style="border-color: rgb(41, 41, 41);">
              <input id="surnameInput" oninput="validateInput()" class="m-2 p-2 pl-3 pr-3 bg-transparent border-2 text-gray-400" placeholder="Surname" spellcheck="false" autocomplete="off" autocorrect="off" style="border-color: rgb(41, 41, 41);">
          </div>

            <div class="" >
                <input id="emailInput" oninput="validateInput()" class="m-2 p-2 pl-3 pr-3 bg-transparent border-2 text-gray-400" placeholder="Email" type="text" spellcheck="false" autocomplete="off" autocorrect="off" style="min-width: 456px; border-color: rgb(41, 41, 41);">
            </div>

            <div class="" >
                <input id="passwordInput" oninput="validateInput()" class="m-2 mr-0 p-2 pl-3 pr-3 bg-transparent border-2 text-gray-400" placeholder="Password" type="password" spellcheck="false" autocomplete="off" autocorrect="off" style="border-color: rgb(41, 41, 41);">
                <input id="confirmPasswordInput" oninput="validateInput()" class="m-2 p-2 pl-3 pr-3 bg-transparent border-2 text-gray-400" placeholder="Confirm Password" type="password" spellcheck="false" autocomplete="off" autocorrect="off" style="border-color: rgb(41, 41, 41);">
            </div>
            
            <a href="#/" onclick="validateInputButton()">
              <div id="createAccount" class="m-2 p-2 pl-3 pr-3 bg-transparent border-2 ml-auto mr-auto" style="color: #7d838b; max-width: 456px; border-color: rgb(41, 41, 41);">
                Discover Queenwood
              </div>
            </a>

            <!--<div class="text-gray-400"><input type="checkbox" class="checkmark" checked> I agree to the <a href="#/"><div class="inline underline text-gold-dark">terms and conditions.</div></a></div>-->

            <div id="invalidFieldsText" class="text-red-700 opacity-0">Please ensure all fields are complete and valid.</div>
            

          </div>
        </div>
        

      </div>

      <img class="object-cover min-w-full max-h-screen" src="/img/bg.jpg">

      <div id="logo" class="absolute left-0 right-0 bottom-0 m-auto z-20 opacity-0" style="bottom: 150px; transition: opacity 2s; -webkit-transition: opacity 2s">
        
        <a v-if="!overlay" v-on:click="overlay = true" class="z-50" onclick="overlayTransition()" href="#">
          <div class="fixed top-0 right-0 uppercase text-2xl tracking-wide text-gold-dark p-3 pr-4 z-50 font-semibold tracking-widest" style="text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3), 2px 2px 2px rgba(0, 0, 0, 0.4);">Join Us </div>
        </a>

        <img class="ml-auto mr-auto" src="/img/greenwood.png" />

        <a href="#firstSection">
          <svg class="ml-auto mr-auto mt-12" style="fill: white; width: 35px; height: 35px;" viewBox="0 0 256 256" role="img" aria-label="See more">
              <title>Scroll down for more</title>
              <use xlink:href="#icon-circle-arrow-down">
                  <svg id="icon-circle-arrow-down"><path d="M128 253C59 253 3 197 3 128S59 3 128 3s125 56 125 125c-.1 69-56 124.9-125 125zm0-244.5C62 8.5 8.5 62 8.5 128S62 247.5 128 247.5 247.5 194 247.5 128 194 8.5 128 8.5z"></path><path d="M127.7 153.9l-47.4-47.4 3.9-3.8 43.5 43.5 44.1-44.1 3.9 3.8z"></path></svg>
              </use>
          </svg>
        </a>
      </div>
      
      <div class="flex "style="min-height: 952px;">
        <div id="firstSection" class="p-32"  style="min-width: 50%; max-width: 50%;">
          <div class="text-5xl uppercase pb-12"><div class="inline text-gold-dark" style="font-size: 1.50em;">W</div>elcome to Queenwood</div>
          <div class="text-xl pb-8">At Queenwood, members are the lifeblood of the club. We believe in developing a community which revolves around member satisfaction with a relaxed ambience - a place where our members can enjoy the finer aspects of life, alongside exhilarating golf.</div>
          <div class="text-xl pb-8">Together, the management team have worked at some of the world's finest golf clubs. We understand the needs and wants of members. We realise it is imperative that the course is in immaculate condition year-round, as well as providing unmatched facilities and customer service. We have the expertise necessary to implement these strategies.</div>
          <div class="text-xl pb-8">Furthermore, the business acumen offered by our team will ensure that The Club thrives in a sustainable manner. We will offer our members what will become a world-renowned golf course, in an immaculate setting combined with an experience rarely offered so close to a global urban hub such as London.</div>
        </div>

        <img class=" object-cover" style="min-width: 50%; max-width: 50%; min-height: 952px; max-height: 952px;" src="/img/Laurel.jpg">

      </div>

      <div class="flex text-white" style="min-height: 952px; background-color: #2d2e31;">

        <img class="object-cover" style="min-width: 60%; max-width: 60%; min-height: 952px; max-height: 952px;" src="/img/golfcourse7.jpg">

        <div class="p-32 pt-24 pb-0">

            <div class="text-5xl uppercase pb-12" ><div class="inline text-6xl leading-none" style="padding-right: 7px;">“</div>The Ultimate Flexible Experience<div class=" leading-none inline text-6xl" style="padding-left: 7px;">”</div></div>
            <div class="text-xl">
              <div class="pb-8">Our membership is for the golfer who enjoys golf but can’t justify time or expense of a full membership. A flexible membership is the answer.  Receive the benefits of membership in the form of the price you pay per round, holding a handicap, member discounts and playing in selected competitions, whilst also having the ability to use your membership at the very best courses.</div>
              <div class="pb-8">You will receive 100 points which can be used at your nominated home club and across our entire network of premium clubs. With rounds starting from as little as 2 points each, you could play up to 50 rounds of golf.</div>
              <div class="pb-8">Let us take the hassle out of membership for you whilst enjoying the great features of Queenwood.</div>

              <div class="pb-12">
                <a href="#/">
                  <div class="uppercase text-gold-dark text-center border-gold-dark p-1 hover:bg-gold-dark hover:text-white" style="width: 210px; border-width: thin;">Explore Premium</div>
                </a>
              </div>
            </div>
  
          </div>
        
      </div>

      <div class="flex" style="min-height: 952px;">

        <div class="p-32 pt-24 pb-0">

          <div class="text-5xl uppercase pb-12" >THE HEART AND SOUL OF QUEENWOOD</div>
        
          <div class="text-xl">
            <div class="pb-8">Ask any of our members and they will tell you that Queenwood is a truly exceptional club.</div>
            <div class="pb-8">Yes, we are a select bunch, but you certainly won’t find any elitist customs or stuffiness here. Queenwood represents a modern golfing tradition. It’s owned by 700 men and women, who each hold an individual share of the club. Everybody is equal. And everybody is here to leave the real world behind for a few hours and to share their love of golf with like-minded people.</div>
            <div class="pb-8">Our members appreciate our fresh, forward-looking approach to golf. It’s an outlook firmly rooted in building the future.</div>
    
            <div class="pb-8 border-gold-dark" style="border-bottom-width: 35px;">
              <a v-on:click="overlay = true" onclick="overlayTransition()" href="#">
                <div class="uppercase text-gold-dark text-center border-gold-dark p-1 hover:bg-gold-dark hover:text-white" style="width: 240px; border-width: thin;">Start your journey</div>
              </a>
            </div>
    
          </div>
        </div>
        
      <img class="object-cover" style="min-width: 60%; max-width: 60%; min-height: 952px; max-height: 952px;" src="/img/flexible.jpg">

      </div>

      <div class="pattern-gray p-8 text-center">

        <div class="text-xl  m-20 flex justify-center leading-relaxed">
          <div style="max-width: 650px;">
            <div>My motto is ‘Be the best you can be’, and here you truly can. I love everything about Queenwood. It has the best practice facilities around and the best members. Of course I’m biased, but it’s true. I’m deeply honoured to be a Vice President of Queenwood.</div>
            <div class="pt-2 text-sm uppercase font-extrabold tracking-wide text-right">Bob Bobson, PGA MASTER PROFESSIONAL, QUEENWOOD</div>
          </div>

          <div class="ml-48 pt-3" style="max-width: 650px;">
              <div>I’ve played competitions all over the world, but nowhere is quite like Queenwood. I particularly enjoy the tournaments. The atmosphere is always very friendly and relaxed – it really is special.</div>
              <div class="pt-2 text-sm uppercase font-extrabold tracking-wide text-right">SUSIE LEE, MEMBER AND FORMER CAPTAIN</div>
          </div>
        </div>

        </div>

      <div>
          <img class=" object-cover" style="min-width: 100%; max-width: 100%; min-height: 585px; max-height: 585px;" src="/img/premiumclub.jpg">
      </div>

      <div>
          <div class="flex justify-center p-16">

            <div class="m-16">
              <img src="/img/premium.jpeg" class=" object-cover" style="height: 350px; width: 400px;">
              <div class="mt-6 text-center">
                <div class="text-xl tracking-wide font-semibold uppercase pb-1">Full flexibility</div>
                <div class="leading-relaxed" style="max-width: 400px;" >
                  Play up to 40 rounds of golf a year, great member benefits, an official handicap and the freedom to play on other other premium courses at no extra cost. Once you're a member you can start playing straight away.
                   </div>
              </div>
            </div>

            <div class="m-16">
              <img src="/img/colorado.jpg" class=" object-cover" style="height: 350px; width: 400px;">
              <div class="mt-6 text-center">
                <div class="text-xl font-semibold tracking-wide uppercase pb-1">The ultimate challange</div>
                <div class="leading-relaxed" style="max-width: 400px;" > 
                  Each hole is unique, and at 7,100 yards from the back tees will challenge the very best golfers both in terms of their playing ability as well as their approach to the game.</div>
              </div>
            </div>

            <div class="m-16">
              <img src="/img/loch.jpg" class=" object-cover" style="height: 350px; width: 400px;">
              <div class="mt-6 text-center">
                <div class="text-xl font-semibold tracking-wide uppercase pb-1">Friends for life</div>
                <div class="leading-relaxed" style="max-width: 400px;" >The newly refurbished clubhouse is the perfect place to meet, relax and to celebrate golfing achievements. Outside the busy competition schedule, the social calendar is filled with family days, monthly medals and special dining experiences.</div>
              </div>
            </div>
            
          </div> 
      </div>

      <div class="p-8" style="background-color: #e7e7e7;">

        <div class="flex justify-center">
          <img src="/img/map.svg" style="height: 170px;">

          <div class="ml-12 mr-5" style="max-width: 350px;">
            Set in a magnificent 700-hectare estate, just 60 minutes from South West London and 20 minutes from Gatwick, Queenwood golf club offers a serene retreat from city living.
            
            <div class="pt-4">
              <a v-on:click="overlay = true" onclick="overlayTransition()" href="#">
                <div class="uppercase text-gold-dark text-center border-gold-dark p-1 hover:bg-gold-dark hover:text-white" style="width: 240px; border-width: thin;">Start your journey</div>
              </a>
            </div>

          </div>
          
          <div class="pl-8">
            <div class="">Queenwood Golf Club</div>
            <div class="">Stonehill Road</div>
            <div class="">Ottershaw, KT16 0AQ</div>

            <div class="pt-3">01932 454500</div>
            <div class="">contact@queenwood.com</div>
          </div>
        </div>

      </div>


    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {

  },
  data() {
    return {
      overlay : false,
    }
  }
}
</script>

<style src="./assets/tailwind.css"></style>
