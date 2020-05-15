import React from 'react';
import { useRecoilValue } from 'recoil';
import { todoListState } from './RecoilState';
import TodoItemCreator from './TodoItemCreator';
import TodoItem from './TodoItem';

function TodoList() {
    const todoList = useRecoilValue(todoListState);

    return (
        <>
            {/* <TodoListStats /> */}
            {/* <TodoListFilters /> */}
            <TodoItemCreator />
            {todoList.map((todoItem) => (
                <TodoItem item={todoItem} />
            ))}
        </>
    );
}

export default TodoList;
