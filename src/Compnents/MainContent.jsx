import Table from './Table';
import DashBoardBar from './Util/DashBoardBar';

const MainContent = () => {
	return (
		<div className='m-4  max-h-96 space-y-6 '>
			<DashBoardBar title='DashBoard' />
			<Table />
		</div>
	);
};

export default MainContent;
