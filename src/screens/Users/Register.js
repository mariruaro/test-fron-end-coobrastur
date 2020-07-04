import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { usersActions } from '../../store/actions';
import RegisterForm from '../../components/Users/Register';
import Layout from '../../components/Utils/Page/Layout';

class Register extends React.PureComponent {
	render() {
		const { onRegister } = this.props;

		return (
			<Layout>
				<RegisterForm
					className="register-user"
					onSubmit={(data) => onRegister(data)}
				/>
			</Layout>
		);
	}
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
	onRegister: (data) => dispatch(usersActions.registerUser(data)),
});

Register.propTypes = {
	onRegister: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
