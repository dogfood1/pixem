import * as React from 'react';

import { Column, Row } from '@atoms';
import { home } from '@data';

import { Title, Container, Separator } from '../../Home/Styles';

import Converter from './Converter';

const { title } = home.quickConversions;

export default () => {
	return (
		<Container id="quick-conversion">
			<Row>
				<Column width={1}>
					<Title>{title}</Title>
				</Column>
			</Row>
			<Row>
				<Column width={1}>
					<Converter />
				</Column>
			</Row>
			<Row>
				<Column width={1}>
					<Separator marginBottom={1.5} />
				</Column>
			</Row>
		</Container>
	);
};