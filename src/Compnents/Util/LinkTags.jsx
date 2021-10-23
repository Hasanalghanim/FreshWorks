const SideBarLink = (props) => {
	return (
		<li
			className={`mb-3 p-2 min-w-full  flex items-center justify-center cursor-pointer hover:${props.hover} ${props.bgColor}`}>
			<i className='text-white'>{props.title}</i>
		</li>
	);
};

export default SideBarLink;
