const DashBoardBar = (props) => {
	return (
		<div className='text-white bg-myDarkPurple h-10 shadow-lg rounded'>
			<div className='h-full flex text-center justify-center '>
				<h1 className='self-center font-semibold tracking-wide'>
					{props.title}
				</h1>
			</div>
		</div>
	);
};

export default DashBoardBar;
