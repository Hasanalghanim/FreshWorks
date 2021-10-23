import SideBarLink from './Util/LinkTags';

const SideBar = () => {
	return (
		<div>
			<aside className='w-28 md:w-40 :w-30 min-h-screen relative z-20  overflow-y-auto bg-myDarkBlue sm:block'>
				<div className='flex flex-col justify-center items-center'>
					<div className='px-4 my-10 rounded-md bg-gray-300 border-2 border-white'>
						<h5 className='p-2'> Ducks </h5>
					</div>

					<div className='min-w-full'>
						<ul className='mt-2 leading-10'>
							<SideBarLink
								title='Add'
								bgColor='bg-myLightBlue'
								hover='bg-blue-500'
							/>
							<SideBarLink
								title='Update'
								bgColor='bg-myLightBlue'
								hover='bg-blue-500'
							/>
							<SideBarLink
								title='Delete'
								bgColor='bg-myLightBlue'
								hover='bg-blue-500'
							/>
						</ul>
					</div>
				</div>
			</aside>
		</div>
	);
};

export default SideBar;
