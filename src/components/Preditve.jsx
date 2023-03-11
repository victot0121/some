import React from 'react'
import Image1 from '../assets/spec (5).png'
import Image2 from '../assets/Capa 2.png'
import Image3 from '../assets/spec (6).png'
import Image7 from '../assets/Play.png'
import Image4 from '../assets/Frame 34807.png'

const Preditve = () => {
    return (
        <div>
            <div>
                <div className="container flex items-center h-screen p-6 mx-auto mt-6 space-y-0 justify-evenly md:space-y-0">
                    <div className='flex flex-col px-2 py-6'>
                        <h1 className='p-4 mt-6 text-5xl font-semibold text-white '>Predictive Modelling </h1>
                        <p className='p-4 text-[#BBBBBB] text-left max-w-2xl'>Advanced fraud detection and prevention as a Cutting-Edge Security for Your Business. We Power Security with Deep Learning systems which is a proven approach to fraud detection and prevention for the safety of your organization.</p>
                        <div className='flex'>
                            <div>
                                <button className='text-[#ffffff] mt-6 bg-gradient-to-r from-[#E975A8] to-[#726CF8] w-fit px-3 py-3 ml-5 rounded'>Request Consultation</button>

                            </div>
                            <div >
                                <button className='text-[#000] mt-6 bg-[#fff] w-fit px-3 py-3 ml-5 rounded flex '>
                                    <div className='flex flex-row gap-4' >
                                        <img src={Image7} alt="" />
                                        <h3 className=''> Request Consultation</h3>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="relative cursor-grab">
                        <img src={Image1} alt="" className='absolute top-0 -left-24' />
                        <img src={Image2} alt="" width='270px' className='mt-12 mb-12' />
                        <img src={Image3} alt="" className='absolute right-1 -bottom-35' />
                    </div>
                </div>
            </div>


            <section className='h-[600px]'>
                <h3 className='text-center  py-5 mt-6 text-3xl font-semibold text-white '>Use Cases</h3>
                <div class="container m-auto grid grid-cols-3 gap-4">
                    <div>
                        <div class="h-[430px] tile flex items-center justify-center rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
                            <div class="flex flex-col h-full w-full justify-center items-center bg-gray-800 back">
                                <div class="w-[70px] p-1 md:p-2">
                                    <img
                                        alt="gallery"
                                        class="block h-full w-full rounded-lg object-cover object-center py-4"
                                        src={Image4} />
                                </div>
                                <h2 class="text-white">Account Protection</h2>
                                <p className='text-center text-white px-4 py-4'>
                                    Secure your company account to ensure <br />
                                    your data is safe at all times and to <br />
                                    ensure your information is stored securely and can only be accessed by <br />
                                    authorised personnel
                                </p>
                                <div className=' relative flex w-full bg-[green]'>
                                    <h2 className='absolute right-0 px-5 py-3 text-white' >Learn more</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="h-95 tile flex items-center justify-center rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
                        <div class="flex flex-col h-full w-full justify-center items-center bg-gray-800 back">
                            <div class="w-[70px] p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    class="block h-full w-full rounded-lg object-cover object-center py-4"
                                    src={Image4} />
                            </div>
                            <h2 class="text-white">Transaction Protection</h2>
                            <p className='text-center text-white px-4 py-4'>
                                Secure your company account to <br />
                                ensure your data is safe at all times and <br />
                                to ensure your information is stored  <br />
                                securely and can only be accessed by <br />
                                authorised personnel
                            </p>
                            <div className=' relative flex w-full bg-[green]'>
                                <h2 className='absolute right-0 px-5 py-3 text-white' >Learn more</h2>
                            </div>

                        </div>
                    </div>
                    <div class="h-95 tile flex items-center justify-center rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
                        <div class="flex  h-full w-full justify-center items-center bg-gray-800 back">
                            <div class="flex flex-col h-full w-full justify-center items-center bg-gray-800 back">
                                <div class="w-[70px] p-1 md:p-2">
                                    <img
                                        alt="gallery"
                                        class="block h-full w-full rounded-lg object-cover object-center py-4"
                                        src={Image4} />
                                </div>
                                <h2 class="text-white">Database Protection</h2>
                                <p className='text-center text-white px-4 py-4'>
                                    Regular security audits and penetration <br />
                                    testing to identify and address <br />
                                    vulnerabilities. Data encryption to <br /> endure only authorized personnel can <br />
                                    access your database.
                                </p>
                                <div className=' relative flex w-full bg-[green]'>
                                    <h2 className='absolute right-0 px-5 py-3 text-white' >Learn more</h2>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="h-95 tile flex items-center justify-center rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
                        <div class="flex  h-full w-full justify-center items-center bg-gray-800 back">
                            <div class="flex flex-col h-full w-full justify-center items-center bg-gray-800 back">
                                <div class="w-[70px] p-1 md:p-2">
                                    <img
                                        alt="gallery"
                                        class="block h-full w-full rounded-lg object-cover object-center py-4"
                                        src={Image4} />
                                </div>
                                <h2 class="text-white">Phishing Protection</h2>
                                <p className='text-center text-white px-4 py-4'>
                                    Provides you with multiple layer of <br />
                                    security to detect and block malicious <br />
                                    emails and websites with the use of <br />
                                    advanced protection techniques.
                                </p>
                                <div className=' relative flex w-full bg-[green]'>
                                    <h2 className='absolute right-0 px-5 py-3 text-white' >Learn more</h2>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="h-[430px] tile flex items-center justify-center rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
                        <div class="flex  h-full w-full justify-center items-center bg-gray-800 back">
                            <div class="flex flex-col h-full w-full justify-center items-center bg-gray-800 back">
                                <div class="w-[70px] p-1 md:p-2">
                                    <img
                                        alt="gallery"
                                        class="block h-full w-full rounded-lg object-cover object-center py-4"
                                        src={Image4} />
                                </div>
                                <h2 class="text-white">Documentation</h2>
                                <p className='text-center text-white px-4 py-4'>
                                    automated documentation process that streamlines independent validation for your organization to be in compliance with industry standards and regulations.
                                </p>
                                <div className=' relative flex w-full bg-[green]'>
                                    <h2 className='absolute right-0 px-5 py-3 text-white' >Learn more</h2>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            </section>

            <section className='h-[700px] mt-[400px] bg-[#333333]'>
                <h3 className='text-center l py-5 mt-6 mb-[30px] text-4xl font-semibold text-white '>Benefits</h3>
                <div class="container m-auto grid grid-cols-2 gap-4 px-[40px]">
                    <div class="tile h-[200px]">
                        <h1 class="tile-marker text-white">Compliance and Certification</h1>
                        <p className='text-white py-4'>
                            Run your business knowing you’re compliant with relevant <br /> laws and regulations in your business region.
                        </p>
                    </div>
                    <div class="tile h-[200px]">
                        <h1 class="tile-marker text-white">Advanced Fraud Detection</h1>
                        <p className='text-white py-4'>
                            Run a risk free business with our fraud detection <br /> technology.
                        </p>
                    </div>
                    <div class="tile h-[200px]">
                        <h1 class="tile-marker text-white">Enhanced Security</h1>
                        <p className='text-white py-4'>
                            Measures such as data encryption, access controls, and <br />
                            two-factor authentication are used to ensure that user <br />
                            data is stored securely and can only be accessed by <br /> authorized personnel.
                        </p>
                    </div>
                    <div class="tile h-[200px]">
                        <h1 class="tile-marker text-white">Enhanced Security</h1>
                        <p className='text-white py-4'>
                            Measures such as data encryption, access controls, and <br />
                            two-factor authentication are used to ensure that user <br />
                            data is stored securely and can only be accessed by <br /> authorized personnel.
                        </p>
                    </div>
                    <div class="tile h-[200px]">
                        <h1 class="tile-marker text-white">Real-time monitoring</h1>
                        <p className='text-white py-4'>
                            Run your business knowing you’re compliant with relevant <br /> laws and regulations in your business region.
                        </p>
                    </div>
                </div>
            </section>
            {/* <div class="mx-auto flex min-h-screen max-w-screen-sm items-center justify-center">
        <div class="h-36 w-full rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
            <div class="flex h-full w-full items-center justify-center bg-gray-800 back">
                <h1 class="text-2xl font-black text-white">the quick brown fox jumps over the lazy dog</h1>
            </div>
        </div>
    </div>*/}
        </div>
    )
}

export default Preditve