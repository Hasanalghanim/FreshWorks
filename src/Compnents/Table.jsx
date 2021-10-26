import { useEffect, useState } from 'react';

import TableRow from './Util/Table/TableRow';
import TableHead from './Util/Table/TableHead';
import axios from 'axios';

const Table = () => {
	const [incomingData, setIncomingData] = useState();

	// on Component Render, Axios get Request for All Data sets inComing Data state
	// While Data === Undefind, Loading status shows
	useEffect(() => {
		axios
			.get('http://localhost:5000/data')
			.then((res) => setIncomingData(res.data));
	}, []);
	// Table Rows get mapped with IncomingData State Var.
	// Eash Indx gets a <TableRow />
	return (
		<div className='h-96 overflow-y-scroll flex justify-center bg-white rounded border-b-4 border-myLightPurple'>
			<table className='w-full'>
				<thead className='border-b-8 border-gray-300 bg-myLightPurple sticky top-0'>
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
						<tr>
							<td>loading</td>
						</tr>
					) : (
						incomingData.map((row) => (
							<TableRow
								key={row.Id}
								dataOne={row.time}
								dataTwo={row.location}
								dataThree={row.typeOfFood}
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
