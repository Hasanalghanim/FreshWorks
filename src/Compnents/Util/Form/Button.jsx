const Button = (props) => {
	return (
		<button
			onClick={props.onClick}
			className='bg-myDarkPurple hover:bg-myLightPurple text-white font-bold py-2 px-4  rounded'>
			{props.title}
		</button>
	);
};

export default Button;
