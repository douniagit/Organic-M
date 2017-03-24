import React from 'react';
import "./Navbar.css";
import logo from "./../../public/img/OM.png";
import { Link } from 'react-router';

class Navbar extends React.Component{
	render(){

		return(
				<div className="header">
					<div className="wrapHead">
					<div className="navpart1">
						<ul>
							<li><Link to="/home">Home</Link></li>
							<li><Link to="/presentation">Présentation</Link></li>
							<li><a>Disciplines</a>
								<ul>
									<li><a>Nos disciplines</a></li>
									<li><a>Activités pédagogiques</a></li>
								</ul>
							</li>
						</ul>
					</div>
					<div className="logo"><Link to="/"><img src={logo}/></Link></div>
					<div className="navpart2">
						<ul>
							<li><Link to="/tarifs">Tarifs</Link></li>
							<li><a>Notre équipe</a></li>
							<li><Link to="/partenaire">Nos partenaires</Link></li>
						</ul>
					</div>
					</div>
				</div>
			);
		}
	}

export default Navbar;