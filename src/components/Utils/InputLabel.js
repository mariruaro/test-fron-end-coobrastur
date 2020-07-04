import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';
import PropTypes from 'prop-types';

const InputWithLabel = ({ label, labelProps, ...inputProps }) => (
	<FormGroup>
		<Label {...labelProps} for={inputProps.id}>
			{label}
		</Label>
		<Input {...inputProps} />
	</FormGroup>
);

InputWithLabel.propTypes = {
	label: PropTypes.string.isRequired,
	labelProps: PropTypes.shape({}),
};

InputWithLabel.defaultProps = {
	labelProps: {},
};

export default InputWithLabel;
