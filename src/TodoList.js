import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'


const TodoList = (props) => {
  return (
    <>
      <List>
        {props.lists.map((list, i) =>
          <ListItem key={i}>
            <ListItemText primary={list} />
          </ListItem>
        )
        }
      </List>
    </>
  )
}

export default TodoList