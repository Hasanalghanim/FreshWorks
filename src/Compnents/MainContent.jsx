import Table from './Table';
import DashBoardBar from './Util/DashBoardBar';

const MainContent = () => {
	return (
		<div className='m-4  max-h-96 space-y-6 lg:grid lg:grid-cols-2 grid-rows-3 space-y-0 space-x-4'>
			<DashBoardBar />
			<div className='bg-green-300 col-span-1'>Box 1</div>
			<div className='bg-yellow-500 col-span-1'>Box 2</div>

			<Table className='' />

			<div className='bg-green-300 col-span-1 h-26'>Box 3</div>
		</div>
	);
};

export default MainContent;
