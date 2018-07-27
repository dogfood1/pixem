import React, { PureComponent } from 'react';
import styled from 'styled-components';

import { _rem } from '../../../../../../util-wrappers';

const StyledSubtitle = styled('h2')`
    font-size: ${_rem(14)};
    font-weight: 400;
`;

class Subtitle extends PureComponent {

    componentDidUpdate() {
        console.log('Subtitle update', this.props);
    }


    render() {
        return (
            <StyledSubtitle>
                A tool made by <a href="#">Matthew Kosloski</a>
            </StyledSubtitle>
        );
    }
}

export default Subtitle;