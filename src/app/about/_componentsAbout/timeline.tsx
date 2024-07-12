import React from 'react'

function TimeLine() {
    return (
        <section className='w-full '>
            <div className='max-w-7xl mx-auto '>
                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical -z-30 bg-[#0C0C0C]">
                    <li>
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5">
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="timeline-start mb-10 md:text-end">
                            <time className="font-mono italic">1984</time>
                            <div className="text-lg font-black">Company Establishment</div>
                            <p className='lg:w-[500px] w-[350px]'>
                                The company was founded by a group of robotics engineers and AI experts with a vision to revolutionize the robotics industry.
                                Initial team formation, including hardware engineers, software, and AI experts.
                                Intensive research and development (R&D) for the first robotic prototype.
                                Launch of the first prototype, Household Assistant Robot.
                            </p>
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5">
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="timeline-end mb-10">
                            <time className="font-mono italic">1998</time>
                            <div className="text-lg font-black">AI Technology Development</div>
                            <p className='lg:w-[500px] w-[350px]'>
                                Huge investment in AI R&D to improve robot capabilities. Launch of new robots with enhanced AI capabilities, including voice recognition and natural language processing. Recognition as one of the leading companies in the integration of AI and robotics.
                            </p>
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5">
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="timeline-start mb-10 md:text-end">
                            <time className="font-mono italic">2004</time>
                            <div className="text-lg font-black">Product Line Diversification</div>
                            <p className='lg:w-[500px] w-[350px]'>
                                Launch of educational robots for schools and universities. Enter the agricultural robotics market with the launch of robot harvesters. Integration of IoT technology to improve robot connectivity and efficiency. Launch of cloud-based robot management platform.
                            </p>
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5">
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="timeline-end mb-10">
                            <time className="font-mono italic">2010</time>
                            <div className="text-lg font-black">Launch of Global R&D Center</div>
                            <p className='lg:w-[500px] w-[350px]'>
                                Opening of new R&D centers in Silicon Valley and Europe. Collaboration with leading universities for joint research. Increase investment in innovative and futuristic projects.
                            </p>
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5">
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="timeline-start mb-10 md:text-end">
                            <time className="font-mono italic">2017</time>
                            <div className="text-lg font-black">Sustainable Innovation and Focus on Sustainability</div>
                            <p className='lg:w-[500px] w-[350px]'>
                                Development of environmentally friendly robots with a focus on sustainability. Launch of corporate green initiatives to reduce carbon footprint. Recognition as a leading robotics company with a commitment to sustainability and innovation.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default TimeLine