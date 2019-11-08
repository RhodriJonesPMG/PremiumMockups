<template>

  <div class="relative bg-white m-2 z-10 ml-auto mr-auto shadow-md" style="border-width: thin;">

    <div> <img v-bind:src="booking.image" class="w-full object-cover pb-2" style="height: 200px;"></div>

    <div class="flex text-base pb-2">

      <div class="pl-5">
        <div class="text-gray-600 font-semibold">Club</div>
        <div>{{booking.club}}</div>
      </div>

      <div class="pl-5">
          <div class="text-gray-600 font-semibold">Course</div>
          <div>{{booking.course}}</div>
      </div>

      <div class="pl-10">
          <div class="text-gray-600 font-semibold">Date</div>
          <div>{{booking.day}}, {{booking.date}}<sup>{{booking.sup}}</sup> of {{booking.month}} {{booking.time}}</div>
      </div>

      <div class="pl-10">
          <div class="text-gray-600 font-semibold">Players</div>
          <div>{{booking.players}}</div>
      </div>

      <div class="pl-10">
          <div class="text-gray-600 font-semibold">Booked by</div>
          <div>{{booking.bookedBy}}</div>
      </div>

      

    </div>

    <div class="flex p-1" style="background-color: #f6f6f6">       
        <div class="m-4 mt-2 mb-2">
            <a href="#/"><div class="uppercase font-bold text-sm text-red-800 tracking-wide">Cancel Booking</div></a>
        </div>
    </div>

  </div>

</template>

<script>
export default {
  props: ['booking'],
}
</script>
