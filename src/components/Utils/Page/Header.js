import React from 'react';
import { Navbar, Nav, Container } from 'reactstrap';
import { MdExitToApp } from 'react-icons/md';

const logo = require('../../../assets/img/logo_coob_web_prata.png');

class Header extends React.PureComponent {
	render() {
		return (
			<Navbar className="header">
				<Container>
					<Nav navbar>
						<img src={logo} alt="logo" />
					</Nav>
					<Nav navbar className="nav-right">
						<div>
							<MdExitToApp
								size={18}
								color="#fff"
								style={{ marginTop: '-3px' }}
							/>
							<span className="ml-2">Sair</span>
						</div>
					</Nav>
				</Container>
			</Navbar>
		);
	}
}

export default Header;
