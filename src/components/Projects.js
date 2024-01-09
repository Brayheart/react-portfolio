import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <nav class="container mx-auto bg-black grid items-center justify-center xl:grid-cols-3 gap-2 pt-2 lg:pt-5 pb-8 px-0 sm:px-2">
        <a target="_blank" rel="noreferrer" href="https://brayheart.github.io/Mountain-landing-page/" style={{Opacity: '1', Transform: 'none'}}>
            <article class="relative flex flex-row gap-4 items-center px-2 z-1 rounded-md h-[100px] w-[300px] sm:w-[400px] hover:bg-secondary/50">
                <header class="flex flex-col gap-1">
                    <h2 class="text-xl font-bold tracking-tight md:text-lg text-white">Los Angeles Mountains</h2>
                    <p class="text-xs sm:text-sm text-zinc-400 sm:text-md">Showcasing a visually rich and interactive landing page experience for the fictional 'Alpine Heights' outdoor adventure guide.</p>
                </header>
            </article>
        </a>
        <a target="_blank" rel="noreferrer" href="https://brayheart.github.io/ecommerce-page/" style={{Opacity: '1', Transform: 'none'}}>
            <article class="relative flex flex-row gap-4 items-center px-2 z-1 rounded-md h-[100px] w-[300px] sm:w-[400px] hover:bg-secondary/50">
                <header class="flex flex-col gap-1">
                    <h2 class="text-xl font-bold tracking-tight md:text-lg text-white">Ecommerce Page</h2>
                    <p class="text-xs sm:text-sm text-zinc-400 sm:text-md">A mock-up e-commerce platform displaying the seamless journey from product selection to checkout for an exclusive sneaker line.</p>
                </header>
            </article>
        </a>
        <a target="_blank" rel="noreferrer" href="https://brayheart.github.io/huddle-landing-page/" style={{Opacity: '1', Transform: 'none'}}>
            <article class="relative flex flex-row gap-4 items-center px-2 z-1 rounded-md h-[100px] w-[300px] sm:w-[400px] hover:bg-secondary/50">
                <header>    
                    <h2 class="text-xl font-bold tracking-tight md:text-lg text-white">Huddle Landing Page</h2>
                    <p class="text-xs sm:text-sm text-zinc-400 sm:text-md">A conceptual design for 'Community Pulse', a virtual space for engaging community discussions and connection.</p>
                </header>
            </article>
        </a>
        <div className="mb-4">
            <button className="text-gray-500 hover:text-gray-300"><Link to="/projects">See Full Projects Archive</Link> </button>
          </div>
    </nav>
  );
};

export default Projects;
