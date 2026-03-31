import {RouterProvider, createBrowserRouter } from "react-router-dom";
import Carta from "./pages/Carta/Carta";
import Exemplos from "./pages/Exemplos/Exemplos";
import Inicio from "./pages/Inicio/Inicio";
import Regras from "./pages/Regras/Regras";
import Configuracoes from "./pages/Configuracoes/Configuracoes";
import RootLayout from "./Layout/rootLayout";

const routes = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <Inicio /> },
      { path: '/carta', element: <Carta /> },
      { path: '/regras', element: <Regras /> },
      { path: '/exemplos', element: <Exemplos /> },
      { path: '/configuracoes', element: <Configuracoes /> },
    ],
    // TODO: Fazer um "errorElement" com página de erro"
  }
]);

const WebitoApp = () => <RouterProvider router={routes} />;

export default WebitoApp;