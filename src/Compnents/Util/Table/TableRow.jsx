const TableRow = (props) => {
	return (
		<tr className='text-center'>
			<td className='p-4'>{props.dataOne}</td>
			<td className='p-4'>{props.dataTwo}</td>
			<td className='p-4'>{props.dataThree}</td>
			<td className='p-4'>{props.dataFour}</td>
			<td className='p-4'>{props.dataFive}</td>
		</tr>
	);
};

export default TableRow;
