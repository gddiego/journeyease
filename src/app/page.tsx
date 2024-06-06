// pages/index.tsx

import { CardContent } from "@/components/ui/card";
import Breadcrumbs from "./breadcrumbs";
import Header from "./header";
// import Provider from "@/config/providerAuth";

 

export default function Home() {
  // const session = await getSession();
  return (
    // <Provider >
      <div>
        <Header />
        <div className="container mt-4">
          <Breadcrumbs />
          <div className="row justify-content-center">
            <div className="col-md-8">
              <CardContent>
                <div className="card-body">
                  <h2 className="card-title">Bem-vindo à Journeyease Ferramenta de Organização de Viagens</h2>
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
