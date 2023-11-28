import SimpleSlider from '../components/SimpleSlider'
import { Row, Col } from 'react-bootstrap'
import partnerimg from '../gallery/Screenshot (22).png'


function Home() {
   
    return (
        <div  >

            <section style={{ height: '100vh', width: '100%', position: 'relative' }} >

                <video autoPlay loop muted style={{ height: '100vh', width: '100%', objectFit: 'cover', zIndex: '-1' }} src="https://cdn.shopify.com/s/files/1/0070/8689/9253/files/Background_video.mp4?v=1628755009%22"></video>

                <div className='container-fluid w-50 ' style={{ zIndex: '1000', color: 'white', position: 'absolute', top: '25%', left: '3.5%' }}>
                    <h1 style={{ fontSize: '55px' }} className='fw-bolder '>433:THE HOME OF FOOTBALL</h1>
                    <p>The biggest football community in the world</p>

                    <div className='d-flex  '>
                        <a className='mt-5' href=""><img src="https://cdn.shopify.com/s/files/1/0070/8689/9253/files/Google_Play_1.png?v=1669127206" alt="" /></a>
                        <a className='ms-5 mt-5' href=""><img src="https://cdn.shopify.com/s/files/1/0070/8689/9253/files/App_Store_1.png?v=1669127206" alt="" /></a>
                    </div>






                </div>
                <div style={{ top: '70%', position: 'absolute', width: '100%' }}> <img className='me-5' style={{ float: 'right' }} src="https://cdn.shopify.com/s/files/1/0070/8689/9253/files/circle_433.png?v=1617955931" alt="" /></div>
                <div className='container-fluid d-flex  ' style={{ position: 'absolute', backgroundColor: 'white', width: '92%', top: '83%', left: '4%', height: '118px' }}>
                    <div className='d-flex ms-5' style={{ position: 'absolute', top: '40%' }}>
                        <p>follow us</p>
                        <a style={{ fontSize: '20px' }} className='ms-3' href=""><i class="fa-brands   fa-instagram " style={{ color: 'black' }}></i></a>
                        <a style={{ fontSize: '20px' }} className='ms-3' href=""><i class="fa-brands   fa-twitter " style={{ color: 'black' }}></i></a>
                        <a style={{ fontSize: '20px' }} className='ms-3' href=""><i class="fa-brands   fa-facebook " style={{ color: 'black' }}></i></a>
                        <a style={{ fontSize: '20px' }} className='ms-3' href=""><i class="fa-brands   fa-youtube " style={{ color: 'black' }}></i></a>
                        <a style={{ fontSize: '20px' }} className='ms-3' href=""><i class="fa-brands   fa-tiktok  " style={{ color: 'black' }}></i></a>
                        <a style={{ fontSize: '20px' }} className='ms-3' href=""><i class="fa-brands   fa-snapchat " style={{ color: 'black' }}></i></a>
                    </div>


                </div>

            </section>
            <section style={{ height: '100vh', width: '100%' }}>
                <div style={{ backgroundColor: 'white', width: '100%' }}>
                    <div className='d-flex justify-content-center mt-5'>
                        <h1 style={{ color: 'black', fontSize: '2.5rem' }} className='fw-bolder'>Positively impacting the world</h1>

                    </div>
                    <div className='d-flex justify-content-center mt-5   ' >
                        <p style={{ textAlign: 'center', lineHeight: '2rem', fontWeight: '400' }}>Born out of a passion for the beautiful game, 433 is the embodiment of football culture. By positioning ourselves inside the locker room, we’ve become <br />  part of the team and equal to the players. This gives us access to the best moments football has to offer, moments that – before 433 – have never <br /> been available to the fans.</p>
                    </div>
                    <div className='d-flex justify-content-center mt-5'>
                        <div className='d-flex justify-content-evenly w-50'>
                            <a className='fw-bolder' style={{ color: 'black' }} href="">PARTNERSHIPS</a>
                            <a className='fw-bolder' style={{ color: 'black' }} href="">ABOUT US</a>
                            <a className='fw-bolder' style={{ color: 'black' }} href="">CONTACT US</a>


                        </div>
                    </div>
                    <div className='container-fluid mt-5'>
                        <div className='row' style={{ marginLeft: '3rem', gap: '3.8rem' }}>
                            <div className="col-2">
                                <h1 className='fw-bolder'>79M+</h1>
                                <p style={{ fontWeight: '300', fontSize: '13px' }} className='text-dark'>Total followers, all <br /> platforms combined</p>
                            </div>
                            <div className="col-2">
                                <h1 className='fw-bolder'>53M+</h1>
                                <p style={{ fontWeight: '300', fontSize: '13px' }} className='text-dark'>Followers on @433 <br /> Instagram</p>
                            </div>
                            <div className="col-2">
                                <h1 className='fw-bolder'>2B+</h1>
                                <p style={{ fontWeight: '300', fontSize: '13px' }} className='text-dark'>Views per month</p>
                            </div>
                            <div className="col-2">
                                <h1 className='fw-bolder'>5B+</h1>
                                <p style={{ fontWeight: '300', fontSize: '13px' }} className='text-dark'>Impressions a month</p>
                            </div>
                            <div className="col-2">
                                <h1 className='fw-bolder'>14.4%</h1>
                                <p style={{ fontWeight: '300', fontSize: '13px' }} className='text-dark'>Engagement rate on <br /> reach</p>
                            </div>
                        </div>
                    </div >
                    <div className='d-flex justify-content-center mt-5'>
                        <h4 style={{ marginRight: '3.5rem' }} className='fw-bolder mt-3'>THE 433 NETWORK:</h4>
                        <div className='d-flex justify-content-center' style={{ gap: '5rem' }}>
                            <img src="https://www.433football.com/cdn/shop/files/433-uitgelijnd_1.png?v=1618909671" alt="" />
                            <img src="https://www.433football.com/cdn/shop/files/ESPORTS.png?v=1618396967" alt="" />
                            <img src="https://www.433football.com/cdn/shop/files/SKILLS.png?v=1618396967" alt="" />
                            <img src="https://www.433football.com/cdn/shop/files/433NL_Logo_Homepage.png?v=1623834651" alt="" />
                            <img className='mt-3' style={{ height: '1.5rem' }} src="https://www.433football.com/cdn/shop/files/VISUBAL.png?v=1618396967" alt="" />

                        </div>
                    </div>

                </div>

            </section>
            {/* <section style={{ height: '70vh', width: '100%', backgroundColor: 'white' }}>
                <div className='d-flex justify-content-between '>
                    <h4 className='mt-3'>OUR PARTNERSHIPS</h4>

                </div>
                <div className='d-flex justify-content-center align-items-center' style={{backgroundColor:'white',height:'70vh'}} >

                    <SimpleSlider  />


                </div>

            </section> */}
            <section style={{ height: '95vh', width: '100%', backgroundImage: 'url("https://www.433football.com/cdn/shop/files/433_Studios_BG.jpg?v=1628521998")', backgroundSize: 'cover' }}>
                <Row>
                    <Col className=' align-items-center' style={{ height: '80vh', width: '100%', }}>
                        <div style={{ marginTop: '17rem', marginLeft: '3.8rem' }} ><h4 className='text-light fw-bold'>433 STUDIOS</h4>
                            <p className='mt-3 ' style={{ lineHeight: '2rem', fontSize: '17px', color: 'white' }}>Delivering an unmatched stream of social content, 433 Studios is <br /> responsible for all of 433’s concepts, campaigns and content <br /> productions.</p>
                            <button type="button" class="btn fw-bold mt-4" style={{ color: 'white', backgroundColor: 'black', borderColor: 'white', borderRadius: '20px' }}>PLAY SHOWREEL</button>




                        </div>

                    </Col>
                    <Col>
                        <div className='d-flex' style={{ marginLeft: '13rem' }} >
                            <img style={{ marginTop: '7.6rem', width: '360px' }} src="https://www.433football.com/cdn/shop/files/homegrown-donny-mobile_1_3a8c448d-04de-4831-9cf2-d5e912673695.png?v=1623750959" alt="" />
                            <img className='ms-3' style={{ height: '4.5rem', marginTop: '35.5rem' }} src="https://www.433football.com/cdn/shop/files/433_Studios_Logo.png?v=1624351899" alt="" />

                        </div>
                    </Col>

                </Row>


            </section>
            <section style={{ height: '75vh', width: '100%', backgroundColor: 'yellow' }}>
                <Row >
                    <Col  style={{marginLeft:'3.8rem',color:'black',marginTop:'3.5rem'}}>
                        <h1 style={{fontSize:'50px',fontWeight:'800',lineHeight:'3rem'}}>Home to the most <br /> talented content <br /> creators.</h1>
                        

                    </Col>
                    <Col className='mt-5' style={{marginTop:'3.5rem'}}>
                    <p style={{color:'black',lineHeight:'2rem',marginTop:'1.5rem'}}>Mixing Ronaldo’s agility with Messi’s creativity and <br /> Lewandowski’s precision. That’s what our content creators are: <br /> skilled professionals who know how to impact the game. All <br /> content created by 433 Studios is made for social media and <br /> designed to engage.</p>

                    <ul style={{paddingLeft:'1rem'}}>
                        <li>Stunning illustrations</li>
                        <li>Next-level editing of user generated content</li>
                        <li>Incredible original video content</li>
                        <li>Jaw-dropping virals</li>
                       
                        
                    </ul>

                    <button type="button" class="btn fw-bold mt-4" style={{ color: 'white', backgroundColor: 'black', borderColor: 'white', borderRadius: '20px',width:"16rem ",height:'2.8rem',fontSize:'13px'}}>JOIN US <i  style={{color:'white'}} class="fa-solid fa-arrow-right-long"></i></button>
                    </Col>
                </Row>

            </section>
            <section style={{height: '75vh', width: '100%', backgroundColor: 'black'}}>
                <div >
                   <div>
                        <h1 style={{fontSize:'70px',fontWeight:"800",paddingTop:'6.5rem',paddingLeft:'3.5rem',color:'white'}}>
                        POSITIVELY IMPACTING <br /> THE WORLD <span style={{color:'yellow'}}>THROUGH <br /> FOOTBALL.</span>
                        </h1>
                   </div>
                   <div className='mt-4 me-5' style={{float:'right'}}>
                    <img src="https://www.433football.com/cdn/shop/files/circle_433.png?v=1617955931" alt="" />
                   </div>
                </div>



            </section>
            <section  style={{height: '90vh', width: '100%', backgroundColor: 'white'}} >
               <div className=' d-flex justify-content-center '   >
                    <div  style={{backgroundColor: 'white',width:'60%',height:"550px"}}>
                        <div className='d-flex justify-content-between mt-5 w-100 '>
                            <h5 style={{color:'black',fontWeight:'bolder'}}>OUR PARTNERS</h5>
                            <button type="button" class="btn fw-bold " style={{ color: 'black', backgroundColor: 'white', borderColor: 'black', borderRadius: '20px',width:"10rem ",height:'2.8rem',fontSize:'13px'}}>CONTACT US <i  style={{color:'black'}} class="fa-solid fa-arrow-right-long"></i></button>
                        </div>
                        <img className='w-100 mt-5' src={partnerimg} alt="" />
                        


                       
                    </div>
               </div>

            </section>




        </div>
    )
}

export default Home