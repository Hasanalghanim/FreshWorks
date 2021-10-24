import TableTop from './Util/Table/TableTop';
import TableBottom from './Util/Table/TableBottom';

const Table = () => {
	return (
		<table>
			<TableTop
				titleOne='Location'
				titleTwo='Food Type'
				titleThree='Time'
				titleFour='# of Food'
				titleFive='# of Ducks'
			/>

			<TableBottom
				class='h-22'
				titleOne='Location'
				titleTwo='Food Type'
				titleThree='Time'
				titleFour='# of Food'
				titleFive='# of Ducks'
			/>
		</table>
	);
};

export default Table;
