import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from './Util/Form/Input';
import Button from './Util/Form/Button';
import axios from 'axios';

const Form = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	// const url = 'http://localhost:5000/data';
	// const sendData = (body) => {
	// 	axios.post(url, body).then((res) => {
	// 		console.log(res);
	// 	});
	// };

	// const onClick = (e) => {
	// 	e.preventDefault();
	// 	console.log(formData);
	// 	sendData(formData);
	// };

	return (
		<div className='lg:flex justify-center w-full'>
			<form
				onSubmit={handleSubmit((e) => {
					console.log(e);
				})}
				className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 lg:w-3/4'>
				<Input
					{...register('time')}
					// onChange={(e) => onChange('time', e.target.value)}
					type='datetime-local'
					id='Time'
					label='Time'
				/>
				<Input
					{...register('location')}
					// // onChange={(e) => onChange('location', e.target.value)}
					type='text'
					id='Location'
					label='Location'
				/>
				<Input
					// // onChange={(e) => onChange('typeOfFood', e.target.value)}
					type='text'
					id='typeOfFood'
					label='Type of Food'
				/>
				<Input
					// // onChange={(e) => onChange('amountOfFood', e.target.value)}
					type='text'
					id='NumberOfFood'
					label='Amount of Food'
				/>
				<Input
					// // onChange={(e) => onChange('amountOfDucks', e.target.value)}
					type='text'
					id='NumberOfDucks'
					label='Amount Of Ducks'
				/>
				<button htmlType='submit'> subimt</button>
			</form>
		</div>
	);
};

export default Form;
