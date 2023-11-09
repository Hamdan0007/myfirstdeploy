
import { Link } from 'react-scroll';
import Navbar from './Navbar';
import MobileNavbar from "./mobileNavbar";

const  Main=()=>{

  return (
    <>
       
    <Navbar/>
    <MobileNavbar/>
    <div className='px-1' id='home'>

  {/* hero section */}
  <section id="home" className="relative py-20 flex justify-center items-center">
    <div className="mx-auto lg:max-w-7xl w-full md:py-10 md:px-12 px-5 lg:px-5 flex flex-col lg:flex-row gap-10 lg:gap-12">
      <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0 hidden lg:block">
        <span className="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 rounded-3xl bg-green-400 blur-xl opacity-60 lg:opacity-95 lg:block hidden" />
        <span className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-blue-600 blur-xl opacity-80" />
      </div>
      <span className="w-4/12 lg:w-2/12 aspect-square bg-gradient-to-tr from-blue-600 to-green-400 absolute -top-5 lg:left-0 rounded-full skew-y-12 blur-2xl opacity-40 skew-x-12 rotate-90" />
      <div className="relative flex flex-col items-center text-center lg:text-left lg:py-7 xl:py-8 
      lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2">
        <h1 className="text-3xl leading-tight sm:text-4xl md:text-5xl xl:text-6xl
      font-bold text-gray-900">
      You Can't Control the <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-600 from-20% via-blue-600 via-30%">Situation But </span> 
      You Can Control Your <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-600 from-20% via-blue-600 via-30%">Reaction.  </span> ...
        </h1>
        <p className="mt-8 text-gray-700">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores repellat perspiciatis aspernatur
          quis voluptatum porro incidunt,
          libero sequi quos eos velit
        </p>
        <div className="mt-10  w-full flex max-w-md mx-auto lg:mx-0">
          <div className="flex sm:flex-row flex-col gap-5 w-full">
            <form action="#" className="py-1 pl-6 w-full pr-1 flex gap-3 items-center text-gray-600 shadow-lg shadow-gray-200/20
                      border border-gray-400 bg-gray-100 rounded-full ease-linear focus-within  focus-within:border-blue-600">
              <span className="min-w-max pr-2 border-r border-[#e0e0e0]">
                <svg xmlns="http://www.w3.org/2000/svg" width={20} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z" />
                </svg>
              </span>
              <input type="email" name id placeholder="johndoe@gmail.com" className="w-full py-3 outline-none bg-transparent" />
              <button className="flex  justify-center items-center w-max min-w-max sm:w-max px-6 h-12 rounded-full outline-none relative overflow-hidden border duration-300 ease-linear text-white
                          after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 after:bg-[#172554] hover:after:opacity-100 hover:after:scale-[2.5] bg-blue-600 border-transparent hover:border-[#172554]">
                <span className="hidden sm:flex relative z-[5]">
                  Get Started
                </span>
                <span className="flex sm:hidden relative z-[5]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-none mb-10 lg:mx-0 mx-auto max-w-3xl ">
        <img src="https://agencex-astro.vercel.app/images/image1.webp" alt="Hero image" width={2350} height={2359} className="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-none max-h-96" />
      </div>
    </div>
  </section>

 <section className="text-gray-600 body-font px-5">
  <div className="container flex flex-wrap mx-auto items-center">
    <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-[#e0e0e0]">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Pitchfork Kickstarter Taxidermy</h1>
      <p className="leading-relaxed text-base">Locavore cardigan small batch roof party blue bottle blog meggings sartorial jean shorts kickstarter migas sriracha church-key synth succulents. Actually taiyaki neutra, distillery gastropub pok pok ugh.</p>
      <a className="text-blue-500 inline-flex items-center mt-4">Learn More
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </a>
    </div>
    <div className="flex flex-col md:w-1/2 md:pl-12">
      <h2 className="title-font font-semibold text-gray-800 tracking-wider text-sm mb-3">CATEGORIES</h2>
      <nav className="flex flex-wrap list-none -mb-1">
        <li className="lg:w-1/3 mb-1 w-1/2">
          <a className="text-gray-600 hover:text-gray-800">First Link</a>
        </li>
        <li className="lg:w-1/3 mb-1 w-1/2">
          <a className="text-gray-600 hover:text-gray-800">Second Link</a>
        </li>
        <li className="lg:w-1/3 mb-1 w-1/2">
          <a className="text-gray-600 hover:text-gray-800">Third Link</a>
        </li>
        <li className="lg:w-1/3 mb-1 w-1/2">
          <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
        </li>
        <li className="lg:w-1/3 mb-1 w-1/2">
          <a className="text-gray-600 hover:text-gray-800">Fifth Link</a>
        </li>
        <li className="lg:w-1/3 mb-1 w-1/2">
          <a className="text-gray-600 hover:text-gray-800">Sixth Link</a>
        </li>
        <li className="lg:w-1/3 mb-1 w-1/2">
          <a className="text-gray-600 hover:text-gray-800">Seventh Link</a>
        </li>
        <li className="lg:w-1/3 mb-1 w-1/2">
          <a className="text-gray-600 hover:text-gray-800">Eighth Link</a>
        </li>
      </nav>
    </div>
  </div>
</section>

{/* service component */}
<div id="team"  className="section relative pt-20 pb-8 md:pt-16 ">
  <div className="container xl:max-w-6xl mx-auto px-4">
    {/* section header */}
    <header className="text-center mx-auto mb-12">
      <h2 className="text-2xl leading-normal mb-2 font-bold text-blue-600  ">
        <span className="font-light text-black">Our</span> Team
      </h2>
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 60" style={{margin: '0 auto', height: 35}} xmlSpace="preserve">
        <circle cx="50.1" cy="30.4" r={5} className="stroke-primary" style={{fill: 'transparent', strokeWidth: 2, strokeMiterlimit: 10}} />
        <line x1="55.1" y1="30.4" x2={100} y2="30.4" className="stroke-primary" style={{strokeWidth: 2, strokeMiterlimit: 10}} />
        <line x1="45.1" y1="30.4" x2={0} y2="30.4" className="stroke-primary" style={{strokeWidth: 2, strokeMiterlimit: 10}} />
      </svg>
    </header>
    {/* end section header */}
    {/* row */}
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 sm-mx-4 justify-center">
  
      <div className="max-w-full px-4 w-full sm:w-full md:w-full lg:w-full xl:px-6">
        <div className="relative overflow-hidden  mb-12 hover-grayscale-0 wow fadeInUp" data-wow-duration="1s" style={{visibility: 'visible', animationDuration: '1s', animationName: 'fadeInUp'}}>
          {/* team block */}
          <div className="relative overflow-hidden px-6">
            <img src="https://tailone.tailwindtemplate.net/src/img/dummy/avatar1.png" className="max-w-full h-auto mx-auto rounded-full bg-gray-50 grayscale" alt="title image" />
          </div>
          <div className="pt-6 text-center">
            <p className="text-lg leading-normal font-bold mb-1">Joe Antonio</p>
            <p className="text-gray-700 leading-relaxed font-light">Career counseling</p>
            {/* social icon */}
            <div className="mt-2 mb-5 space-x-2">
              <a className="hover:text-blue-700" aria-label="Twitter link" href="#">
                {/* <i class="fab fa-twitter text-twitter"></i> */}
                <svg xmlns="http://www.w3.org/2000/svg" className="inline-block" width="1rem" height="1rem" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z" />
                </svg>
              </a>
              <a className="hover:text-blue-700" aria-label="Facebook link" href="#">
                {/* <i class="fab fa-facebook text-facebook"></i> */}
                <svg xmlns="http://www.w3.org/2000/svg" className="inline-block" width="1rem" height="1rem" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z" />
                </svg>
              </a>
              <a className="hover:text-blue-700" aria-label="Instagram link" href="#">
                {/* <i class="fab fa-instagram text-instagram"></i> */}
                <svg xmlns="http://www.w3.org/2000/svg" className="inline-block" width="1rem" height="1rem" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M349.33,69.33a93.62,93.62,0,0,1,93.34,93.34V349.33a93.62,93.62,0,0,1-93.34,93.34H162.67a93.62,93.62,0,0,1-93.34-93.34V162.67a93.62,93.62,0,0,1,93.34-93.34H349.33m0-37.33H162.67C90.8,32,32,90.8,32,162.67V349.33C32,421.2,90.8,480,162.67,480H349.33C421.2,480,480,421.2,480,349.33V162.67C480,90.8,421.2,32,349.33,32Z" />
                  <path fill="currentColor" d="M377.33,162.67a28,28,0,1,1,28-28A27.94,27.94,0,0,1,377.33,162.67Z" />
                  <path fill="currentColor" d="M256,181.33A74.67,74.67,0,1,1,181.33,256,74.75,74.75,0,0,1,256,181.33M256,144A112,112,0,1,0,368,256,112,112,0,0,0,256,144Z" />
                </svg>
              </a>
              <a className="hover:text-blue-700" aria-label="Linkedin link" href="#">
                {/* <i class="fab fa-linkedin text-linkedin"></i> */}
                <svg xmlns="http://www.w3.org/2000/svg" className="inline-block" width="1rem" height="1rem" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        {/* end team block */}
      </div>
      <div className="flex-shrink max-w-full px-4 w-full sm:w-full md:w-full lg:w-full xl:px-6">
        {/* team block */}
        <div className="relative overflow-hidden  mb-12 hover-grayscale-0 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s" style={{visibility: 'visible', animationDuration: '1s', animationDelay: '0.1s', animationName: 'fadeInUp'}}>
          <div className="relative overflow-hidden px-6">
            <img src="https://tailone.tailwindtemplate.net/src/img/dummy/avatar3.png" className="max-w-full h-auto mx-auto rounded-full bg-gray-50 grayscale" alt="title image" />
          </div>
          <div className="pt-6 text-center">
            <p className="text-lg leading-normal font-bold mb-1">Sarah Daeva</p>
            <p className="text-gray-700 leading-relaxed font-light">Psychologist</p>
            {/* social icon */}
            <div className="mt-2 mb-5 space-x-2">
              <a className="hover:text-blue-700" aria-label="Twitter link" href="#">
                {/* <i class="fab fa-twitter text-twitter"></i> */}
                <svg xmlns="http://www.w3.org/2000/svg" className="inline-block" width="1rem" height="1rem" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z" />
                </svg>
              </a>
              <a className="hover:text-blue-700" aria-label="Facebook link" href="#">
                {/* <i class="fab fa-facebook text-facebook"></i> */}
                <svg xmlns="http://www.w3.org/2000/svg" className="inline-block" width="1rem" height="1rem" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z" />
                </svg>
              </a>
              <a className="hover:text-blue-700" aria-label="Instagram link" href="#">
                {/* <i class="fab fa-instagram text-instagram"></i> */}
                <svg xmlns="http://www.w3.org/2000/svg" className="inline-block" width="1rem" height="1rem" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M349.33,69.33a93.62,93.62,0,0,1,93.34,93.34V349.33a93.62,93.62,0,0,1-93.34,93.34H162.67a93.62,93.62,0,0,1-93.34-93.34V162.67a93.62,93.62,0,0,1,93.34-93.34H349.33m0-37.33H162.67C90.8,32,32,90.8,32,162.67V349.33C32,421.2,90.8,480,162.67,480H349.33C421.2,480,480,421.2,480,349.33V162.67C480,90.8,421.2,32,349.33,32Z" />
                  <path fill="currentColor" d="M377.33,162.67a28,28,0,1,1,28-28A27.94,27.94,0,0,1,377.33,162.67Z" />
                  <path fill="currentColor" d="M256,181.33A74.67,74.67,0,1,1,181.33,256,74.75,74.75,0,0,1,256,181.33M256,144A112,112,0,1,0,368,256,112,112,0,0,0,256,144Z" />
                </svg>
              </a>
              <a className="hover:text-blue-700" aria-label="Linkedin link" href="#">
                {/* <i class="fab fa-linkedin text-linkedin"></i> */}
                <svg xmlns="http://www.w3.org/2000/svg" className="inline-block" width="1rem" height="1rem" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        {/* end team block */}
      </div>
        <div className="flex-shrink max-w-full px-4 w-full sm:w-full md:w-full lg:w-full xl:px-6">
        {/* team block */}
        <div className="relative overflow-hidden  mb-12 hover-grayscale-0 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s" style={{visibility: 'visible', animationDuration: '1s', animationDelay: '0.3s', animationName: 'fadeInUp'}}>
          <div className="relative overflow-hidden px-6">
            <img src="https://tailone.tailwindtemplate.net/src/img/dummy/avatar2.png" className="max-w-full h-auto mx-auto rounded-full bg-gray-50 grayscale" alt="title image" />
          </div>
          <div className="pt-6 text-center">
            <p className="text-lg leading-normal font-bold mb-1">Daniel Emo</p>
            <p className="text-gray-700 leading-relaxed font-light">Clinical psychologist</p>
            {/* social icon */}
            <div className="mt-2 mb-5 space-x-2">
              <a className="hover:text-blue-700" aria-label="Twitter link" href="#">
                {/* <i class="fab fa-twitter text-twitter"></i> */}
                <svg xmlns="http://www.w3.org/2000/svg" className="inline-block" width="1rem" height="1rem" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z" />
                </svg>
              </a>
              <a className="hover:text-blue-700" aria-label="Facebook link" href="#">
                {/* <i class="fab fa-facebook text-facebook"></i> */}
                <svg xmlns="http://www.w3.org/2000/svg" className="inline-block" width="1rem" height="1rem" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z" />
                </svg>
              </a>
              <a className="hover:text-blue-700" aria-label="Instagram link" href="#">
                {/* <i class="fab fa-instagram text-instagram"></i> */}
                <svg xmlns="http://www.w3.org/2000/svg" className="inline-block" width="1rem" height="1rem" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M349.33,69.33a93.62,93.62,0,0,1,93.34,93.34V349.33a93.62,93.62,0,0,1-93.34,93.34H162.67a93.62,93.62,0,0,1-93.34-93.34V162.67a93.62,93.62,0,0,1,93.34-93.34H349.33m0-37.33H162.67C90.8,32,32,90.8,32,162.67V349.33C32,421.2,90.8,480,162.67,480H349.33C421.2,480,480,421.2,480,349.33V162.67C480,90.8,421.2,32,349.33,32Z" />
                  <path fill="currentColor" d="M377.33,162.67a28,28,0,1,1,28-28A27.94,27.94,0,0,1,377.33,162.67Z" />
                  <path fill="currentColor" d="M256,181.33A74.67,74.67,0,1,1,181.33,256,74.75,74.75,0,0,1,256,181.33M256,144A112,112,0,1,0,368,256,112,112,0,0,0,256,144Z" />
                </svg>
              </a>
              <a className="hover:text-blue-700" aria-label="Linkedin link" href="#">
                {/* <i class="fab fa-linkedin text-linkedin"></i> */}
                <svg xmlns="http://www.w3.org/2000/svg" className="inline-block" width="1rem" height="1rem" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        {/* end team block */}
      </div>
      <div className="flex-shrink max-w-full px-4 w-full sm:w-full md:w-full lg:w-full xl:px-6">
        {/* team block */}
        <div className="relative overflow-hidden  mb-12 hover-grayscale-0 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s" style={{visibility: 'visible', animationDuration: '1s', animationDelay: '0.5s', animationName: 'fadeInUp'}}>
          <div className="relative overflow-hidden px-6">
            <img src="https://tailone.tailwindtemplate.net/src/img/dummy/avatar4.png" className="max-w-full h-auto mx-auto rounded-full bg-gray-50 grayscale" alt="title image" />
          </div>
          <div className="pt-6 text-center">
            <p className="text-lg leading-normal font-bold mb-1">Toni Lana</p>
            <p className="text-gray-700 leading-relaxed font-light">Psychotherapist</p>
            {/* social icon */}
            <div className="mt-2 mb-5 space-x-2">
              <a className="hover:text-blue-700" aria-label="Twitter link" href="#">
                {/* <i class="fab fa-twitter text-twitter"></i> */}
                <svg xmlns="http://www.w3.org/2000/svg" className="inline-block" width="1rem" height="1rem" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z" />
                </svg>
              </a>
              <a className="hover:text-blue-700" aria-label="Facebook link" href="#">
                {/* <i class="fab fa-facebook text-facebook"></i> */}
                <svg xmlns="http://www.w3.org/2000/svg" className="inline-block" width="1rem" height="1rem" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z" />
                </svg>
              </a>
              <a className="hover:text-blue-700" aria-label="Instagram link" href="#">
                {/* <i class="fab fa-instagram text-instagram"></i> */}
                <svg xmlns="http://www.w3.org/2000/svg" className="inline-block" width="1rem" height="1rem" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M349.33,69.33a93.62,93.62,0,0,1,93.34,93.34V349.33a93.62,93.62,0,0,1-93.34,93.34H162.67a93.62,93.62,0,0,1-93.34-93.34V162.67a93.62,93.62,0,0,1,93.34-93.34H349.33m0-37.33H162.67C90.8,32,32,90.8,32,162.67V349.33C32,421.2,90.8,480,162.67,480H349.33C421.2,480,480,421.2,480,349.33V162.67C480,90.8,421.2,32,349.33,32Z" />
                  <path fill="currentColor" d="M377.33,162.67a28,28,0,1,1,28-28A27.94,27.94,0,0,1,377.33,162.67Z" />
                  <path fill="currentColor" d="M256,181.33A74.67,74.67,0,1,1,181.33,256,74.75,74.75,0,0,1,256,181.33M256,144A112,112,0,1,0,368,256,112,112,0,0,0,256,144Z" />
                </svg>
              </a>
              <a className="hover:text-blue-700" aria-label="Linkedin link" href="#">
                {/* <i class="fab fa-linkedin text-linkedin"></i> */}
                <svg xmlns="http://www.w3.org/2000/svg" className="inline-block" width="1rem" height="1rem" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        {/* end team block */}
      </div>
      </div>
    {/* end row */}
  </div>
</div>

{/* component */}
<div className="min-h-full pb-12 px-6">
  <div className="w-full bg-blue-600 pt-16 pb-24 text-center rounded-lg">
    <h4 className="text-2xl text-gray-100">Choose the right plan for you</h4>
    <p className="text-sm text-gray-100 mt-2">Pricing built for businesses of all sizes. Choose package that suits your needs.</p>
    <div className="flex items-center justify-center mt-8">
      <button  className="text-gray-800 px-4 py-2 rounded-tl-lg rounded-bl-lg bg-gray-200" >
        Monthly billing
      </button>
      <button className="text-gray-800 px-4 py-2 rounded-tr-lg rounded-br-lg bg-gray-200">
        Annual billing
      </button>
    </div>
  </div>
  <div className="w-full 2xl:w-3/4 flex items-center justify-center px-8 md:px-32 lg:px-16 2xl:px-0 mx-auto -mt-8">
    <div className="w-full grid grid-cols-1 xl:grid-cols-3 gap-8">
      <div className="bg-white shadow-2xl rounded-lg py-4">
        <p className="text-xl text-center font-bold text-blue-600">Basic</p>
        <p className="text-center py-8">
          <span className="text-4xl font-bold text-gray-700">
            $<span x-text="basicPrice">19</span>    
          </span>
          <span className="text-xs uppercase text-gray-500">
            / <span x-text="billingType">month</span>
          </span>
        </p>
        <ul className="border-t border-gray-300 py-8 space-y-6">
          <li className="flex items-center space-x-2 px-8">
            <span className="bg-blue-600 rounded-full p-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </span>
            <span className="text-gray-600 capitalize">Free Setup Guidance</span>
          </li>
          <li className="flex items-center space-x-2 px-8">
            <span className="bg-blue-600 rounded-full p-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </span>
            <span className="text-gray-600 capitalize">Email Support</span>
          </li>
          <li className="flex items-center space-x-2 px-8">
            <span className="bg-blue-600 rounded-full p-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </span>
            <span className="text-gray-600 capitalize">User Management</span>
          </li>
          <li className="flex items-center space-x-2 px-8">
            <span className="bg-blue-600 rounded-full p-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </span>
            <span className="text-gray-600 capitalize">Reports</span>
          </li>
          <li className="flex items-center space-x-2 px-8">
            <span className="bg-gray-300 rounded-full p-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </span>
            <span className="text-gray-400 capitalize">Unlimited Users</span>
          </li>
          <li className="flex items-center space-x-2 px-8">
            <span className="bg-gray-300 rounded-full p-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </span>
            <span className="text-gray-400 capitalize">Data Export</span>
          </li>
          <li className="flex items-center space-x-2 px-8">
            <span className="bg-gray-300 rounded-full p-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </span>
            <span className="text-gray-400 capitalize">Automated Workflows</span>
          </li>
          <li className="flex items-center space-x-2 px-8">
            <span className="bg-gray-300 rounded-full p-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </span>
            <span className="text-gray-400 capitalize">API Access</span>
          </li>
        </ul>
        <div className="flex items-center justify-center mt-6">
          <a href="#" className="bg-blue-600 hover:bg-blue-700 px-8 py-2 text-sm text-gray-200 uppercase rounded font-semibold transition duration-150" title="Purchase">Purchase</a>
        </div>
      </div>
      <div className="bg-white shadow-2xl rounded-lg py-4">
        <p className="text-xl text-center font-bold text-blue-600">Premium</p>
        <p className="text-center py-8">
          <span className="text-4xl font-bold text-gray-700">
            $<span x-text="premiumPrice">29</span>
          </span>
          <span className="text-xs uppercase text-gray-500">
            / <span x-text="billingType">month</span>
          </span>
        </p>
        <ul className="border-t border-gray-300 py-8 space-y-6">
          <li className="flex items-center space-x-2 px-8">
            <span className="bg-blue-600 rounded-full p-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </span>
            <span className="text-gray-600 capitalize">Free Setup Guidance</span>
          </li>
          <li className="flex items-center space-x-2 px-8">
            <span className="bg-blue-600 rounded-full p-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </span>
            <span className="text-gray-600 capitalize">Email Support</span>
          </li>
          <li className="flex items-center space-x-2 px-8">
            <span className="bg-blue-600 rounded-full p-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </span>
            <span className="text-gray-600 capitalize">User Management</span>
          </li>
          <li className="flex items-center space-x-2 px-8">
            <span className="bg-blue-600 rounded-full p-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </span>
            <span className="text-gray-600 capitalize">Reports</span>
          </li>
          <li className="flex items-center space-x-2 px-8">
            <span className="bg-blue-600 rounded-full p-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </span>
            <span className="text-gray-600 capitalize">Unlimited Users</span>
          </li>
          <li className="flex items-center space-x-2 px-8">
            <span className="bg-blue-600 rounded-full p-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </span>
            <span className="text-gray-600 capitalize">Data Export</span>
          </li>
          <li className="flex items-center space-x-2 px-8">
            <span className="bg-gray-300 rounded-full p-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </span>
            <span className="text-gray-400 capitalize">Automated Workflows</span>
          </li>
          <li className="flex items-center space-x-2 px-8">
            <span className="bg-gray-300 rounded-full p-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </span>
            <span className="text-gray-400 capitalize">API Access</span>
          </li>
        </ul>
        <div className="flex items-center justify-center mt-6">
          <a href="#" className="bg-blue-600 hover:bg-blue-700 px-8 py-2 text-sm text-gray-200 uppercase rounded font-semibold transition duration-150" title="Purchase">Purchase</a>
        </div>
      </div>
      <div className="bg-white shadow-2xl rounded-lg py-4">
        <p className="text-xl text-center font-bold text-blue-600">Pro</p>
        <p className="text-center py-8">
          <span className="text-4xl font-bold text-gray-700">
            $<span x-text="proPrice">39</span>
          </span>
          <span className="text-xs uppercase text-gray-500">
            / <span x-text="billingType">month</span>
          </span>
        </p>
        <ul className="border-t border-gray-300 py-8 space-y-6">
          <li className="flex items-center space-x-2 px-8">
            <span className="bg-blue-600 rounded-full p-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </span>
            <span className="text-gray-600 capitalize">Free Setup Guidance</span>
          </li>
          <li className="flex items-center space-x-2 px-8">
            <span className="bg-blue-600 rounded-full p-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </span>
            <span className="text-gray-600 capitalize">Email Support</span>
          </li>
          <li className="flex items-center space-x-2 px-8">
            <span className="bg-blue-600 rounded-full p-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </span>
            <span className="text-gray-600 capitalize">User Management</span>
          </li>
          <li className="flex items-center space-x-2 px-8">
            <span className="bg-blue-600 rounded-full p-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </span>
            <span className="text-gray-600 capitalize">Reports</span>
          </li>
          <li className="flex items-center space-x-2 px-8">
            <span className="bg-blue-600 rounded-full p-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </span>
            <span className="text-gray-600 capitalize">Unlimited Users</span>
          </li>
          <li className="flex items-center space-x-2 px-8">
            <span className="bg-blue-600 rounded-full p-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </span>
            <span className="text-gray-600 capitalize">Data Export</span>
          </li>
          <li className="flex items-center space-x-2 px-8">
            <span className="bg-blue-600 rounded-full p-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </span>
            <span className="text-gray-600 capitalize">Automated Workflows</span>
          </li>
          <li className="flex items-center space-x-2 px-8">
            <span className="bg-blue-600 rounded-full p-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </span>
            <span className="text-gray-600 capitalize">API Access</span>
          </li>
        </ul>
        <div className="flex items-center justify-center mt-6">
          <a href="#" className="bg-blue-600 hover:bg-blue-700 px-8 py-2 text-sm text-gray-200 uppercase rounded font-semibold transition duration-150" title="Purchase">Purchase</a>
        </div>
      </div>
    </div>
  </div>
</div>


 
{/* Aboute us */}

<section id="about" class="text-gray-600 body-font px-16">
  <div class="container px-5 py-24 mx-auto">
    <div class="text-center mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium title-font text-blue-600 mb-4">Raw Denim Heirloom Man Braid</h1>
      <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p>
      <div class="flex mt-6 justify-center">
        <div class="w-16 h-1 rounded-full bg-blue-500 inline-flex"></div>
      </div>
    </div>
    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
      <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div class="w-20 h-20 inline-flex items-center justify-center rounded-full  text-blue-500 mb-5 flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        </div>
        <div class="flex-grow">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Shooting Stars</h2>
          <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
          <a class="mt-3 text-blue-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div class="w-20 h-20 inline-flex items-center justify-center rounded-full  text-blue-500 mb-5 flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
            <circle cx="6" cy="6" r="3"></circle>
            <circle cx="6" cy="18" r="3"></circle>
            <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
          </svg>
        </div>
        <div class="flex-grow">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-3">The Catalyzer</h2>
          <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
          <a class="mt-3 text-blue-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div class="w-20 h-20 inline-flex items-center justify-center rounded-full  text-blue-500 mb-5 flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        <div class="flex-grow">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Neptune</h2>
          <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
          <a class="mt-3 text-blue-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
    <button class="flex mx-auto mt-16 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded-full text-lg">Button</button>
  </div>
</section>



{/**Footer */}
<footer className="text-gray-600 body-font  ">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
      <span className="ml-3 text-xl text-blue-600 ">Zoxean Cares</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-[#e0e0e0] sm:py-2 sm:mt-0 mt-4">© 2020 zoxean —
      <a href="https://twitter.com/knyttneve" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@knyttneve</a>
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a className="text-gray-500">
        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
        </svg>
      </a>
      <a className="ml-3 text-gray-500">
        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
        </svg>
      </a>
      <a className="ml-3 text-gray-500">
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
          <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
        </svg>
      </a>
      <a className="ml-3 text-gray-500">
        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0} className="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
          <circle cx={4} cy={4} r={2} stroke="none" />
        </svg>
      </a>
    </span>
  </div>
</footer>


</div>
        </>
  )
}

export default Main
