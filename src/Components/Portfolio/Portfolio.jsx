import './Portfolio.css'
import React from 'react'
import Categories from '../CategoriesData/Categories'
import { useState } from 'react'
// import img from ''

function Portfolio() {

    const [data, setData] = useState(Categories);

    const filterResult = (categoryItem)=> {
        const result = Categories.filter((curData) => {
            return curData.category===categoryItem
        })
        setData(result)
    }

  return (
    <div className='portfolio-wrapper p-5'>
        <div className="container text-center">
            <h1>OUR AWESOME PORTFOLIO</h1>
            <div className="btnLineUp">
                <button className='port-btn' onClick={()=>setData(Categories)}>All</button>
                <button className='port-btn' onClick={()=>filterResult('complex')}>Complex</button>
                <button className='port-btn' onClick={()=>filterResult('digitizing')}>Digitizing</button>
                <button className='port-btn' onClick={()=>filterResult('logo')}>Logo Design</button>
                <button className='port-btn' onClick={()=>filterResult('mockup')}>Mockup</button>
                <button className='port-btn' onClick={()=>filterResult('rastertovector')}>Raster to Vector</button>
                <button className='port-btn' onClick={()=>filterResult('standard')}>Standard</button>
            </div>
            <div className="row">
                {data.map((values)=>{
                    const {id,title,image} = values
                    return (
                        <>
                            <div className="col-md-3" key={id}>
                                <p>{title}</p>
                                <div className="portfolioImgDiv">
                                    <img className='portfolioImg' src={image} alt="" />
                                </div>
                            </div> 
                        </>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Portfolio