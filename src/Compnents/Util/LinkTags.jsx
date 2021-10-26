import { Link } from 'react-router-dom';

const SideBarLink = (props) => {
	return (
		<li
			className={`flex items-center justify-center cursor-pointer lg:w-full lg:py-4 hover:${props.hover} ${props.bgColor}`}>
			<Link className='text-white p-2' to={props.link}>
				{props.title}
			</Link>
		</li>
	);
};

export default SideBarLink;
