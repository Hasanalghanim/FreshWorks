import Form from './Form';
import DashBoardBar from './Util/DashBoardBar';

const UserLandingContent = () => {
	return (
		<div className='m-4  max-h-96 space-y-6 '>
			<DashBoardBar title='Add Data' />
			<Form />
		</div>
	);
};

export default UserLandingContent;
