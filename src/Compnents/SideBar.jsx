import SideBarLink from './Util/LinkTags';

const SideBar = () => {
	return (
		<div className='h-full bg-blue-600 '>
			<ul className='flex justify-center gap-8 items-middle h-full lg:flex-col lg:items-start lg:gap-0'>
				<SideBarLink title='Add' bgColor='' hover='bg-blue-500' />
				<SideBarLink title='Update' bgColor='' hover='bg-blue-500' />
				<SideBarLink title='Dashboard' bgColor='' hover='bg-blue-500' />
			</ul>
		</div>
	);
};

export default SideBar;
