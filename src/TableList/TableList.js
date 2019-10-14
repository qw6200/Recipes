import React from 'react';
import { Button, Icon, Label, Menu, Table, } from 'semantic-ui-react'
import './TableList.css';


class TableList extends React.Component {
	render() {
		return (
			<div className='table'>
				<Table celled>
					<Table.Header>
						<Table.Row>
							<Table.HeaderCell>Ingredient</Table.HeaderCell>
							<Table.HeaderCell>Amount (mg)</Table.HeaderCell>
							<Table.HeaderCell>Calories</Table.HeaderCell>
						</Table.Row>
					</Table.Header>

					<Table.Body>
						<Table.Row>
							<Table.Cell>Salt</Table.Cell>
							<Table.Cell>100</Table.Cell>
							<Table.Cell>50</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>Vinegar</Table.Cell>
							<Table.Cell>50</Table.Cell>
							<Table.Cell>30</Table.Cell>
						</Table.Row>
					</Table.Body>
				</Table>
				<Button primary>Add</Button>
			</div>
		)
	}
}

export default TableList;