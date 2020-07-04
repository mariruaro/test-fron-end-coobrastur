import React from 'react';
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';
import Header from './Header';

class Layout extends React.PureComponent {
	render() {
		const { children } = this.props;
		return (
			<main className="app">
				<Header />
				<Container>
					<div className="page">{children}</div>
				</Container>
			</main>
		);
	}
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
