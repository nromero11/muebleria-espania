export default {
  items: [
    {
      name: 'Clientes',
      url: '/clientes',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Listar',
          url: '/clientes/listar',
          icon: 'icon-puzzle',
        },
        {
          name: 'Agregar',
          url: '/clientes/agregar',
          icon: 'icon-puzzle',
        }
      ],
    },
    {
      name: 'Categorias',
      url: '/categorias',
      icon: 'icon-cursor',
      children: [
        {
          name: 'Listar Categorias',
          url: '/categorias/listar',
          icon: 'icon-cursor',
        },
        {
          name: 'Agregar Categoría',
          url: '/categorias/agregar',
          icon: 'icon-cursor',
        },
      ],
    },
    {
      name: 'Productos',
      url: '/productos',
      icon: 'icon-cursor',
      children: [
        {
          name: 'Listar Productos',
          url: '/productos/listar',
          icon: 'icon-cursor',
        },
        {
          name: 'Agregar Producto',
          url: '/productos/agregar',
          icon: 'icon-cursor',
        },
      ],
    },
    {
      name: 'Reporte',
      url: '/reporte',
      icon: 'icon-star',
    },
  ],
};
