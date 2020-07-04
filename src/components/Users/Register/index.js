import React from 'react';
import { Col, Row, Button } from 'reactstrap';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { MdPersonOutline } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import InputLabel from '../../Utils/InputLabel';

const RegisterForm = ({
	nameLabel,
	nameInputProps,
	jobLabel,
	jobInputProps,
	onSubmit,
	...restProps
}) => {
	const { register, handleSubmit } = useForm();
	const history = useHistory();

	return (
		<div {...restProps}>
			<Row className="row-title align-items-center">
				<MdPersonOutline size={25} />
				<h2>Painel de clientes</h2>
			</Row>
			<div>
				<h5>Novo Cliente</h5>
				<p>
					Informe os campos a seguir para cadastrar um novo cliente:
				</p>
			</div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Row>
					<Col xl={6} lg={6} md={12}>
						<InputLabel
							label={nameLabel}
							{...nameInputProps}
							innerRef={register}
						/>
					</Col>
				</Row>
				<Row className="mt-4">
					<Col xl={6} lg={6} md={12}>
						<InputLabel
							label={jobLabel}
							{...jobInputProps}
							innerRef={register}
						/>
					</Col>
				</Row>
				<Row>
					<Col xl={12} lg={12} md={12}>
						<Button color="primary" className="col-md-2 mr-4 mt-4">
							Cadastrar
						</Button>
						<Button
							color="primary"
							outline
							type="button"
							onClick={() => history.goBack()}
							className="col-md-2 mt-4">
							Voltar
						</Button>
					</Col>
				</Row>
			</form>
		</div>
	);
};

RegisterForm.propTypes = {
	nameLabel: PropTypes.string,
	nameInputProps: PropTypes.shape({}),
	jobLabel: PropTypes.string,
	jobInputProps: PropTypes.shape({}),
	handleNavigation: PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired,
};

RegisterForm.defaultProps = {
	nameLabel: 'Nome',
	nameInputProps: {
		name: 'name',
		id: 'name',
		required: true,
	},
	jobLabel: 'Profissão',
	jobInputProps: {
		name: 'job',
		id: 'job',
		required: true,
	},
};

export default RegisterForm;
