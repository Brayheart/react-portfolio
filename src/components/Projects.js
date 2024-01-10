import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <div>
        <header class="flex flex-col gap-3 px-4 text-center sm:px-0 animate-fade-up animate-delay-[100ms]">
            <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold bg-clip-text text-white">Projects</h1>
            <p class="text-white/50">The best way to learn is to build stuff, so I build.</p>
        </header>
        <nav class="container mx-auto bg-black grid items-center justify-center xl:grid-cols-3 gap-2 pt-2 lg:pt-5 pb-8 px-0 sm:px-2">
            <a target="_blank" rel="noreferrer" href="https://brayheart.github.io/Mountain-landing-page/" style={{Opacity: '1', Transform: 'none'}}>
                <article class="relative flex flex-row gap-4 items-center px-4 z-1 rounded-md h-[100px] w-[300px] sm:w-[400px] hover:bg-secondary/50 hover:bg-gray-800 hover:text-white transition duration-150 animate-fade-left animate-delay-[200ms]">
                    <header class="flex flex-col gap-1">
                        <h2 class="text-xl font-bold tracking-tight md:text-lg text-white">Los Angeles Mountains</h2>
                        <p class="text-xs sm:text-sm text-zinc-400 sm:text-md">Showcasing an interactive landing page experience for a fictional outdoor adventure guide.</p>
                    </header>
                </article>
            </a>
            <a target="_blank" rel="noreferrer" href="https://brayheart.github.io/ecommerce-page/" style={{Opacity: '1', Transform: 'none'}}>
                <article class="relative flex flex-row gap-4 items-center px-4 z-1 rounded-md h-[100px] w-[300px] sm:w-[400px] hover:bg-secondary/50 hover:bg-gray-800 hover:text-white transition duration-150 animate-fade-left animate-delay-[300ms]">
                    <header class="flex flex-col gap-1">
                        <h2 class="text-xl font-bold tracking-tight md:text-lg text-white">Ecommerce Page</h2>
                        <p class="text-xs sm:text-sm text-zinc-400 sm:text-md">A mock-up e-commerce platform displaying the product selection and checkout for a sneaker line.</p>
                    </header>
                </article>
            </a>
            <a target="_blank" rel="noreferrer" href="https://brayheart.github.io/huddle-landing-page/" style={{Opacity: '1', Transform: 'none'}}>
                <article class="relative flex flex-row gap-4 items-center px-4 z-1 rounded-md h-[100px] w-[300px] sm:w-[400px] hover:bg-secondary/50 hover:bg-gray-800 hover:text-white transition duration-150 animate-fade-left animate-delay-[400ms]">
                    <header>    
                        <h2 class="text-xl font-bold tracking-tight md:text-lg text-white">Huddle Landing Page</h2>
                        <p class="text-xs sm:text-sm text-zinc-400 sm:text-md">A conceptual design for huddle, a virtual space for engaging community discussions and connection.</p>
                    </header>
                </article>
            </a>
            <div className="mb-4 px-4 animate-fade-left animate-delay-[500ms]">
                <button className="text-gray-500 hover:text-gray-300"><Link to="/projects">See Full Projects Archive</Link> &#x2192; </button>
            </div>
        </nav>
    </div>
  );
};

export default Projects;
