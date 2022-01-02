<template>
  <nav class="bg-gray-800 shadow">
    <div class="px-6 py-6 mx-auto md:flex">
      <div class="flex items-center justify-between">
        <div>
          <a
            class="text-2xl font-bold text-white transition-colors duration-200 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
            href="#"
            >FE</a
          >
        </div>

        <!-- Mobile menu button -->
        <div class="flex md:hidden">
          <button
            type="button"
            class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
            aria-label="toggle menu"
          >
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <div class="ml-auto md:flex md:items-center md:justify-between">
        <div class="flex flex-col px-2 py-3 -mx-4 md:flex-row md:mx-0 md:py-0">
          <a
            href="#"
            class="px-2 py-1 text-sm font-medium text-white transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2"
            >Products</a
          >
          <a
            href="#"
            class="px-2 py-1 text-sm font-medium text-white transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2"
            >My Items</a
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
