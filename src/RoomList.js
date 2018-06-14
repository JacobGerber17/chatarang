import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'

import RoomLink from './RoomLink'

class RoomList extends Component {

  state = {
    rooms: {
      general : {
        name: 'general',
        description: 'Whatever. Just chat, folks.',
        messages: []
      },

      s2morning: {
        name: 's2morning',
        description: 'Chat about coursework',
        messages: []
      },

      random: {
        name: 'random',
        description: 'Memes, probably',
        messages: []
      }
    }
  }

  render() {
    return (
      <nav
        className={`RoomList ${css(styles.nav)}`}
      >
        <h2>Rooms</h2>
        <ul className={css(styles.list)}>
          {
            Object.keys(this.state.rooms).map(roomName => (
              <RoomLink key= {roomName} room={this.state.rooms[roomName]} setChannel={this.props.setChannel} />
            ))
          }
        </ul>
      </nav>
    )
  }
}

const styles = StyleSheet.create({
  nav: {
    padding: '0 1rem',
  },

  list: {
    listStyle: 'none',
    marginLeft: 0,
    paddingLeft: 0,
  },
})

export default RoomList