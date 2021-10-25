import SideBarLink from './Util/LinkTags';

const SideBar = () => {
	return (
		<div className='h-full bg-myDarkPurple arounded shadow-l'>
			<ul className='flex justify-center gap-8 items-middle h-full lg:flex-col lg:items-start lg:gap-0'>
				<SideBarLink title='Add' bgColor='' hover='bg-hoverAccent' />
				<SideBarLink title='Update' bgColor='' hover='bg-hoverAccent' />
				<SideBarLink title='Dashboard' bgColor='' hover='bg-hoverAccent' />
			</ul>
		</div>
	);
};

export default SideBar;
