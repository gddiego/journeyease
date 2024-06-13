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

export default function hospedagemPage() {
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
                    {/* <ListFilter className="h-3.5 w-3.5" /> */}
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
                <CardTitle>Lugares</CardTitle>
                <CardDescription>
                  Gerencie seus locais e veja seu desempenho.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="hidden w-[100px] sm:table-cell">
                        <span className="sr-only">Imagem</span>
                      </TableHead>
                      <TableHead>Nome</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Preço</TableHead>
                      <TableHead className="hidden md:table-cell">
                        Dias
                      </TableHead>
                      <TableHead className="hidden md:table-cell">
                        Registrado em
                      </TableHead>
                      <TableHead>
                        <span className="sr-only">Ações</span>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="hidden sm:table-cell">
                        {/* <Image src="https://via.placeholder.com/50" alt="Rio de Janeiro" /> */}
                      </TableCell>
                      <TableCell className="font-medium">
                        Rio de Janeiro
                      </TableCell>
                      <TableCell>
                        <Badge>Concluido</Badge>
                      </TableCell>
                      <TableCell>R$ 450,00</TableCell>
                      <TableCell className="hidden md:table-cell">4</TableCell>
                      <TableCell className="hidden md:table-cell">
                        10 de Junho de 2023
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <span className="sr-only">Abrir Menu</span>
                              {/* <MoreHorizontal className="h-4 w-4" /> */}
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
                    <TableRow>
                      <TableCell className="hidden sm:table-cell">
                        {/* <Image src="https://via.placeholder.com/50" alt="São Paulo" /> */}
                      </TableCell>
                      <TableCell className="font-medium">São Paulo</TableCell>
                      <TableCell>
                        <Badge>Agendado</Badge>
                      </TableCell>
                      <TableCell>R$ 520,00</TableCell>
                      <TableCell className="hidden md:table-cell">6</TableCell>
                      <TableCell className="hidden md:table-cell">
                        15 de Maio de 2023
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <span className="sr-only">Abrir Menu</span>
                              {/* <MoreHorizontal className="h-4 w-4" /> */}
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
