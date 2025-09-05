import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-[#fff] min-h-screen flex flex-col items-center pb-0">
      <Header />
      {/* Hero Section */}
      <section className="w-full px-3">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 bg-white rounded-2xl shadow-sm overflow-hidden">
          {/* Left: Text Content */}
          <div className="bg-[#f7f5ef] p-10 flex flex-col justify-center gap-6 border-r border-[#e5e5e5]">
            <h1 className="text-3xl md:text-4xl font-semibold leading-tight mb-2">
              Enhance visibility,<br />
              tourism & cultural<br />
              attraction in Italy.
            </h1>
            <p className="text-gray-600 text-base mb-4">
              In quis eleifend mi. Ut tincidunt bibendum mattis. Quisque ultrices nulla pharetra risus feugiat, eget pellentesque erat vulputate.
            </p>
            <button className="w-max bg-[#4A5D52] text-white px-7 py-2.5 rounded-full cursor-pointer font-medium hover:bg-[#1e3226] transition text-sm">
              Get Started Now &rarr;
            </button>
          </div>
          {/* Right: Image */}
          <div className="flex items-center justify-center bg-white">
            <Image
              src="/images/home-banner-img.webp"
              alt="Home"
              width={660}
              height={600}
              className="object-cover w-full h-full rounded-tr-2xl rounded-br-2xl"
              priority
            />
          </div>
        </div>
      </section>
      {/* Why Choose Us Section */}
      <section className="w-full flex justify-center py-16 px-2">
        <div className="w-full max-w-6xl bg-white px-10 py-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="pr-0 md:pr-10 flex flex-col items-start">
            <h2 className="text-2xl md:text-2xl font-semibold mb-6">Why choose Spotted?</h2>
            <img
              src="/images/why-1.webp"
              alt="Market"
              width={330}
              height={220}
              className="rounded-xl object-cover w-full"
            />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between gap-20 mb-2">
              <div>
                <img
                  src="/images/why-2.webp"
                  alt="Food"
                  width={280}
                  height={150}
                  className="rounded-xl object-cover"
                />
              </div>
              <div className="self-end">  
                <img
                  src="/images/why-3.webp"
                  alt="Local"
                  width={150}
                  height={50}
                  className="rounded-xl object-cover"
                />
              </div>  
            </div>
            <p className="text-gray-600 text-base mt-2">
              Nulla o dapibus sem, sit amet tristique odio. Aliquam risus arcu, faucibus accumsan congue vitae, pharetra ut ipsum. Phasellus varius facilisis velit sed dignissim. Fusce convallis nec leo vitae convallis. Aliquam tellus ipsum, sollicitudin eu faucibus eget, placerat et odio. Nulla vel pellentesque elit. Pellentesque tempus nisi eget mattis varius. Sed dapibus vel ipsum nec eleifend.
            </p>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="w-full max-w-7xl rounded-2xl flex justify-center bg-[#f7f5ef] mb-20 py-10 px-2">
        <div>
          <h2 className="text-2xl text-center md:text-2xl  font-semibold mb-6">Some unique features</h2>
          <div className="w-full px-8 py-8 flex flex-col md:flex-row gap-8">
            <div className="flex-1 flex flex-col items-start text-left gap-2">
              <div className="bg-green-100 text-green-700 rounded-full w-10 h-10 flex items-center justify-center mb-2">
                 <img
                  src="/images/product-cart-icon.svg"
                  alt="Local"
                  width={150}
                  height={50}
                  className="rounded-xl object-cover"
                />
              </div>
              <h3 className="font-semibold">E-commerce for local products</h3>
              <p className="text-gray-600 text-sm">Fusce tempus sem et lorem sollicitudin, vel mattis tortor commodo. Curabitur vestibulum consectetur eros, congue ornare turpis suscipit nec..</p>
            </div>
            <div className="flex-1 flex flex-col items-start text-left gap-2">
              <div className="bg-green-100 text-green-700 rounded-full w-10 h-10 flex items-center justify-center mb-2">
                <img
                    src="/images/crowdfunding-icon.svg"
                    alt="Local"
                    width={150}
                    height={50}
                    className="rounded-xl object-cover"
                  />
              </div>
              <h3 className="font-semibold">Crowdsourcing capabilities</h3>
              <p className="text-gray-600 text-sm">Praesent mollis purus non imperdiet blandit. Proin ipsum ligula, efficitur non sagittis id, dapibus eu felis. Nam sed felis non est auctor hendrerit et in ante.</p>
            </div>
            <div className="flex-1 flex flex-col items-start text-left gap-2">
              <div className="bg-green-100 text-green-700 rounded-full w-10 h-10 flex items-center justify-center mb-2">
                 <img
                  src="/images/map-detail-icon.svg"
                  alt="Local"
                  width={150}
                  height={50}
                  className="rounded-xl object-cover"
                />
              </div>
              <h3 className="font-semibold">Map with detail POIs</h3>
              <p className="text-gray-600 text-sm">Vestibulum nec est et ipsum eleifend molestie nec ut nisl. Nunc diam odio, varius in fermentum a, suscipit in turpis. Nam vel risus quis dui lacinia placerat.</p>
            </div>
          </div>
        </div>  
      </section>
      <section className="w-full flex justify-center bg-[#161C2D] py-16 pb-10 px-2 font-gilroy">
        <div className="w-full max-w-6xl  rounded-2xl text-white">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-center mb-2">Pricing & Plans</h2>
          <p className="text-gray-300 text-center mb-10 max-w-xl mx-auto">
            With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
          </p>
          {/* Plans */}
          <div className="flex  max-w-5xl mx-auto  flex-col md:flex-row gap-6 md:gap-8 justify-center mb-10">
            {/* Basic */}
            <div className="bg-white text-[#232734] rounded-xl p-8 flex-1 flex flex-col items-left border border-gray-300 shadow min-w-[260px]">
              <div className="uppercase text-xs font-bold tracking-widest mb-4 text-[#4A5D52]">Basic</div>
              <div className="flex items-end mb-4">
                <span className="text-4xl font-bold"><span className="text-2xl font-bold">$</span>19</span>
                <span className="text-base font-medium ml-2.5 mb-1"> / month</span>
              </div>
              <div className="text-md text-[var(--gray)] mb-6">billed monthly</div>
              <ul className="w-full text-sm mb-8 space-y-3">
                <li className="flex items-center gap-2">
                   <span className="font-semibold">Digital Infopoint </span>  
                    <Image
                      src="/images/check-icon-green.svg"
                      alt="Home"
                      width={10}
                      height={10}
                      className="w-6 h-6 ml-auto"
                      priority
                    />
                </li>
                <li className="flex items-center gap-2">
                   <span className="font-semibold">AI Chatbot</span> <span className="ml-auto text-sm text-[#060608]"> Limited</span>
                </li>
                <li className="flex items-center gap-2">
                   <span className="font-semibold">Interactive Map</span> <span className="ml-auto text-sm text-[#060608]">10 POIs</span>
                </li>
                <li className="flex items-center gap-2">
                   <span className="font-semibold">Booking System</span> <span className="ml-auto text-sm text-[#060608]">Inquiry Only</span>
                </li>
                <li className="flex items-center gap-2">
                   <span className="font-semibold">E-commerce</span> <span className="ml-auto text-sm text-[#060608]">1-2 Products</span>
                </li>
                <li className="flex items-center gap-2">
                 <span className="font-semibold">Crowdfunding</span> 
                   <Image
                      src="/images/cross-icon-red.svg"
                      alt="Home"
                      width={10}
                      height={10}
                      className="w-4 h-4 ml-auto"
                      priority
                    />
                </li>
                <li className="flex items-center gap-2">
                   <span className="font-semibold">User Access</span> <span className="ml-auto text-sm text-[#060608]">1 Admin</span>
                </li>
                <li className="flex items-center gap-2">
                   <span className="font-semibold">Translation</span> <span className="ml-auto text-sm text-[#060608]">Italian Only</span>
                </li>
                <li className="flex items-center gap-2">
                   <span className="font-semibold">Newsletter</span> 
                     <Image
                      src="/images/cross-icon-red.svg"
                      alt="Home"
                      width={10}
                      height={10}
                      className="w-4 h-4 ml-auto"
                      priority
                    />
                </li>
                <li className="flex items-center gap-2">
                   <span className="font-semibold">Pages</span> <span className="ml-auto text-sm text-[#060608]">Up to 5</span>
                </li>
              </ul>
              <button className="w-full border border-[#4A5D52] rounded-full py-2 font-medium text-[#4A5D52] cursor-pointer hover:bg-gray-100 transition">Buy Now →</button>
            </div>
            {/* Pro */}
            <div className="bg-white text-[#232734] rounded-xl p-8 flex-1 flex flex-col items-left border border-gray-300 shadow min-w-[260px]">
              <div className="uppercase text-xs font-bold tracking-widest mb-4 text-[#4A5D52]">Pro</div>
              <div className="flex items-end mb-4">
                <span className="text-4xl font-bold"><span className="text-2xl font-bold">$</span>49</span>
                <span className="text-base font-medium ml-1 mb-1"> / month</span>
              </div>
              <div className="text-md text-[var(--gray)] mb-6">billed monthly</div>
              <ul className="w-full text-sm mb-8 space-y-3">
                <li className="flex items-center gap-2">
                   <span className="font-semibold">Digital Infopoint</span>
                    <Image
                      src="/images/check-icon-green.svg"
                      alt="Home"
                      width={10}
                      height={10}
                      className="w-4 h-4 ml-auto"
                      priority
                    />
                </li>
                <li className="flex items-center gap-2">
                 <span className="font-semibold">AI Chatbot</span> 
                 <Image
                      src="/images/check-icon-green.svg"
                      alt="Home"
                      width={10}
                      height={10}
                      className="w-4 h-4 ml-auto"
                      priority
                    />
                </li>
                <li className="flex items-center gap-2">
                   <span className="font-semibold">Interactive Map</span> <span className="ml-auto text-sm text-[#060608]">25 POIs</span>
                </li>
                <li className="flex items-center gap-2">
                   <span className="font-semibold">Booking System</span> <span className="ml-auto text-sm text-[#060608]">Full Calendar</span>
                </li>
                <li className="flex items-center gap-2">
                   <span className="font-semibold">E-commerce</span> <span className="ml-auto text-sm text-[#060608]">10 Products</span>
                </li>
                <li className="flex items-center gap-2">
                   <span className="font-semibold">Crowdfunding</span> 
                    <Image
                      src="/images/cross-icon-red.svg"
                      alt="Home"
                      width={10}
                      height={10}
                      className="w-4 h-4 ml-auto"
                      priority
                    />
                </li>
                <li className="flex items-center gap-2">
                   <span className="font-semibold">User Access</span> <span className="ml-auto text-sm text-[#060608]">Up to 5 users</span>
                </li>
                <li className="flex items-center gap-2">
                   <span className="font-semibold">Translation</span> <span className="ml-auto text-sm text-[#060608]">Italian + English</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-semibold">Newsletter</span> 
                  <Image
                    src="/images/cross-icon-red.svg"
                    alt="Home"
                    width={10}
                    height={10}
                    className="w-4 h-4 ml-auto"
                    priority
                  />
                </li>
                <li className="flex items-center gap-2">
                   <span className="font-semibold">Pages</span> <span className="ml-auto text-sm text-[#060608]">Up to 10</span>
                </li>
              </ul>
              <button className="w-full border border-[#4A5D52] rounded-full py-2 font-medium cursor-pointer text-[#4A5D52] hover:bg-gray-100 transition">Buy Now →</button>
            </div>
            {/* Premium */}
            <div className="bg-white text-[#232734] rounded-xl p-8 flex-1 flex flex-col items-left border border-gray-300 shadow min-w-[260px]">
              <div className="uppercase text-xs font-bold tracking-widest mb-4 text-[#4A5D52]">Premium</div>
              <div className="flex items-end mb-4">
                <span className="text-4xl font-bold"><span className="text-2xl font-bold">$</span>99</span>
                <span className="text-base font-medium ml-1 mb-1"> / month</span>
              </div>
              <div className="text-md text-[var(--gray)] mb-6">billed monthly</div>
              <ul className="w-full text-sm mb-8 space-y-3">
                <li className="flex items-center gap-2">
                 <span className="font-semibold">Digital Infopoint</span>
                </li>
                <li className="flex items-center gap-2">
                   <span className="font-semibold">AI Chatbot</span> <span className="ml-auto text-sm text-[#060608]">Unlimited</span>
                </li>
                <li className="flex items-center gap-2">
                   <span className="font-semibold">Interactive Map</span> <span className="ml-auto text-sm text-[#060608]">Unlimited</span>
                </li>
                <li className="flex items-center gap-2">
                   <span className="font-semibold">Booking System</span> <span className="ml-auto text-sm text-[#060608]">Full Calendar</span>
                </li>
                <li className="flex items-center gap-2">
                   <span className="font-semibold">E-commerce</span> <span className="ml-auto text-sm text-[#060608]">20 Products + Variants</span>
                </li>
                <li className="flex items-center gap-2">
                   <span className="font-semibold">Crowdfunding</span>
                </li>
                <li className="flex items-center gap-2">
                   <span className="font-semibold">User Access</span> <span className="ml-auto text-sm text-[#060608]">Up to 10 users</span>
                </li>
                <li className="flex items-center gap-2">
                   <span className="font-semibold">Translation</span> <span className="ml-auto text-sm text-[#060608]">Multilingual</span>
                </li>
                <li className="flex items-center gap-2">
                   <span className="font-semibold">Newsletter</span>
                </li>
                <li className="flex items-center gap-2">
                   <span className="font-semibold">Pages</span> <span className="ml-auto text-sm text-[#060608]">10+</span>
                </li>
              </ul>
              <button className="w-full border border-[#4A5D52] rounded-full py-2 cursor-pointer font-medium text-[#4A5D52] hover:bg-gray-100 transition">Buy Now →</button>
            </div>
          </div>
          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div>
              <div className="flex items-start gap-4 mb-8">
                <div className="rounded-full  flex items-center justify-center text-green-400 font-bold text-lg">
                  <img
                    src="/images/question-icon.svg"
                    alt="Local"
                    width={40}
                    height={40}
                    className="rounded-xl object-cover"
                  />
                </div>
                <div style={{ width: 'calc(100% - 40px)' }}>
                  <div className="font-semibold mb-4 text-white">In in sollicitudin lacus. Praesent ut ex nunc.</div>
                  <div className="text-[#E5E5E5] text-sm">
                    Mauris commodo quam dictum, sit amet venenatis erat molestie nec. Fusce faucibus ornare ut tincidunt. Nunc ullamcorper mauris et amet mi luctus aliquet. Sed non lacinia lectus.
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-full  flex items-center justify-center text-green-400 font-bold text-lg">
                   <img
                    src="/images/question-icon.svg"
                    alt="Local"
                    width={40}
                    height={40}
                    className="rounded-xl object-cover"
                  />
                </div>
                <div style={{ width: 'calc(100% - 40px)' }}>
                  <div className="font-semibold mb-4 text-white">Nulla id commodo massa.</div>
                  <div className="text-[#E5E5E5] text-sm">
                    Vestibulum nec est et ipsum eleifend molestie nec ut mi. Nunc diam odio, varius in fermentum a, suscipit in turpis. Nam vel risus quis dui lacinia placerat. Etiam sodales ipsum id tristique molestie.
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-start gap-4 mb-8">
                <div className="rounded-full  flex items-center justify-center text-green-400 font-bold text-lg">
                   <img
                    src="/images/question-icon.svg"
                    alt="Local"
                    width={40}
                    height={40}
                    className="rounded-xl object-cover"
                  />
                </div>
                <div style={{ width: 'calc(100% - 40px)' }}>
                  <div className="font-semibold mb-4 text-white">Nulla nec tortor suscipit dolor tempus feugiat in vitae nisi.</div>
                  <div className="text-[#E5E5E5] text-sm">
                    Praesent mollis purus non imperdiet blandit. Proin ipsum ligula, efficitur non sagittis et, dapibus eu felis. Nam sed felis non est auctor hendrerit et in ante. Nam cursus diam et.
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-full  flex items-center justify-center text-green-400 font-bold text-lg">
                   <img
                    src="/images/question-icon.svg"
                    alt="Local"
                    width={40}
                    height={40}
                    className="rounded-xl object-cover"
                  />
                </div>
                <div style={{ width: 'calc(100% - 40px)' }}>
                  <div className="font-semibold mb-4 text-white">Fusce tempus sem et lorem sollicitudin.</div>
                  <div className="text-[#E5E5E5] text-sm">
                    Aliquam risus arcu, faucibus accumsan congue vitae, pharetra ut ipsum. Phasellus varius facilisis velit sed dignissim. Fusce convallis nec leo vitae convallis. Aliquam tellus ipsum, sollicitudin eu faucibus eget, placerat et felis.
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Footer */}
          <div className="text-center text-[#fff] text-sm mt-10 pt-8 border-t border-[#E5E5E5]">
            Haven’t got your answer? <a href="#" className="text-white font-medium underline">Contact our support now</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}