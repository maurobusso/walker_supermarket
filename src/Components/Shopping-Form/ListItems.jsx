import React from 'react'
import ListItem from './ListItem'

const ListItems = ({lists}) => {
  return (
    <ul className={` w-full h-full flex flex-col flex-nowrap items-start justify-start gap-5`}>
        {
            lists.sort((a,b) => b.id - a.id).map(list => (
                <ListItem
                    key={list.id}
                    list={list}
                />
            ))
        }
    </ul>
  )
}

export default ListItems