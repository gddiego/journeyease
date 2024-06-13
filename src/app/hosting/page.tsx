import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "../header";

const hospedagens = [
  {
    nome: "Rio de Janeiro",
    preco: "R$ 450,00",
    dias: 3,
    data: "10 de Junho de 2023",
    status: "Publicado",
  },
  {
    nome: "São Paulo",
    preco: "R$ 520,00",
    dias: 4,
    data: "15 de Maio de 2023",
    status: "Publicado",
  },
  // Adicione mais registros conforme necessário
];

export default function HospedagemPage() {
  return (
    <Header>
      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
        <Tabs defaultValue="all">
          <div className="flex items-center">
            <TabsList>
              <TabsTrigger value="all">Todos</TabsTrigger>
              <TabsTrigger value="active">Ativos</TabsTrigger>
              <TabsTrigger value="draft">Rascunhos</TabsTrigger>
              <TabsTrigger value="archived" className="hidden sm:flex">
                Arquivados
              </TabsTrigger>
            </TabsList>
            <div className="ml-auto flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="h-7 gap-1">
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                      Filtrar
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Filtrar por</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem checked>
                    Ativos
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Rascunhos</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>
                    Arquivados
                  </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button size="sm" variant="outline" className="h-7 gap-1">
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Exportar
                </span>
              </Button>
              <Button size="sm" className="h-7 gap-1">
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Adicionar Local
                </span>
              </Button>
            </div>
          </div>
          <TabsContent value="all">
            <Card x-chunk="dashboard-06-chunk-0">
              <CardHeader>
                <CardTitle>Lugares de Hospedagem</CardTitle>
                <CardDescription>
                  Gerencie seus locais de hospedagem e veja seu desempenho.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nome do Lugar</TableHead>
                      <TableHead>Preço</TableHead>
                      <TableHead>Dias</TableHead>
                      <TableHead>Data</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>
                        <span className="sr-only">Ações</span>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {hospedagens.map((hospedagem, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">
                          {hospedagem.nome}
                        </TableCell>
                        <TableCell>{hospedagem.preco}</TableCell>
                        <TableCell>{hospedagem.dias}</TableCell>
                        <TableCell>{hospedagem.data}</TableCell>
                        <TableCell>
                          <Badge>{hospedagem.status}</Badge>
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Abrir Menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Ações</DropdownMenuLabel>
                              <DropdownMenuItem>Editar</DropdownMenuItem>
                              <DropdownMenuItem>Duplicar</DropdownMenuItem>
                              <DropdownMenuItem>Ver</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>Deletar</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </Header>
  );
}
