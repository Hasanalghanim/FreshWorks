import TableData from './TableData';

const TableBottom = (props) => {
	return (
		<div className={`bg-white rounded-2xl h-20 shadow-md m-4 ${props.class}`}>
			<div className='flex h-full align-middle rounded-2xl divide-x divide-gray-600'>
				<TableData title={props.titleOne} />
				<TableData title={props.titleTwo} />
				<TableData title={props.titleThree} />
				<TableData title={props.titleFour} />
				<TableData title={props.titleFive} />
			</div>
		</div>
	);
};

export default TableBottom;
