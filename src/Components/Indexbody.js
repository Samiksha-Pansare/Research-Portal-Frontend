import React, { Component } from 'react';
import '../index-body.css';

export default class Indexbody extends Component {
  render() {
	return (
	  <div className='container'>
		<div className="box-1">
		  <div className="row">
			  <div className="col-6">
				<p className="ad-line">
					Ideas Evolve <br></br>
					When You Are Involved
				</p>
			  </div>
			  <div className="col-6">

			  </div>
		  </div>
		</div>
		<div className="container ">
			<div className="box-2">
				<div className="cards">
					<div className="row d-flex justify-content-center">
						<div className="col-sm-6 d-flex justify-content-md-end justify-content-center">
						<div className="card info-card">
							<div className="card-body">
							<h2 className="direct-custom-text">Direct</h2>
							<p>
								<p className="card-text black-para">
									Know exactly what you want?
								</p>
								<p className="green-para">
								Choose the right service and get your order delivered as soon as possible.
								</p>
							</p>
							<p className="proceed-p"><a href="#" className="btn btn-primary custom-btn">Proceed</a></p>
							
							</div>
						</div>
						</div>
						<div className="col-sm-6 d-flex justify-content-md-start d-flex justify-content-center">
						<div className="card  info-card">
							<div className="card-body">
								<h2 className="direct-custom-text">Custom</h2>
								<p>
									<p className="card-text black-para">
										Confused about your requirements?
									</p>
									<p className="green-para">
									Talk with us to get the best solution to your problem.
									</p>
								</p>
								<p className="proceed-p"><a href="#" className="btn btn-primary custom-btn">Proceed</a></p>
							</div>
						</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<div className="third-box container">
			<div className="row">
				<div className="col-4">
                      <div className="card feature-card">
                        <div className="card-body">
                          <h2 className="direct-custom-text">Direct</h2>
                          <p>
                            <p className="card-text black-para">
                                Know exactly what you want?
                            </p>
                            <p className="green-para">
                              Choose the right service and get your order delivered as soon as possible.
                            </p>
                          </p>                                             
                        </div>
                      </div>
				</div>
				<div className="col-4">
					<div className="card info-card">
                        <div className="card-body">
                          <h2 className="direct-custom-text">Direct</h2>
                          <p>
                            <p className="card-text black-para">
                                Know exactly what you want?
                            </p>
                            <p className="green-para">
                              Choose the right service and get your order delivered as soon as possible.
                            </p>
                          </p>
                        </div>
                    </div>
				</div>
				<div className="col-4">
				<div className="card info-card">
                        <div className="card-body">
                          <h2 className="direct-custom-text">Direct</h2>
                          <p>
                            <p className="card-text black-para">
                                Know exactly what you want?
                            </p>
                            <p className="green-para">
                              Choose the right service and get your order delivered as soon as possible.
                            </p>
                          </p>
                        </div>
                      </div>
				</div>
			</div>
		</div>
	  </div>
	)
  }
}
