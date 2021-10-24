import TableHeader from './TableHeader';

const TableTop = (props) => {
	return (
		<div className='bg-white  rounded-2xl h-20 shadow-md m-4'>
			<div className='flex h-full align-middle rounded-2xl divide-x divide-gray-600'>
				<TableHeader title={props.titleOne} />
				<TableHeader title={props.titleTwo} />
				<TableHeader title={props.titleThree} />
				<TableHeader title={props.titleFour} />
				<TableHeader title={props.titleFive} />
			</div>
		</div>
	);
};

export default TableTop;
