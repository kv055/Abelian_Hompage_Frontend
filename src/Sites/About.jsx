import React from 'react';

import Will_Photo from '../assets/Portrait4.png'
import Lachlan_Photo from '../assets/Portrait2.png'
import Kilian_Photo from '../assets/Portrait5.png'
import Pat_Photo from '../assets/Portrait3.png'
import Aleks_Photo from '../assets/Portrait1.png'

import Header from '../components/header';
import Footer from '../components/footer'

const About_Us_Page = () => {
    
    return (
        <div className='h-screen flex flex-col items-center justify-start px-10'>
            <Header></Header>
            {/* Content */}
            <div className='bg-violet-200'>
                
                <h3 className='RobotoCondensed text-center font-semibold tracking-widest text-2xl m-5'>The Team</h3>
                
                <div className='flex items-center justify-center flex-wrap'>
                    
                    <div className='flex-col m-5 md:m-10 md:w-2/3'>
                        <div className='flex flex-col xl:flex-row items-center justify-center'>
                            <h5 className='RobotoCondensed text-center  text-indigo-700 font-extrabold px-10 tracking-widest'>William Godfrey</h5>
                            <h6 className='RobotoCondensed text-center px-10'>CEO and Financial Engineering</h6>
                            <h6 className='RobotoCondensed text-center px-10'>william.godfrey@abelian.capital</h6>
                        </div>
                        <div className='flex flex-col xl:flex-row'>
                            <img 
                                src={Will_Photo} 
                                alt="Logo" 
                                className="m-10 w-3/4 lg:w-1/2 mx-auto mb-6 shadow-2xl shadow-violet-900"
                            />
                            <p className='m-10 RobotoCondensed'>
                                Meet William Godfrey, our CEO and founder. William has over 10 years of experience in the financial industry, with a Bachelor's degree in Business Administration from ABC University and an MBA from XYZ School of Business. He started his career at a leading investment bank, where he honed his skills in corporate finance and investment banking. William is passionate about using his experience and expertise to help our clients achieve their financial goals, and his vision and leadership have been instrumental in the success of our company.
                                As the CEO, William is responsible for overseeing all aspects of our company's operations, from strategy and business development to client acquisition and retention. He works closely with our senior management team to ensure that we're delivering the best possible service to our clients, and he's always looking for ways to improve our processes and streamline our operations. William's leadership skills, strategic thinking, and deep understanding of the financial industry are what make him a valuable asset to our team.
                            </p>
                        </div>
                    </div>

                    <div className='flex-col m-5 md:m-10 md:w-2/3'>
                        <div className='flex flex-col xl:flex-row items-center justify-center'>
                            <h5 className='RobotoCondensed text-center  text-indigo-700 font-extrabold px-10 tracking-widest'>Kilian Voss</h5>
                            <h6 className='RobotoCondensed text-center px-10'>Strategy Developement</h6>
                            <h6 className='RobotoCondensed text-center px-10'>kilian.voss@abelian.capital</h6>
                        </div>
                        
                        <div className='flex flex-col xl:flex-row-reverse'>
                            <img 
                                src={Kilian_Photo} 
                                alt="Logo" 
                                className="m-10 w-3/4 lg:w-1/2 mx-auto mb-6 shadow-2xl shadow-violet-900"
                            /> 
                            <p className='m-10 RobotoCondensed'>
                                Kilian Voss is our talented software engineer. With over 5 years of experience in software development, Kilian has a Bachelor's degree in Computer Science from TUM University. He started his career at a leading technology company, where he worked on a variety of projects in the fields of software development and data analytics. Kilian is passionate about using his skills to improve our clients' investment experience, and his expertise in software development is what makes him a valuable member of our team.
                                As a software engineer, Kilian is responsible for building and maintaining our proprietary software tools. He works closely with our CTO and data analysts to ensure that our software is optimized for data analytics and that it's meeting the needs of our clients.       
                            </p>    
                        </div>
                       
                    </div>

                    <div className='flex-col m-5 md:m-10 md:w-2/3'>
                        <div className='flex flex-col xl:flex-row items-center justify-center'>
                            <h5 className='RobotoCondensed text-center  text-indigo-700 font-extrabold px-10 tracking-widest'>Lachlan Steele</h5>
                            <h6 className='RobotoCondensed text-center px-10'>CTO and Infrastructure Developement</h6>
                            <h6 className='RobotoCondensed text-center px-10'>lachlan.steele@abelian.capital</h6>
                        </div>
                        <div className='flex flex-col xl:flex-row'>
                             <img 
                                src={Lachlan_Photo} 
                                alt="Logo" 
                                className="m-10 w-3/4 lg:w-1/2 mx-auto mb-6 shadow-2xl shadow-violet-900"
                            />
                            <p className='m-10 RobotoCondensed'>
                                Lachlan Steele is our CTO and resident tech expert. With over 8 years of experience in software development, Lachlan has a Bachelor's degree in Computer Science from DEF University. He started his career at a leading technology company, where he worked on a variety of cutting-edge projects in the fields of data analytics and machine learning. Lachlan is passionate about using technology to solve complex problems, and his expertise in software development and data analytics are what make him a valuable member of our team.
                                As the CTO, Lachlan is responsible for leading our technology and software development efforts. He works closely with our software engineers and data analysts to design and implement our proprietary software and data analytics tools. Lachlan is also responsible for ensuring that our technology infrastructure is always up-to-date and secure, and he's constantly looking for ways to improve our software and optimize its functionality. His passion for innovation, deep understanding of emerging technologies, and ability to solve complex problems are what make him a valuable asset to our team.    
                            </p>     
                        </div>
                       
                    </div>

                    <div className='flex-col m-5 md:m-10 md:w-2/3'>
                        <div className='flex flex-col xl:flex-row items-center justify-center'>
                            <h5 className='RobotoCondensed text-center  text-indigo-700 font-extrabold px-10 tracking-widest'>Aleks Lyubinov</h5>
                            <h6 className='RobotoCondensed text-center px-10'>Machine Learning Development</h6>
                            <h6 className='RobotoCondensed text-center px-10'>aleks.lyubinov@abelian.capital</h6>
                        </div>
                        
                        <div className='flex flex-col xl:flex-row-reverse'>
                            <img 
                                src={Aleks_Photo} 
                                alt="Logo" 
                                className="m-10 w-3/4 lg:w-1/2 mx-auto mb-6 shadow-2xl shadow-violet-900"
                            /> 
                            <p className='m-10 RobotoCondensed'>
                                Aleks Lyubinov is our Machine Learning Engineer, responsible for developing and implementing cutting-edge algorithms and models to enable us to make data-driven decisions. Aleks has a Master's degree in Computer Science from the University of Melbourne, where he specialized in Machine Learning and Data Mining.
                                Before joining our team, Aleks worked as a research assistant at the Australian Institute of Machine Learning, where he developed machine learning models for various applications such as computer vision, natural language processing, and recommendation systems. He also has experience working on real-world projects for clients in the finance and healthcare industries.
                                Aleks is a dedicated and detail-oriented individual who is always looking for ways to improve our algorithms and models. He has a passion for exploring the latest developments in the field of machine learning and is constantly learning and growing his skill set. His expertise and knowledge are critical to our success in making data-driven decisions and providing top-notch asset management services to our clients.
                            </p>   
                        </div>
                       
                    </div>

                    <div className='flex-col m-5 md:m-10 md:w-2/3'>
                        <div className='flex flex-col xl:flex-row items-center justify-center'>
                            <h5 className='RobotoCondensed text-center  text-indigo-700 font-extrabold px-10 tracking-widest'>Pat Nguyen</h5>
                            <h6 className='RobotoCondensed text-center px-10'>CFO and Investor Relations</h6>
                            <h6 className='RobotoCondensed text-center px-10'>pat.nguyen@abelian.capital</h6>
                        </div>

                        <div className='flex flex-col xl:flex-row'>
                             <img 
                                src={Pat_Photo} 
                                alt="Logo" 
                                className="m-10 w-3/4 lg:w-1/2 mx-auto mb-6 shadow-2xl shadow-violet-900"
                            />
                            <p className='m-10 RobotoCondensed'>
                                Patrick Nguyen is our CFO and financial expert. Patrick has over 15 years of experience in finance and accounting, with a Bachelor's degree in Accounting from GHI University and an MBA from JKL School of Business. He started his career at a leading accounting firm, where he worked with a variety of clients in the financial services industry. Patrick is passionate about using his expertise to help our clients achieve their financial goals, and his deep understanding of finance and accounting are what make him a valuable member of our team.
                                As the CFO, Patrick is responsible for overseeing all financial operations at our company, from budgeting and forecasting to financial reporting and analysis. He works closely with our senior management team to ensure that we're making smart financial decisions and investing our resources wisely. Patrick is also responsible for managing our venture capital efforts and identifying promising investment opportunities. His expertise in finance and accounting, attention to detail, and ability to think strategically are what make him a valuable asset to our team.
                            </p>     
                        </div>
                       
                    </div>
                    
                </div>

                <h3 className='RobotoCondensed text-center font-semibold tracking-widest text-2xl m-5'>Legal Disclaimer</h3>
                <p className='m-10 text-center RobotoCondensed'>
                    Abelian Capital LLC 125 Field Point Rd, Greenwich, CT 06830, USA
                </p>  

                
                
                {/* <h3 className='RobotoCondensed text-center font-semibold tracking-widest text-2xl m-5'>Contact Us</h3>
                <div className='flex flex-row justify-center mb-10'>
                    <p className='RobotoCondensed mx-10 '>LinkedIn</p>
                    <p className='RobotoCondensed mx-10 '>Email</p>
                </div> */}
            </div>
            <Footer></Footer>
        </div>
    );
}

export default About_Us_Page;
