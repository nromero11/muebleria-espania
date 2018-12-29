
import React from 'react';
import Loadable from 'react-loadable'

import DefaultLayout from './containers/DefaultLayout';


function Loading() {
  return <div>Loading...</div>;
}

const ListarCliente = Loadable({
  loader: () => import('./views/Customer/List'),
  loading: Loading,
});

const AgregarCliente = Loadable({
  loader: () => import('./views/Customer/Handle'),
  loading: Loading,
});

const ListarCategoria = Loadable({
  loader: () => import('./views/Category/List'),
  loading: Loading,
});

const ModificarCategoria = Loadable({
  loader: () => import('./views/Category/Handle'),
  loading: Loading,
});


// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/clientes/listar', exact: true, name: 'Lista de clientes', component: ListarCliente },
  { path: '/clientes/agregar', exact: true, name: 'Modificar cliente', component: AgregarCliente },
  { path: '/categorias/listar', exact: true, name: 'Lista de categorias', component: ListarCategoria },
  { path: '/categorias/agregar', exact: true, name: 'Modificar categoria', component: ModificarCategoria },
];

export default routes;
