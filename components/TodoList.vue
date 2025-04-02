<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8" lg="6">
        <v-card class="pa-4">
          <v-card-title>
            <h1 class="text-h5">ToDo list</h1>
          </v-card-title>
          <v-card-text>
            <v-text-field
              v-model="newTodoText"
              @keyup.enter="addTodo"
              placeholder="Añadir nueva tarea"
              append-icon="mdi-plus"
              @click:append="addTodo"
              dense
              hide-details
            />
            <v-list>
              <v-list-item
                v-for="todo in todos"
                :key="todo.id"
                class="d-flex align-center w-100 mb-2"
              >
                <TodoItem :todo="todo" @remove-todo="removeTodo" />
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import { useTodoStore } from "~/stores/useTodoStore";
const newTodoText = ref("");
const todoStore = useTodoStore();
const todos = computed(() => todoStore.todos);

const addTodo = () => {
  todoStore.addTodo(newTodoText.value);
  newTodoText.value = "";
};

const removeTodo = (todo) => {
  todoStore.removeTodo(todo);
};
</script>

<style scoped>
.todo-list {
  max-width: 400px;
  margin: 0 auto;
}
</style>
