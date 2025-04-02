import { defineStore } from "pinia";
import { ref } from "vue";

export const useTodoStore = defineStore(
  "todo",
  () => {
    const todos = ref([]);

    const addTodo = (text) => {
      if (text.trim() === "") return;
      todos.value.push({
        id: Date.now(),
        text: text,
        completed: false,
      });
    };

    const toggleComplete = (todo) => {
      todo.completed = !todo.completed;
    };

    const removeTodo = (todo) => {
      todos.value = todos.value.filter((t) => t.id !== todo.id);
    };

    const updateTodo = (id, newText) => {
      const todo = todos.value.find((t) => t.id === id);
      if (todo) {
        todo.text = newText;
      }
    };

    return {
      todos,
      addTodo,
      toggleComplete,
      removeTodo,
      updateTodo,
    };
  },
  {
    persist: true,
  }
);
