import React from 'react'

function Card({username="User",image}) {
  return (
<article class="rounded-xl border border-gray-700 bg-gray-800 p-4">
  <div class="flex items-center gap-4">
    <img
      alt=""
      src={image ||"https://www.shutterstock.com/shutterstock/photos/2057829641/display_1500/stock-vector-no-image-available-picture-coming-soon-missing-photo-image-sign-illustration-vector-2057829641.jpg"}
      class="size-16 rounded-full object-cover"
    />

    <div>
      <h3 class="text-lg font-medium text-white">{username}</h3>

      <div class="flow-root">
        <ul class="-m-1 flex flex-wrap">
          <li class="p-1 leading-none">
            <a href="#" class="text-xs font-medium text-gray-300"> Twitter </a>
          </li>

          <li class="p-1 leading-none">
            <a href="#" class="text-xs font-medium text-gray-300"> GitHub </a>
          </li>

          <li class="p-1 leading-none">
            <a href="#" class="text-xs font-medium text-gray-300">Website</a>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <ul class="mt-4 space-y-2">
    <li>
      <a href="#" class="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
        <strong class="font-medium text-white">Project A</strong>

        <p class="mt-1 text-xs font-medium text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime consequuntur deleniti,
          unde ab ut in!
        </p>
      </a>
    </li>

    <li>
      <a href="#" class="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
        <strong class="font-medium text-white">Project B</strong>

        <p class="mt-1 text-xs font-medium text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente cumque saepe sit.
        </p>
      </a>
    </li>
  </ul>
</article>
  )
}

export default Card