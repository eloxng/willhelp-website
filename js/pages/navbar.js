// This is your "navbar object"
function Navbar() {
    return `
  <header class="fixed top-0 left-0 w-full bg-base-100 shadow-md z-[9999]">
    <div class="container mx-auto flex justify-between items-center p-4">
      <!-- Logo + Name -->
      <div class="flex items-center space-x-3">
        <img src="assets/logo.png" alt="Company Icon" class="w-10 h-10">
        <h1 class="text-xl font-bold">WILL HELP</h1>
      </div>
  
      <!-- Desktop Menu -->
      <nav class="hidden md:flex space-x-6">
        <a href="#about" class="hover:text-primary transition">About</a>
        <a href="#services" class="hover:text-primary transition">Services</a>
        <a href="#portfolio" class="hover:text-primary transition">Portfolio</a>
        <a href="#contact" class="hover:text-primary transition">Contact</a>
      </nav>
  
      <!-- Mobile menu toggle -->
      <div class="md:hidden">
        <label for="menu-toggle" class="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" 
               viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </label>
      </div>
    </div>
  
    <!-- Mobile Menu -->
    <div id="mobile-menu" class="md:hidden bg-base-200">
      <div class="flex flex-col items-center p-4 space-y-3">
        <a href="#about" class="btn btn-ghost w-full text-center">About</a>
        <a href="#services" class="btn btn-ghost w-full text-center">Services</a>
        <a href="#portfolio" class="btn btn-ghost w-full text-center">Portfolio</a>
        <a href="#contact" class="btn btn-ghost w-full text-center">Contact</a>
      </div>
    </div>
  </header>
  
  <script>
    // Auto-close mobile menu
    const menuLinks = document.querySelectorAll('#mobile-menu a');
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        const menu = document.getElementById('mobile-menu');
        menu.classList.add('hidden');
      });
    });
  </script>
    `;
  }
  