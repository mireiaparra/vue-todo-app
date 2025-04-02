# 📌 Master Front End XV - Vue Laboratorio
Aplicar las técnicas vistas en la parte práctica de Vue a una aplicación, dejando espacio para explorar otros frameworks si se desea.
Crear una aplicación web con **Nuxt** para administrar una lista de tareas (**ToDo list**).

📌 **Interfaz de usuario**
- Un campo de texto donde los usuarios puedan ingresar el nombre de una tarea.
- Un botón **"Agregar"** que añada la tarea ingresada a la lista.
- Una lista de tareas donde cada una tenga:
  - Un botón para marcarla como **completada**, que pueda activarse o desactivarse.
  - Un botón **"Eliminar"** para removerla de la lista.

📌 **Gestión de estado**
- La lista de tareas debe almacenarse en el estado de la aplicación utilizando **Pinia**.

💾 **Persistencia de datos**
- Usar el **plugin de Pinia** para mantener las tareas almacenadas incluso al recargar la página:  
  [pinia-plugin-persistedstate](https://github.com/prazdevs/pinia-plugin-persistedstate)
