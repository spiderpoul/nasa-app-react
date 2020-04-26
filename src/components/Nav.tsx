import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NAV_ITEMS = [
    { to: '/', title: 'Picture of the day', exact: true },
    { to: '/earth', title: 'Earth' },
    { to: '/moon', title: 'Moon' },
    { to: '/uranus', title: 'Uranus' },
    { to: '/jupiter', title: 'Jupiter' },
    { to: '/mars', title: 'Mars' },
    { to: '/mercury', title: 'Mercury' },
    { to: '/neptune', title: 'Neptune' },
    { to: '/saturn', title: 'Saturn' },
    { to: '/venus', title: 'Venus' },
    { to: '/pluto', title: 'Pluto' },
];

const Nav: React.FC<{}> = () => {
    return (
        <NavContainer>
            {NAV_ITEMS.map(({ title, to, exact }) => (
                <NavItem activeClassName="active" to={to} exact={exact}>
                    {title}
                </NavItem>
            ))}
        </NavContainer>
    );
};

const NavItem = styled(NavLink)`
    position: relative;
    padding: 0 15px;
    font-size: 24px;
    text-decoration: none;
    color: #000;
    padding: 0 16px;

    &:hover {
        color: darkcyan;
    }

    &.active {
        color: darkcyan;

        &:before {
            content: '';
            position: absolute;
            bottom: -24px;
            left: 0;
            width: 100%;
            border-bottom: 2px solid darkcyan;
        }
    }
`;

const NavContainer = styled.div`
    display: flex;
    padding: 0 24px 24px;
    margin: 0 -24px;
    border-bottom: 1px solid #ccc;
    flex-wrap: wrap;
`;

export default Nav;
