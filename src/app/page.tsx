// pages/index.tsx

import { CardContent } from "@/components/ui/card";
import Breadcrumbs from "./breadcrumbs";
import Header from "./header";
import { ReactNode } from "react";
import PageDashboard from "./dashboard-journey/page";
// import Provider from "@/config/providerAuth";

 
interface HeaderProps {
  children: ReactNode; // Aceita elementos filhos
}
export default function Home() {
  // const session = await getSession();
  return (
    // <Provider >
      <div>
        <Header>
          {/* Aqui você pode adicionar os elementos filhos que deseja renderizar dentro de Header */}
          {/* Por exemplo, um título */}
          <h1>Bem-vindo à Journeyease Ferramenta de Organização de Viagens</h1>
          {/* <PageDashboard/> */}
        </Header>
        <div className="container mt-4">
          <Breadcrumbs />
          <div className="row justify-content-center">
            <div className="col-md-8">
              <CardContent>
                <div className="card-body">
                  <p className="card-text">
                    {/* Conteúdo da página */}
                  </p>
                </div>
              </CardContent>
            </div>
          </div>
        </div>
      </div>
    // </Provider>
  );
}
