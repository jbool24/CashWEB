// REACT MODULES ==================================
import React from 'react';
import { Route } from 'react-router-dom';
import { Menu, Icon } from 'semantic-ui-react'

// Import UD components ==========================
import SearchItem from './SearchItem'
import { BookMenuItem } from './ListItems'
//=================================================

export default class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        books: [{id: 1, title: 'MainBook'}, {id: 2, title: 'OtherBook'}]
    };
  }

  handleItemClick = (e, {name}) => {
      // Router.push({ pathname: `/${to}` })
      // this.setState({activeItem: name})
  }

  render() {
    const {activeItem} = this.state

    return (
        <Menu className='mr-5' vertical >
            <SearchItem />
            <Menu.Item>
                Books
                <Menu.Menu>
                    {this.state.books.map(book => {
                        return <BookMenuItem
                                key={book.id}
                                id={book.id}
                                title={book.title} />
                    })}
                </Menu.Menu>
            </Menu.Item>

            <Menu.Item name='browse' active={activeItem === 'browse'} onClick={this.handleItemClick}>
              <Icon name='grid layout'/>
              Browse
            </Menu.Item>
            <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick}>
              Messages
            </Menu.Item>


        </Menu>
    )
  }
}
