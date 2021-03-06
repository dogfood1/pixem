import * as React from 'react';
import * as random from 'randomstring';

import { Radio, Label, Container } from './Styles';

interface IPropTypes {
	title: string;
	name: string;
	value: string;
	checked: boolean;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface IState {
	readonly id: string;
}

class InputRadio extends React.PureComponent<IPropTypes, IState> {
	
	constructor(props: IPropTypes) {
		super(props);
		this.state = {
			id: random.generate()
		};
	}

	public render() {
		const {title, name, value, checked, onChange} = this.props;
		const { id } = this.state;
		return (
			<Container>
				<Radio 
					id={id}
					name={name}
					value={value}
					checked={checked}
					onChange={onChange}
				/>
				<Label 
					htmlFor={id}>
					{title}
				</Label>
			</Container>
		);
	}

}

export default InputRadio;
