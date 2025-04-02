<template>
  <v-card class="todo-item mb-2 w-100">
    <v-row align="center" class="row" no-gutters>
      <v-col cols="auto">
        <v-checkbox v-model="todo.completed" @change="toggleComplete" />
      </v-col>
      <v-col cols="auto" class="flex-grow-1">
        <v-text-field
          v-if="isEditing"
          v-model="editedText"
          @keyup.enter="saveEdit"
          @blur="saveEdit"
          dense
          hide-details
          class="ma-0"
        />
        <span v-else :class="{ completed: todo.completed }">{{ todo.text }}</span>
      </v-col>
      <v-col class="buttons" cols="auto">
        <v-btn icon @click="removeTodo">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
        <v-btn icon @click="editTodo" v-if="!isEditing">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup>
const props = defineProps({
  todo: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["remove-todo"]);
const todoStore = useTodoStore();
const isEditing = ref(false);
const editedText = ref(props.todo.text);

const removeTodo = () => {
  emit("remove-todo", props.todo);
};
const editTodo = () => {
  isEditing.value = true;
  editedText.value = props.todo.text;
};

const saveEdit = () => {
  if (isEditing.value) {
    todoStore.updateTodo(props.todo.id, editedText.value);
    isEditing.value = false;
  }
};
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
.buttons {
  display: flex;
  align-items: center;
  gap: 15px;
}

.row {
  padding: 0 16px;
  display: flex;
  justify-content: center;
  gap: 15px
}

</style>
