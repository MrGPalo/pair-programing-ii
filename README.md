
<a href="https://www.coreof.tech/" target="_blank">
  <img src="https://api.brandy.run/core/logo" width="100" title="coreof.tech" alt="coreof.tech">
</a>

# Exercises W15D5 - Redux

# 1. Not a friendly KATA

En esta misma carpeta encontrarás todo lo necesario para completar el proyecto CORE recipes redux. Lee antentamente las indicaciones detalladas a continuación y amplia el proyecto.

- Genera un `nuevo CRUD completo` en la API correspondiente a un nuevo modelo en bbdd de recetas
- Añade un nuevo formulario en el front que permita `añadir recetas` a través de la API. Estas constarán de nombre, instrucciones, precio y lista de ingredientes con sus respectivas cantidades
- Las recetas también pueden borrarse en la bbdd
- El estado completo del proyecto se gestionará mediante `REDUX` y `REDUX THUNK`
- Reconfigura la estructura de App.ts para que podamos ver la lista ingredientes y la lista de recetas (estas últimas, a su vez, indicarán si sus ingredientes están en la lista de la compra o si falta cantidad).
- El formulario de lista de la compra:
    - Comprobar que no se añaden elementos vacíos
    - Si se repite un ingrediente ya existente en la lista no se añadirá una duplicidad a la lista sino que se incrementará la cantidad del mismo
    - Que normalice la entrada de datos: da igual que escribamos Pan o pan, en ambos casos solo un item de la lista recibirá actualización.
    - Será posible añadir varios elementos a la lista de la compra siempre que estén correctamente separados por comas.
- El formulario de recetas:
    - Detectará duplicidades en el nombre de las recetas y mostrará un mensaje de aviso
- Añade estilos a la aplicación

## 2. Pair-programming

Recuerda que este ejercicio debe completarse en [pair-programming](https://searchsoftwarequality.techtarget.com/definition/Pair-programming). Por cada pareja se realizará una única pull-request bajo el siguiente nombre: 

> `[w15d5] Fullname Student # 1 - Fullname Student # 2`.

Lista de parejas:

*  Daniel Squiteri - Almudena Pérez
*  Jesús Silva Méndez - Saray Rosario Plaza
*  Alejandro Muñoz Suarez - Andrés García Sánchez 
*  Daniel Bonillo Olivares - Salvador Simón Gandía
*  Mihai Catalin Vacniuc - Yolanda Martín Madrid
*  Gibson Palo Sanchez - Patricia Carrasco Sierra - Mauricio Santiago Vázquez Costal

## 3. Entrega

Completa el proyecto de react que encontrarás en esta misma carpeta para que al ejecutar `yarn run dev` vamos el resultado. 
