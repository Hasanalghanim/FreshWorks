import SideBar from '../Compnents/SideBar';
import MainContent from '../Compnents/MainContent';

const Dashboard = () => {
	return (
		<div className='flex'>
			<SideBar />
			<MainContent />
		</div>
	);
};

export default Dashboard;
