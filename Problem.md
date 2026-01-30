# Todo List Application (JavaScript)

## Problem Statement

Create a simple **Todo List application** using JavaScript that runs in the browser console and allows users to manage daily tasks.

The application should repeatedly ask the user for an action until they choose to quit.

## Functional Requirements

The application should support the following commands:

1. **add**
   - Ask the user to enter a task.
   - Add the task to the todo list.

2. **list**
   - Display all tasks with their index numbers.
   - If no tasks are present, show an appropriate message.

3. **delete**
   - Ask the user for the index of the task to delete.
   - Remove the task if the index is valid.
   - Show an error message for invalid indices.

4. **quit**
   - Exit the application.

## Constraints

- Use basic JavaScript concepts only (arrays, loops, conditionals).
- No external libraries.
- Interaction should happen using `prompt()` and `console.log()`.

## Expected Outcome

A working console-based todo list application that allows users to add, view, and delete tasks until they choose to quit.
