const SideBarLink = (props) => {
	return (
		<li
			className={`flex items-center justify-center cursor-pointer lg:w-full lg:py-4 hover:${props.hover} ${props.bgColor}`}>
			<i className='text-white'>{props.title}</i>
		</li>
	);
};

export default SideBarLink;
