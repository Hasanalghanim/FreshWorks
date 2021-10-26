import { useState } from 'react';
import Input from './Util/Form/Input';
import Button from './Util/Form/Button';
import axios from 'axios';

const Form = () => {
	const [formData, setFormData] = useState();
	const [resMsg, setResMsg] = useState();

	// Takes in F as a case name and value is e
	// stores data in state
	const onChange = (f, e) => {
		switch (f) {
			case 'date':
				const newDate = e.replace('T', ' ');
				setFormData({ ...formData, date: newDate });
				break;
			case 'location':
				setFormData({ ...formData, location: e });
				break;
			case 'typeOfFood':
				setFormData({ ...formData, typeOfFood: e });
				break;
			case 'amountOfFood':
				setFormData({ ...formData, amountOfFood: e });
				break;
			case 'amountOfDucks':
				setFormData({ ...formData, amountOfDucks: e });
			default:
				break;
		}
	};

	// Axios request to API to Post Data
	const url = 'http://localhost:5000/data';
	const sendData = (body) => {
		axios.post(url, body).then((res) => {
			setResMsg(res.data);
		});
	};

	const onClick = (e) => {
		e.preventDefault();

		sendData(formData);
	};

	return (
		<div className='lg:flex justify-center w-full'>
			<form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 lg:w-3/4'>
				<Input
					onChange={(e) => onChange('date', e.target.value)}
					type='datetime-local'
					id='Time'
					label='Time'
				/>
				<Input
					onChange={(e) => onChange('location', e.target.value)}
					type='text'
					id='Location'
					label='Location'
				/>
				<Input
					onChange={(e) => onChange('typeOfFood', e.target.value)}
					type='text'
					id='typeOfFood'
					label='Type of Food'
				/>
				<Input
					onChange={(e) => onChange('amountOfFood', e.target.value)}
					type='text'
					id='NumberOfFood'
					label='Amount of Food'
				/>
				<Input
					onChange={(e) => onChange('amountOfDucks', e.target.value)}
					type='text'
					id='NumberOfDucks'
					label='Amount Of Ducks'
				/>

				<Button title='Add Data' onClick={(e) => onClick(e)} />
				<span className='m-6'>{resMsg}</span>
			</form>
		</div>
	);
};

export default Form;
