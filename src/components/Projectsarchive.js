import React from 'react';
import { Link } from 'react-router-dom';

const ProjectsArchive = () => {
  return (
<div className="bg-black text-white min-h-screen">
  {/* Go Back Button */}
  <div className="container mx-auto px-4 py-8">
    <div className="mb-8 animate-fade-left">
      <Link to="/" className="text-gray-400 hover:text-gray-300 items-center font-semibold">
        ← Go Back
      </Link>
    </div>
    <h2 className="text-2xl font-bold mb-4 animate-fade-left">Web Applications</h2>
    <div className="grid items-center justify-center xl:grid-cols-3 gap-5 pt-2 lg:pt-5 pb-8 px-0 sm:px-2">
      <a target="_blank" rel="noreferrer" href="https://brayheart.github.io/Spruce-Client/" style={{Opacity: '1', Transform: 'none'}}>
        <article class="article relative flex flex-row gap-5 items-center px-4 z-1 rounded-md h-[100px] w-[300px] sm:w-[400px] hover:bg-secondary/50 hover:bg-gray-800 hover:text-white transition duration-150 animate-fade-left sm:animate-delay-[200ms]">
        <i class="fa-solid fa-table fa-2x"></i>
            <header class="flex flex-col gap-1 text-start">
                <h2 class="text-xl font-bold tracking-tight md:text-lg text-white">Spruce Booking</h2>
                <p class="text-xs sm:text-sm text-zinc-400 sm:text-md">A booking platform with dynamic table sorting, input validation, and pagination.</p>
            </header>
        </article>
      </a>
    </div>

    <h2 className="text-2xl font-bold mb-4 animate-fade-left">Page Design</h2>
    <div className="grid items-center justify-center xl:grid-cols-3 gap-5 pt-2 lg:pt-5 pb-8 px-0 sm:px-2">
      <a target="_blank" rel="noreferrer" href="https://brayheart.github.io/Mountain-landing-page/" style={{Opacity: '1', Transform: 'none'}}>
        <article class="relative flex flex-row gap-5 items-center px-4 z-1 rounded-md h-[100px] w-[300px] sm:w-[400px] hover:bg-secondary/50 hover:bg-gray-800 hover:text-white transition duration-150 animate-fade-left animate-delay-[200ms]">
        <i class="fa-solid fa-mountain fa-2x"></i>
            <header class="flex flex-col gap-1">
                <h2 class="text-xl font-bold tracking-tight md:text-lg text-white">Los Angeles Mountains</h2>
                <p class="text-xs sm:text-sm text-zinc-400 sm:text-md">Showcasing an interactive landing page experience for a fictional outdoor adventure guide.</p>
            </header>
        </article>
      </a>
      <a target="_blank" rel="noreferrer" href="https://brayheart.github.io/Citizens-Bank/" style={{Opacity: '1', Transform: 'none'}}>
        <article class="relative flex flex-row gap-5 items-center px-4 z-1 rounded-md h-[100px] w-[300px] sm:w-[400px] hover:bg-secondary/50 hover:bg-gray-800 hover:text-white transition duration-150 animate-fade-left animate-delay-[200ms]">
          <i class="fa-solid fa-building-columns fa-2x"></i>
            <header class="flex flex-col gap-1">
                <h2 class="text-xl font-bold tracking-tight md:text-lg text-white">Citizens Landing Page</h2>
                <p class="text-xs sm:text-sm text-zinc-400 sm:text-md">Landingpage showcase of banking career opportunities with a focus on growth and support.</p>
            </header>
        </article>
      </a>
      <a target="_blank" rel="noreferrer" href="https://brayheart.github.io/huddle-landing-page/" style={{Opacity: '1', Transform: 'none'}}>
        <article class="relative flex flex-row gap-5 items-center px-4 z-1 rounded-md h-[100px] w-[300px] sm:w-[400px] hover:bg-secondary/50 hover:bg-gray-800 hover:text-white transition duration-150 animate-fade-left animate-delay-[200ms]">
          <i class="fa-solid fa-people-group fa-2x"></i>
            <header class="flex flex-col gap-1">
                <h2 class="text-xl font-bold tracking-tight md:text-lg text-white">Huddle</h2>
                <p class="text-xs sm:text-sm text-zinc-400 sm:text-md">A community-building platform's landing page emphasizing user engagement.</p>
            </header>
        </article>
      </a>
      <a target="_blank" rel="noreferrer" href="https://brayheart.github.io/sunnyside/" style={{Opacity: '1', Transform: 'none'}}>
        <article class="relative flex flex-row gap-5 items-center px-4 z-1 rounded-md h-[100px] w-[300px] sm:w-[400px] hover:bg-secondary/50 hover:bg-gray-800 hover:text-white transition duration-150 animate-fade-left animate-delay-[200ms]">
            <i class="fa-regular fa-sun fa-2x"></i>
            <header class="flex flex-col gap-1">
                <h2 class="text-xl font-bold tracking-tight md:text-lg text-white">SunnySide</h2>
                <p class="text-xs sm:text-sm text-zinc-400 sm:text-md">Creative agency's portfolio highlighting brand transformation services.</p>
            </header>
        </article>
      </a>
    </div>

    {/* Web Applications Section */}
    <h2 className="text-2xl font-bold mb-4 animate-fade-left">UI Elements</h2>
    <div className="grid items-center justify-center xl:grid-cols-3 gap-5 pt-2 lg:pt-5 pb-8 px-0 sm:px-2">
    <a target="_blank" rel="noreferrer" href="https://brayheart.github.io/product-card/" style={{Opacity: '1', Transform: 'none'}}>
        <article class="relative flex flex-row gap-5 items-center px-4 z-1 rounded-md h-[100px] w-[300px] sm:w-[400px] hover:bg-secondary/50 hover:bg-gray-800 hover:text-white transition duration-150 animate-fade-left animate-delay-[200ms]">
            <i class="fa-solid fa-spray-can-sparkles fa-2x"></i>
            <header class="flex flex-col gap-1">
                <h2 class="text-xl font-bold tracking-tight md:text-lg text-white">Essence Display</h2>
                <p class="text-xs sm:text-sm text-zinc-400 sm:text-md">Showcase luxury fragrances with a sleek product card, emphasizing visual appeal.</p>
            </header>
        </article>
      </a>
    <a target="_blank" rel="noreferrer" href="https://brayheart.github.io/column-preview-card-component/" style={{Opacity: '1', Transform: 'none'}}>
        <article class="relative flex flex-row gap-5 items-center px-4 z-1 rounded-md h-[100px] w-[300px] sm:w-[400px] hover:bg-secondary/50 hover:bg-gray-800 hover:text-white transition duration-150 animate-fade-left animate-delay-[200ms]">
            <i class="fa-solid fa-car-side fa-2x"></i>
            <header class="flex flex-col gap-1">
                <h2 class="text-xl font-bold tracking-tight md:text-lg text-white">Choice Trio</h2>
                <p class="text-xs sm:text-sm text-zinc-400 sm:text-md">Three-part card set illustrating options with clarity and visual distinction.</p>
            </header>
        </article>
      </a>
    </div>

    <h2 className="text-2xl font-bold mb-4 animate-fade-left">Engaging Features</h2>
    <div className="grid items-center justify-center xl:grid-cols-3 gap-5 pt-2 lg:pt-5 pb-8 px-0 sm:px-2">
      <a target="_blank" rel="noreferrer" href="https://brayheart.github.io/git-finder/" style={{Opacity: '1', Transform: 'none'}}>
        <article class="relative flex flex-row gap-5 items-center px-4 z-1 rounded-md h-[100px] w-[300px] sm:w-[400px] hover:bg-secondary/50 hover:bg-gray-800 hover:text-white transition duration-150 animate-fade-left animate-delay-[200ms]">
            <i class="fa-solid fa-code fa-2x"></i>
            <header class="flex flex-col gap-1">
                <h2 class="text-xl font-bold tracking-tight md:text-lg text-white">Code Explorer</h2>
                <p class="text-xs sm:text-sm text-zinc-400 sm:text-md">Dive into repositories with a streamlined GitHub search interface.</p>
            </header>
        </article>
      </a>
      <a target="_blank" rel="noreferrer" href="https://brayheart.github.io/ecommerce-page/" style={{Opacity: '1', Transform: 'none'}}>
        <article class="relative flex flex-row gap-5 items-center px-4 z-1 rounded-md h-[100px] w-[300px] sm:w-[400px] hover:bg-secondary/50 hover:bg-gray-800 hover:text-white transition duration-150 animate-fade-left animate-delay-[200ms]">
            <i class="fa-solid fa-cart-shopping fa-2x"></i>
            <header class="flex flex-col gap-1">
                <h2 class="text-xl font-bold tracking-tight md:text-lg text-white">Checkout Page</h2>
                <p class="text-xs sm:text-sm text-zinc-400 sm:text-md">Streamline your e-commerce transactions with an efficient, user-friendly checkout process.</p>
            </header>
        </article>  
      </a>
    </div>
  </div>
</div>
  );
};

export default ProjectsArchive;

