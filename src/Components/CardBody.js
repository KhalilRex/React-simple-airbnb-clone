import React from 'react'
import '../App.css';

import Image1 from '../photos/pic1.jpeg'
import Image2 from '../photos/pic2.jpeg'
import Image3 from '../photos/pic3.jpeg'
import StarImg from '../photos/star.png'


export default function CardBody(props) {
    return (
        <div className="container">
            <div className="row" style={{alignItems:"center"}}>
                <div class="card my-3" style={{ width: "18rem;", width: "250px", height:"500px",marginLeft:"25px" }}>
                    <img class="card-img-top" src={Image1} style={{width:"249px",objectFit:"cover", height:"500px", marginLeft:"-12px"}} alt="Card image cap" />
                     <div className="card--stats my-1">
                      <img src={StarImg} className='card--star' alt='Star'/> 
                      <span>5.0</span> 
                      <span style={{color:"gray", marginLeft:"5px"}}>{`(${props.reviewCount})`}</span> 
                      <span style={{color:"gray",marginLeft:"5px"}}>SA</span> 
                     </div> 
                    <div class="card-body">
                        <h5 class="card-title">African Wild Castle</h5>
                        <p class="card-text" style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam modi molestiae, </p>
                        <a href="#" class="btn btn-primary" style={{marginRight:"10px", width:"200px"}}>Book Now</a>
                    </div>
                </div>

                <div class="card my-3" style={{ width: "18rem;", width: "250px", height:"500px", marginLeft:"25px"}}>
                    <img class="card-img-top" src={Image3} alt="Card image cap" style={{width:"249px",objectFit:"cover", height:"500px", marginLeft:"-12px"}} />
                     <div className="card--stats my-1">
                      <img src={StarImg} className='card--star'/> 
                      <span>5.0</span> 
                      <span style={{color:"gray", marginLeft:"5px"}}>{`(${props.reviewCount})`}</span> 
                      <span style={{color:"gray",marginLeft:"5px"}}>JP</span> 
                     </div> 
                    <div class="card-body">
                        <h5 class="card-title">Royal Palace</h5>
                        <p class="card-text" style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam modi molestiae, </p>
                        <a href="#" class="btn btn-primary" style={{marginRight:"10px", width:"200px"}}>Book Now</a>
                    </div>
                </div>

                <div class="card my-3" style={{ width: "18rem;", width: "250px", height:"500px", marginLeft:"25px"}}>
                    <img class="card-img-top" src={Image2} alt="Card image cap" style={{width:"249px",objectFit:"cover", height:"500px", marginLeft:"-12px"}} />
                     <div className="card--stats my-1">
                      <img src={StarImg} className='card--star'/> 
                      <span>5.0</span> 
                      <span style={{color:"gray", marginLeft:"5px"}}>{`(${props.reviewCount})`}</span> 
                      <span style={{color:"gray",marginLeft:"5px"}}>SA</span> 
                     </div> 
                    <div class="card-body">
                        <h5 class="card-title">Touch Heaven</h5>
                        <p class="card-text" style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam modi molestiae, </p>
                        <a href="#" class="btn btn-primary" style={{marginRight:"10px", width:"200px"}}>Book Now</a>
                    </div>
                </div>
                <div class="card my-3" style={{ width: "18rem;", width: "250px", height:"500px", marginLeft:"25px"}}>
                    <img class="card-img-top" src={Image2} alt="Card image cap" style={{width:"249px",objectFit:"cover", height:"500px", marginLeft:"-12px"}} />
                     <div className="card--stats my-1">
                      <img src={StarImg} className='card--star'/> 
                      <span>5.0</span> 
                      <span style={{color:"gray", marginLeft:"5px"}}>{`(${props.reviewCount})`}</span> 
                      <span style={{color:"gray",marginLeft:"5px"}}>SA</span> 
                     </div> 
                    <div class="card-body">
                        <h5 class="card-title">Touch Heaven</h5>
                        <p class="card-text" style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam modi molestiae, </p>
                        <a href="#" class="btn btn-primary" style={{marginRight:"10px", width:"200px"}}>Book Now</a>
                    </div>
                </div>
                
            </div>
        </div>

    )
}
