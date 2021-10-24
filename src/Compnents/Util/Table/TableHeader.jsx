const TableHeader = (props) => {
	return (
		<div className='bg-white flex  justify-evenly align-bottom m-auto h-3/4 '>
			<h2 className='h-full p-2 font-bold'>{props.title}</h2>
		</div>
	);
};

export default TableHeader;
