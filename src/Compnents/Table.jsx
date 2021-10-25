import { useEffect, useState } from 'react';

import TableRow from './Util/Table/TableRow';
import TableHead from './Util/Table/TableHead';
import axios from 'axios';

const Table = () => {
	const [incomingData, setIncomingData] = useState();

	useEffect(() => {
		axios
			.get('http://localhost:5000/data')
			.then((res) => setIncomingData(res.data));
	}, []);

	return (
		<div className='h-80 min-w-96 overflow-y-scroll flex justify-center bg-white rounded'>
			<table className=''>
				<thead className='border-b-8 border-gray-300'>
					<TableHead
						headerOne='Time'
						headerTwo='Location'
						headerThree='Food Type'
						headerFour='# Of Food'
						headerFive='# Of Ducks'
					/>
				</thead>

				<tbody className='divide-y overflow-y-scroll'>
					{incomingData === undefined ? (
						<h2> loading </h2>
					) : (
						incomingData.map((row) => (
							<TableRow
								key={row.id}
								dataOne={row.time}
								dataTwo={row.location}
								dataThree={row.foodType}
								dataFour={row.amountOfFood}
								dataFive={row.amountOfDucks}
							/>
						))
					)}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
