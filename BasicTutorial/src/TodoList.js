import React from 'react';
import { useRecoilValue } from 'recoil';
import { filteredTodoListState } from './RecoilState';
import TodoItemCreator from './TodoItemCreator';
import TodoItem from './TodoItem';
import TodoListStats from './TodoListStats';
import TodoListFilters from './TodoListFilters';

function TodoList() {
    const todoList = useRecoilValue(filteredTodoListState);

    return (
        <>
            <TodoListStats />
            <TodoListFilters />
            <TodoItemCreator />

            {todoList.map((todoItem) => (
                <TodoItem item={todoItem} />
            ))}
        </>
    );
}

export default TodoList;
