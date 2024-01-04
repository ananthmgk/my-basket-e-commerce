<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Navbar</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.15/dist/tailwind.min.css"
      rel="stylesheet"
    />
  </head>
  <body class="bg-gray-900 text-white">
    <div class="dropdown inline-block relative">
      <button
        class="dropbtn bg-gray-800 text-white font-semibold py-2 px-4 rounded inline-flex items-center"
      >
        <span class="mr-1">Dropdown</span>
      </button>
      <div class="dropdown-content absolute hidden text-black pt-1 w-full">
        <a
          href="#"
          class="bg-white hover:bg-gray-400 text-black font-semibold py-2 px-4 block whitespace-no-wrap"
          >Link 1</a
        >
        <a
          href="#"
          class="bg-white hover:bg-gray-400 text-black font-semibold py-2 px-4 block whitespace-no-wrap"
          >Link 2</a
        >
        <a
          href="#"
          class="bg-white hover:bg-gray-400 text-black font-semibold py-2 px-4 block whitespace-no-wrap"
          >Link 3</a
        >
      </div>
    </div>

    <!-- Add this script at the bottom of your HTML file -->
    <!-- This will make dropdown visible on button click -->
    <!-- You can also use any other JS library or plain JS to achieve this -->
    <!-- This is just a basic example -->
    <script src="//code.jquery.com/jquery.min.js"></script>
    <script type="text/javascript">
      const dropdownButton = document.querySelector(".dropbtn");
      const dropdownContent = document.querySelector(".dropdown-content");

      dropdownButton.addEventListener("click", () => {
        dropdownContent.classList.toggle("show");
      });
    </script>

  </body>

  <style type="text/css">
    /* Add these styles to your CSS */
    /* These styles are for dropdown visibility and appearance */

    .dropdown-content {
      z-index: 1;
    }

    .dropdown:hover .dropdown-content {
      display: block;
    }
    /* .show {
      display: block;
    } */
  </style>
</html>
