import React from 'react'

function Footer() {
    return (
        <div style={{backgroundColor:'black',height:"80vh"}} className=' text-light '>
          <div className='container'>
                <div  className=' text-light  d-flex justify-content-between ' >
                    <div   >
                        <div className='d-flex  mt-5'>
                            <div>
                                <h4 className='fw-bold'>433</h4>
                                <div className='footer mt-3'>
                                    <h6> <a style={{textDecoration:'none',color:'white'}} href="">partnerships</a></h6>
                                    <h6> <a style={{textDecoration:'none',color:'white'}} href="">about us</a></h6>
                                    <h6><a style={{textDecoration:'none',color:'white'}} href="">career</a></h6>
                                    <h6><a style={{textDecoration:'none',color:'white'}} href="">contact</a></h6>
                                </div>
                            </div>
                            <div  style={{marginLeft:'5rem'}}>
                                <h4 className='fw-bold' >SHOP</h4>
                                <div className='mt-3'>
                                    <h6> <a style={{textDecoration:'none',color:'white'}} href="">FAQ</a></h6>
                                    <h6> <a style={{textDecoration:'none',color:'white'}} href="">Cookie policy</a></h6>
                                    <h6><a style={{textDecoration:'none',color:'white'}} href="">Return</a></h6>
                                    <h6><a style={{textDecoration:'none',color:'white'}} href="">Privacy Policy</a></h6>
                                    <h6><a style={{textDecoration:'none',color:'white'}} href="">Terms of service</a></h6>
                                    <h6><a style={{textDecoration:'none',color:'white'}} href="">433 app</a></h6>
                                </div>
            
                            </div>
                        </div>
                       
                        
        
        
                    
        
                    </div>
                    <div className=''>
                        <div className='d-flex justify-content-evenly mt-5 me-5'>
                            <div className='d-flex justify-content-center align-items-center border border-warning' style={{width:'45px',height:'45px',borderRadius:'50%'}} ><a href=""><i  class="fa-brands  fa-instagram " style={{color:'white'}}></i></a>
                            </div>
                            <div className='d-flex justify-content-center align-items-center border border-warning ms-3' style={{width:'45px',height:'45px',borderRadius:'50%'}} ><a href=""><i  class="fa-brands  fa-twitter  " style={{color:'white'}}></i></a>
                            </div>
                            <div className='d-flex justify-content-center align-items-center border border-warning ms-3' style={{width:'45px',height:'45px',borderRadius:'50%'}} ><a href=""><i  class="fa-brands  fa-facebook" style={{color:'white'}}></i></a>
                            </div>
                            <div className='d-flex justify-content-center align-items-center border border-warning ms-3' style={{width:'45px',height:'45px',borderRadius:'50%'}} ><a href=""><i  class="fa-brands  fa-youtube " style={{color:'white'}}></i></a>
                            </div>
                            <div className='d-flex justify-content-center align-items-center border border-warning ms-3' style={{width:'45px',height:'45px',borderRadius:'50%'}} ><a href=""><i  class="fa-brands  fa-tiktok " style={{color:'white'}}></i></a>
                            </div>
                            <div className='d-flex justify-content-center align-items-center border border-warning ms-3' style={{width:'45px',height:'45px',borderRadius:'50%'}} ><a href=""><i  class="fa-brands  fa-snapchat " style={{color:'white'}}></i></a>
                            </div>
                        </div>
        
                    </div>
        
        
                </div>
               <div className='d-flex justify-content-between  mt-5' >
                    <div className='d-flex mt-5 justify-content-between '>
                        <img style={{height:'30px',width:'30px'}} src="https://www.433football.com/cdn/shop/files/433_Studios_Logo.png?v=1624351899" alt="" />
        
                            <p className='ms-4'>© 2021 433, B.V. | All rights reserved</p>
                            
                    </div>
                    <div className=' mt-5 '>
                    <button type="button" style={{borderRadius:'20px',borderColor:'white'}} className="btn text-light ">Submit content<i  style={{color:'white'}} class="fa-solid fa-arrow-right-long"></i></button>
                    <button type="button" style={{borderRadius:'20px',borderColor:'white'}} className="btn ms-5  text-light ">Contact Us</button>
    
                    </div>
               </div>
          </div>
        </div>
    )
}

export default Footer