import styled, { css } from 'styled-components';

import { _vrrem, _rem } from '../../../util-wrappers';

export default styled.input.attrs({
    type: 'text'
})`${
    ({theme: {colors: {cadetBlue, shark, shakespeare}}}) => css`
        border-radius: 3px;
        border: 1px solid ${cadetBlue};
        padding: ${_vrrem(0.5)} ${_vrrem(1)};
        font-size: ${_rem(16)};
        color: ${shark};
        width: 100%;

        &:focus {
            border-color: ${shakespeare};
        }
    `
}`;