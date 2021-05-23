import React from 'react';
import { TableRow, TableCell, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';



const ItemRows = ({ id, name,price,onClick }) => {
	
	return (
		<TableRow>
			<TableCell>{id}</TableCell>
			<TableCell>
				{name}
			</TableCell>
			<TableCell>
				{price}
			</TableCell>
			<TableCell width="10%" align="left">
				<Button style={{ color: '#ff8b3d' }}>
					{' '}
					<EditIcon />
				</Button>
				<Button onClick style={{ color: '#ff8b3d' }}>
					{' '}
					<DeleteIcon  />
				</Button>
			</TableCell>
			
		</TableRow>
	);
};

export default ItemRows;