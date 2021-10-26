import LinkTags from './Util/LinkTags';

const SideBar = () => {
	return (
		<div className='h-full bg-myDarkPurple arounded shadow-l'>
			<ul className='flex justify-center gap-8 items-middle h-full lg:flex-col lg:items-start lg:gap-0'>
				<LinkTags
					link='/dashboard'
					title='Dashboard'
					bgColor=''
					hover='bg-hoverAccent'
				/>
				<LinkTags link='/' title='Add' bgColor='' hover='bg-hoverAccent' />
			</ul>
		</div>
	);
};

export default SideBar;
