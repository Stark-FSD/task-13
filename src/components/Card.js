import React from 'react'

function Card({detail}) {
return <>

                    <div className="col-lg-4">
                        <div className="card mb-5 mb-lg-0">
                            <div className="card-body">
                                <h5 className="card-title text-muted text-uppercase text-center">{detail.plan}</h5>
                                <h6 className="card-price text-center">${detail.price}<span className="period">/month</span></h6>
                                <hr />
                                <ul className="fa-ul">
                                    <li><span className="fa-li"><i className="fas fa-check"></i></span>{detail.plan === "PLUS"||detail.plan ===  "PRO"?<b>{detail.user}</b>:detail.user}</li>
                                    <li><span className="fa-li"><i className="fas fa-check"></i></span>{detail.storage}</li>
                                    <li  className={detail.puPEnabler?"":"text-muted"}><span className="fa-li" ><i className={detail.puPEnabler?"fas fa-check":"fas fa-times"}></i></span>{detail.publicproject}</li>
                                    <li className={detail.accessEnabler?"": "text-muted"}><span className="fa-li"><i className={detail.accessEnabler?"fas fa-check":"fas fa-times"}></i></span>{detail.access}</li>
                                    <li className={detail.prPEnabler?"": "text-muted"}><span className="fa-li"><i className={detail.prPEnabler?"fas fa-check":"fas fa-times"}></i></span>{detail.privateproject}</li>
                                    <li className={detail.supportEnabler?"": "text-muted"}><span className="fa-li"><i className={detail.supportEnabler?"fas fa-check":"fas fa-times"}></i></span>{detail.support}</li>
                                    <li className={detail.domainEnabler?"": "text-muted"}><span className="fa-li"><i className={detail.domainEnabler?"fas fa-check":"fas fa-times"}></i></span>{detail.plan==="PRO"?<><b>Unlimited </b>{detail.domain}</>:detail.domain}
                                    </li>
                                    <li className={detail.reportEnabler?"": "text-muted"}><span className="fa-li"><i className={detail.reportEnabler?"fas fa-check":"fas fa-times"}></i></span>{detail.report}</li>
                                </ul>
                                <div className="d-grid">
                                    <a href="javascript(void)" className="btn btn-primary text-uppercase">Button</a>
                                </div>
                            </div>
                        </div>
                    </div>
    </>
}

export default Card