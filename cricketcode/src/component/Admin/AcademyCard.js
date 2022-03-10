import React from 'react'

const AcademyCard = (props) => {
    return (
        <>
            <div className="">
                {/*<img src={props.icon} className="card-img-top img-fluid img-thumbnail rounded" alt="..."></img>*/}
                <div className="card-body">
                    <h6 className="card-text" style={{ textAlign: "center", color: "black" }}>{props.name}</h6>
                    <div className="row">
                        <div className="col-sm ">
                            <p style={{ fontSize: "12px", color: "black" }}>{props.address}</p>
                        </div>
                        {/* <div className="col-sm">
                            <img src={icon} alt="" className='img-fluid' />
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default AcademyCard