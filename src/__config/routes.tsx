import { BadgeCP } from "components/shared/badge/bade.component";
import Dashboard from "modules/dashboard/containers/dashboard.container";
import {
  MdChat,
  MdNotifications,
  MdPeople,
  MdPerson,
  MdPhotoLibrary,
} from "react-icons/md";

export interface Route {
  path: string;
  element: JSX.Element;
  label?: string;
  icon?: JSX.Element;
}

export interface RouteGroup {
  label: string;
  routes: Route[];
}

export const routeGroups: RouteGroup[] = [
  {
    label: "Principal",
    routes: [
      {
        path: "/albuns",
        element: <Dashboard />,
        label: "Álbuns",
        icon: <MdPhotoLibrary color="#fff" size={24} />,
      },
      {
        path: "/perfil",
        element: <Dashboard />,
        label: "Meu perfil",
        icon: <MdPerson color="#fff" size={24} />,
      },
      {
        path: "/clientes",
        element: <Dashboard />,
        label: "Clientes",
        icon: <MdPeople color="#fff" size={24} />,
      },
    ],
  },
  {
    label: "Outros",
    routes: [
      {
        path: "/notificacoes",
        element: <Dashboard />,
        label: "Notificações",
        icon: (
          <BadgeCP content="3">
            <MdNotifications color="#fff" size={24} />
          </BadgeCP>
        ),
      },
      {
        path: "/comentarios",
        element: <Dashboard />,
        label: "Comentários",
        icon: <MdChat color="#fff" size={24} />,
      },
    ],
  },
];
