// REACT MODULES ==================================
import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Input } from 'semantic-ui-react'

// Import UD components ==========================


//=================================================

export default class SearchItem extends React.Component {

    render() {
        return (
            <Menu.Item>
                <Input placeholder='Search...'/>
            </Menu.Item>
        );
    }
}
