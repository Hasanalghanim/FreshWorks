import SideBar from '../Compnents/SideBar';
import MainContent from '../Compnents/MainContent';

const Dashboard = () => {
	return (
		<div className='grid grid-col-0 lg:grid-cols-6 lg:min-h-screen'>
			<div className=' h-16 lg:min-h-screen'>
				<SideBar />
			</div>
			<div className='bg-gray-300 lg:col-span-5 min-h-screen'>
				<MainContent />
			</div>
		</div>
	);
};

export default Dashboard;
