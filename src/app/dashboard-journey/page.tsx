import { FC } from "react";
import {  Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "../header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { BellIcon, CheckIcon } from "@radix-ui/react-icons";
import { Switch } from "@/components/ui/switch";
import DialogCadastro from "../dialog-cadastro/dialog-cadastro";

const notifications = [
  {
    title: "Irlanda confirmado.",
    description: "48 dias para embarque",
  },
  {
    title: "Viagem para Madrid",
    description: "48 dias para embarque",
  },
  {
    title: "São Paulo Guarulhos Airport",
    description: "48 dias para embarque",
  },
]

const Page: FC = () => {
  return (
    <Header>
      <div className="container-fluid">
        <div style={{ marginBottom: "1rem" }} className="row">
          <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
          <Card
                className="sm:col-span-2" x-chunk="dashboard-05-chunk-0"
              >
                <CardHeader className="pb-3">
                  <CardTitle>JourneyEase</CardTitle>
                  <CardDescription className="max-w-lg text-balance leading-relaxed">
                    Registre suas viagens e roteiros e tenha tudo na journey para visualizar onde e como foram seus gastos.
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                
                <DialogCadastro  title="Registrar um novo Roteiro" description="Preencha os campos abaixo para registrar um roteiro" />
            
               
                </CardFooter>
              </Card>
              <Card x-chunk="dashboard-05-chunk-1">
                <CardHeader className="pb-2">
                  <CardDescription>Gastos viagens</CardDescription>
                  <CardTitle className="text-4xl">R$ 1,329</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground">
                    +25%  no ultimo mês
                  </div>
                </CardContent>
                <CardFooter>
                  <progress value={25} aria-label="25% increase" />
                </CardFooter>
              </Card>
              <Card x-chunk="dashboard-05-chunk-2">
                <CardHeader className="pb-2">
                  <CardDescription>Hospedagens</CardDescription>
                  <CardTitle className="text-4xl">R$ 150,00 </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground">
                    +10% diaria
                  </div>
                </CardContent>
                <CardFooter>
                  <progress value={12} aria-label="12% increase" />
                </CardFooter>
              </Card>
            </div>
            </div>
          
          <div className="col-md-12 mt-2">
            <Card className="col-md-12">
              <CardHeader>
                <CardTitle>Ultimas Viagens</CardTitle>
                <CardDescription>Você pode visualizar seus ultimos roteiros.</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className=" flex items-center space-x-4 rounded-md border p-4">
                  <BellIcon />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      Habilitar todas
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Gerar historico de seus roteiros.
                    </p>
                  </div>
                  <Switch />
                </div>
                <div>
                  {notifications.map((notification, index) => (
                    <div
                      key={index}
                      className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                    >
                      <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">
                          {notification.title}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {notification.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <CheckIcon className="mr-2 h-4 w-4" /> Marcar todos como lidas
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </Header>
  );
};

export default Page;
