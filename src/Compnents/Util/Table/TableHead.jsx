const TableHead = (props) => {
	return (
		<tr>
			<th className='p-4 '>{props.headerOne}</th>
			<th className='p-4'>{props.headerTwo}</th>
			<th className='p-4'>{props.headerThree}</th>
			<th className='p-4'>{props.headerFour}</th>
			<th className='p-4'>{props.headerFive}</th>
		</tr>
	);
};

export default TableHead;
