import React, { Component } from 'react';
import '../index-body.css';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import PlanetOne from '../Images/planet.svg';
import PlanetTwo from '../Images/planet-2.svg';
import PlanetThree from '../Images/planet-3.svg';
import PlanetFour from '../Images/planet-4.svg';

export default class Indexbody extends Component {
  render() {
	return (
	  <div className='container full-body-container'>
		<div className="box-1">
		  <div className="row">
			  <div className="col-md-5">
				<p className="ad-line">
        <a className="navbar-brand" href="#">Research Portal</a><br></br>
					Ideas Evolve <br></br>
					When You Are Involved<br></br>
          <button type="button" className="btn btn-outline-dark navbar-btn">Get Started</button>
				</p>
			  </div>
			  <div className="col-md-7 constrained-height">
				<img
					className='svg-img2 img-fluid'
					src={PlanetTwo}
					alt='planet'
				/>
				<img
					className='svg-img3 img-fluid'
					src={PlanetThree}
					alt='planet'
				/>
				<img
					className='svg-img4 img-fluid'
					src={PlanetFour}
					alt='planet'
				/>
			  </div>
		  </div>
		</div>
		{/* <div className="container box-container-2">
			<div className="box-2">
				<div className="cards">
					<div className="row d-flex justify-content-center">
						<div className="col-sm-6 d-flex justify-content-md-end justify-content-center">
						<div className="card info-card">
							<div className="card-body">
							<h2 className="direct-custom-text">Feature</h2>
							<p>
								<p className="card-text black-para">
									Feature 1
								</p>
								<p className="green-para">
								Some more about it
								</p>
							</p>
							
							</div>
						</div>
						</div>
						<div className="col-sm-6 d-flex justify-content-md-start d-flex justify-content-center">
						<div className="card  info-card">
							<div className="card-body">
								<h2 className="direct-custom-text">Feature</h2>
								<p>
									<p className="card-text black-para">
										Feature 2
									</p>
									<p className="green-para">
									Some more about it
									</p>
								</p>
								
							</div>
						</div>
						</div>
					</div>
				</div>
			</div>
		</div> */}
		
		<div className="third-box container">
			<div className="row">
				
			<a className="navbar-brand-feature" href="#">Features</a><br></br>
				<div className="col-md-4">					
                      <div className="card  feature-card">
                        <div className="card-body">
						<header className="header-orange">
							
						</header>
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
				<div className="col-md-4">
				<div className="card  feature-card">
                        <div className="card-body">
						<header className="header-pink">
							
						</header>
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
				<div className="col-md-4">
				<div className="card  feature-card">
                        <div className="card-body">
						<header className="header-purple">							
						</header>
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
