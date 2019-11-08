<template>

  <div class="relative bg-white mb-10 ml-0 max-w-2xl z-10 ml-auto mr-auto shadow-lg  overflow-hidden" style="font-family: 'EB Garamond', serif;">
              
    <div class="bg-white">

      <div> <img v-bind:src="club.image" class="w-full object-cover pb-2" style="height: 130px; "></div>

      <div class="p-2 pt-0 ml-5 inline font-semibold tracking-wide w-auto text-2xl border-b-2 text-gray-800 border-gray-700" >{{ club.name }}</div>
      <div class="p-5">{{ club.desc }}</div>
    </div>

    <div class="p-5" style="background-color: #f6f6f6">

      <div class="flex justify-center">

        <div class="text-center pl-3 pr-3">
            <div class="text-2xl font-bold text-gray-700">{{ club.distance }}</div> 
            <div>miles away</div>
        </div>

        <div class="text-center pl-3 pr-3">
          <div class="text-2xl font-bold text-gray-700">{{ club.averagePrice }}</div> 
          <div>average price</div>
        </div>

        <div class="text-center pl-3 pr-3">
            <div class="text-2xl font-bold text-gray-700">{{ club.priceRange }}</div> 
            <div>price range</div>
        </div>

        <div class="text-center pl-3 pr-3">
            <div class="text-2xl font-bold text-gray-700">{{ club.ranking }}<sup class="text-sm">{{club.sup}}</sup></div> 
            <div>ranking</div>
        </div>

        <a href="#/">
          <div class="mt-5 pl-10">
            <span class="bg-gray-700 p-2 pl-4 pr-4 text-white font-bold uppercase tracking-wider" >Select</span>
            <span class="p-2 bg-gray-800 text-white"><i class="fas fa-caret-right"></i></span>
          </div>
        </a>
        
    </div>

    </div>
  </div>

</template>

<script>
export default {
  props: ['club'],
}
</script>
