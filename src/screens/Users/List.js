import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { usersActions } from '../../store/actions';
import ListComponent from '../../components/Users/List';
import Layout from '../../components/Utils/Page/Layout';

class List extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			columns: [
				{
					name: 'Id',
					selector: 'id',
					sortable: true,
					width: '15%',
				},
				{
					name: 'Foto',
					selector: 'avatar',
					cell: (row) => <img src={row.avatar} alt="avatar" />,
				},
				{
					name: 'Nome',
					selector: 'first_name',
					cell: (row) => `${row.first_name} ${row.last_name}`,
					sortable: true,
				},
				{
					name: 'Email',
					selector: 'email',
					sortable: true,
				},
			],
		};
	}

	componentDidMount() {
		const { onGetList } = this.props;

		onGetList();
	}

	render() {
		const { list, loading } = this.props;

		const { columns } = this.state;

		return (
			<Layout>
				<ListComponent
					data={list}
					loading={loading}
					columns={columns}
				/>
			</Layout>
		);
	}
}

const mapStateToProps = (state) => ({
	list: state.user.list,
	loading: state.user.loading,
});

const mapDispatchToProps = (dispatch) => ({
	onGetList: () => dispatch(usersActions.getList()),
});

List.propTypes = {
	onGetList: PropTypes.func.isRequired,
	loading: PropTypes.bool.isRequired,
	list: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
