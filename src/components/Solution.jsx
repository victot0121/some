import React from 'react'

import Image1 from '../assets/spec (5).png'
import Image2 from '../assets/Group6.png'
import Image3 from '../assets/spec (6).png'
import Image4 from '../assets/Frame 34807.png'


const Solution = () => {




  return (
    <>
      <div>
        <div className="container flex items-center h-screen p-6 mx-auto mt-6 space-y-0 justify-evenly md:space-y-0">
          <div className='flex flex-col px-6 py-6'>
            <h1 className='p-4 mt-6 text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#E975A8] to-[#726CF8]'>Marketing And Sales AI</h1>
            <p className='p-4 text-[#BBBBBB] text-left max-w-2xl'>Marketing And Sales AI
              With our trained AI; predict top quality leads, rank leads, personalized marketing promotion and follow up on customers.
              Request Consultation</p>
            <button className='text-[#ffffff] mt-6 bg-gradient-to-r from-[#E975A8] to-[#726CF8] w-fit px-3 py-3 ml-5 rounded'>Request Consultation</button>
          </div>

          <div className="relative cursor-grab">
            <img src={Image1} alt="" className='absolute top-0 -left-24' />
            <img src={Image2} alt="" width='320px' className='mt-12 mb-12' />
            <img src={Image3} alt="" className='absolute right-1 -bottom-35' />
          </div>
        </div>


        <section class="overflow-hidden text-neutral-700 h-[900px] relative">
          <h1 className='text-center text-4xl p-5 text-transparent bg-clip-text bg-gradient-to-r from-[#E975A8] to-[#726CF8]'>Solution on marketing and sales</h1>

          <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
            <div class="-m-1 flex flex-wrap md:-m-2 mb-[100px]">
              <div class="flex w-1/3 flex-wrap ">
                <div class="w-[230px] p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    src={Image4} />
                  <h2 class="mt-[12px] text-center text-[#BBBBBB]">Predict top quality <br />leads and rank</h2>
                </div>
              </div>
              <div class="flex w-1/3 flex-wrap">
                <div class="w-[230px] p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    src={Image4} />
                  <h2 class="mt-[12px] text-center text-[#BBBBBB]">personalized <br />marketing</h2>
                </div>
              </div>
              <div class="flex w-1/3 flex-wrap">
                <div class="w-[230px] p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    src={Image4} />
                  <h2 class=" mt-[12px] text-center text-[#BBBBBB]">Follow up on<br />customers</h2>
                </div>
              </div>
            </div>
          </div>
          <div class="container mx-auto px-[00px] py-6 lg:px-64 lg:pt-24">
            <div class="-m-1 flex flex-wrap md:-m-2 ">
              <div class="flex w-1/3 flex-wrap">
                <div class="w-[230px] p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    src={Image4} />
                  <h2 class="mt-[12px] text-center text-[#BBBBBB]">personalized <br />marketing</h2>
                </div>
              </div>
              <div class="flex w-1/3 flex-wrap mx-auto">
                <div class="w-[230px] p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    src={Image4} />
                  <h2 class=" mt-[12px] text-center text-[#BBBBBB]">Follow up on<br />customers</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>



      <section>
        <div className="bg-[#333333] h-[900px] mt-[60px] ">

          <div class="rounded-full h-[200px] w-[800px] flex bg-[#222222] m-2 mx-auto top-[500px]"></div>
              
             <h1 className='text-center text-4xl p-5 text-transparent bg-clip-text bg-gradient-to-r from-[#E975A8] to-[#726CF8]'>What you stand to gain </h1>
               
               <div>
                  <div>

                  </div>
               </div>
               <div>
                 <div>
                  
                 </div>
               </div>
          <div class="rounded-t-full h-[240px] w-[500px] flex bg-[#222222] m-2 mx-auto mt-[460px]"></div>

        </div>
      </section>



      {/* <div class="flex flex-row min-h-screen justify-center items-center">
        <div>
          <p>white</p>
        </div>
        <div>
          <p>white</p>
        </div>
        <div>
          <p>white</p>
        </div>
      </div> */}



      <div class="w-532 h-[432px] flex  justify-center items-center mt-[90px]">

        <div className='flex flex-row w-[1200px] bg-yellow-500 gap-4 overflow-x-scroll '>
          <div class="w-[790px] h-10 bg-orange-500"></div><br />
          <div class="w-[790px] h-10 bg-red-500"></div>
          <div class="w-[790px] h-10 bg-pink-500"></div>
        </div>

      </div>

      <div className="container flex overflow-x-scroll w-screen ">

        <div> </div>

      </div>

    </>
  )
}

export default Solution