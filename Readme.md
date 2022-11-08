# BurgerQueen APP

Es una aplicación tipo ecommerce de comida rápida, su especialidad son las hamburguesas, pero cuenta con otras categorías como bebidas, ensaladas y complementos.

## Contenido

En la **página principal** se puede visualizar todo el catálogo de productos que incluye la imagen, el título y el precio del producto además de un botón ‘Ver más’, que al dar clic redireccionará a la página de **detalle del producto**, que como su nombre lo dice, mostrará más información sobre este, como: una breve descripción, una etiqueta que muestra si el producto se encuentra disponible (en base al stock del mismo), además del valor nutricional, un contador para agregar o quitar al carrito y un botón de agregar a la orden.

Se puede navegar desde el menú a las otras **categorías** ya mencionadas, donde se muestra nuevamente la lista de catálogo según la categoría seleccionada.
Al agregar un producto al carrito y dar clic en ‘Finalizar compra’ redireccionará a la página de **carrito** donde se puede ver el detalle de la orden, quitar elemenetos del carrito y vaciar el carrito.

El botón ir a pagar redirecciona al formulario de pago donde al completar los campos y dar clic en Finalizar compra se registrará la orden con los datos del usuario proporcionados y el detalle de compra.
Por último redireccionará a la página de pago exitoso donde se verá el resumen de compra con los datos correspondientes.

## Instalación

```bash
# Clone this repository
$ git clone https://github.com/claudiaarivera/burgerqueenapp-rivera.git

# Install dependencies
$ npm install

# Run the app
$ npm run dev
```

## Dependencias

### Bootstrap

Para facilitar la maquetación se ha implementado bootstrap, en la raíz del proyecto se importó solo las grillas **bootstrap-grid.css** 

[https://getbootstrap.com/docs/5.2/getting-started/contents/#compiled-bootstrap](https://getbootstrap.com/docs/5.2/getting-started/contents/#compiled-bootstrap)

### Firebase

### SASS

Preprocesador de CSS.

### React icons

Íconos de diferentes fuentes basado en componentes.
