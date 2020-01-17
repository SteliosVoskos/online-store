import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
    margin: 0 0.5em;
    background-color: #F1F1F1;
    padding: 1em 3em;
    text-decoration: none;
    color: #0C1D28;
    :hover {
        text-decoration: underline;
    } 
`;

export default class NavigationItem extends React.Component {
    render() {
        const {
            path,
            text
        } = this.props;

        return <StyledLink to={path}>{text}</StyledLink>;
    }
}

NavigationItem.propTypes = {
    path: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

NavigationItem.defaultProps = {
    path: '',
    text: ''
};