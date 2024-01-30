import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <div>
        <header class="flex flex-col gap-3 px-4 text-center sm:px-0 animate-fade-up sm:animate-delay-[200ms] animate-delay-[700ms]">
            <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold bg-clip-text text-white">Projects</h1>
            <p class="text-white/50">The best way to learn is to build stuff, so I build.</p>
        </header>
        <nav class="container mx-auto bg-black grid items-center justify-center xl:grid-cols-3 gap-2 pt-2 lg:pt-5 pb-8 px-0 sm:px-2 text-center sm:text-start">
            <a target="_blank" rel="noreferrer" href="https://brayheart.github.io/Mountain-landing-page/" style={{Opacity: '1', Transform: 'none'}}>
                <article class="article relative flex flex-row gap-5 items-center px-4 z-1 rounded-md h-[100px] w-[300px] sm:w-[400px] hover:bg-secondary/50 hover:bg-gray-800 hover:text-white transition duration-150 animate-fade-left sm:animate-delay-[400ms] animate-delay-[900ms]">
                <i class="fa-solid fa-mountain fa-2x"></i>
                    <header class="flex flex-col gap-1 text-start">
                        <h2 class="text-xl font-bold tracking-tight md:text-lg text-white">Los Angeles Mountains</h2>
                        <p class="text-xs sm:text-sm text-zinc-400 sm:text-md">An interactive landing page experience for a fictional outdoor adventure guide.</p>
                    </header>
                </article>
            </a>
            <a target="_blank" rel="noreferrer" href="https://brayheart.github.io/ecommerce-page/" style={{Opacity: '1', Transform: 'none'}}>
                <article class="article relative flex flex-row gap-5 items-center px-4 z-1 rounded-md h-[100px] w-[300px] sm:w-[400px] hover:bg-secondary/50 hover:bg-gray-800 hover:text-white transition duration-150 animate-fade-left sm:animate-delay-[600ms] animate-delay-[1100ms]">
                    <i class="fa-solid fa-cart-shopping fa-2x"></i>
                    <header class="flex flex-col gap-1 text-start">
                        <h2 class="text-xl font-bold tracking-tight md:text-lg text-white">Checkout Page</h2>
                        <p class="text-xs sm:text-sm text-zinc-400 sm:text-md">Streamline your e-commerce transactions with an efficient, user-friendly checkout process.</p>
                    </header>
                </article>  
            </a>
            <a target="_blank" rel="noreferrer" href="https://brayheart.github.io/Spruce-Client/" style={{Opacity: '1', Transform: 'none'}}>
                <article class="article relative flex flex-row gap-5 items-center px-4 z-1 rounded-md h-[100px] w-[300px] sm:w-[400px] hover:bg-secondary/50 hover:bg-gray-800 hover:text-white transition duration-150 animate-fade-left sm:animate-delay-[800ms] animate-delay-[1300ms]">
                <i class="fa-solid fa-table fa-2x"></i>
                    <header class="flex flex-col gap-1 text-start">
                        <h2 class="text-xl font-bold tracking-tight md:text-lg text-white">Spruce Booking</h2>
                        <p class="text-xs sm:text-sm text-zinc-400 sm:text-md">A booking platform with dynamic table sorting, input validation, and pagination.</p>
                    </header>
                </article>
            </a>
            <div className="mb-4 px-4 animate-fade-left sm:animate-delay-[600ms] md:animate-delay-[1000ms] animate-delay-[1500ms]">
                <button className="text-gray-400 hover:text-gray-300"><Link to="/projects">See Full Projects Archive</Link> &#x2192; </button>
            </div>
        </nav>
    </div>
  );
};

export default Projects;
