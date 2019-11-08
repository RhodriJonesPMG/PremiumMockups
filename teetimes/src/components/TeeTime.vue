<template>
  <div class="relative w-32 max-w-sm rounded shadow-lg border-2 border-gray-300 grow" style="height:4.55rem; border-width: thin;">
    <a href="#">
      <div v-bind:class="(tee.value === 'true')?'cheap':''" class="tee h-10 rounded-t text-white font-bold text-lg text-center pt-2">{{ tee.time }}</div>
      <div v-bind:class="(tee.value === 'true')?'':''" class="text-center font-light text-lg pt-1 font-hairline text-gray-700">{{ tee.price }} Points</div>
    </a>  
  </div>
</template>

<script>
export default {
  props: ['tee'],
}
</script>
