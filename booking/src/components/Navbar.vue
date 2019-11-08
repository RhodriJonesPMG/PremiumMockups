<template>
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
        <li id="notificaitons"><div class="codrops-icon font-sans" style="font-family: 'Proza Libre', sans-serif;"><span class="mr-5 ml-0"><i class="far fa-bell"></i></span></div></li>
      </span>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>
