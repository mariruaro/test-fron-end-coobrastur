import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import PropTypes from 'prop-types';

const ListComponent = ({ columns, data, loading, ...restProps }) => (
	<div {...restProps}>
		<Link to="/cadastrar">
			<Button type="button" color="primary" className="float-right mb-3">
				Cadastrar
			</Button>
		</Link>
		<DataTable
			noHeader
			heade
			columns={columns}
			data={data}
			striped
			highlightOnHover
			noDataComponent="Sem registros para exibir."
			progressPending={loading}
			{...restProps}
		/>
	</div>
);

ListComponent.propTypes = {
	columns: PropTypes.arrayOf(PropTypes.object).isRequired,
	data: PropTypes.arrayOf(PropTypes.object).isRequired,
	loading: PropTypes.bool.isRequired,
};

ListComponent.defaultProps = {};

export default ListComponent;
