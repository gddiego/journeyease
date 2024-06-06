'use client'
import { FC } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react"; // Mantenha a importação aqui

interface DialogCadastroProps {
  title: string;
  description: string;
}

const DialogCadastro: FC<DialogCadastroProps> = ({ title, description }) => {
  const [cidade, setCidade] = useState("");
  const [horario, setHorario] = useState("");
  const [dataregistro, setDataRegistro] = useState("");

  const handleSave = () => {
    // Coloque aqui a lógica para salvar os dados
    // console.log("Data saved:", { name, username });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Criar Roteiro</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="cidade" className="text-right">
              Cidade
            </Label>
            <Input id="cidade" value={cidade} onChange={(e) => setCidade(e.target.value)} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="horario" className="text-right">
              Horario
            </Label>
            <Input id="horario" value={horario} onChange={(e) => setHorario(e.target.value)} className="col-span-3" />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="dataregistro" className="text-right w-max">
              Data Registro
            </Label>
            <Input id="dataregistro" value={dataregistro} onChange={(e) => setDataRegistro(e.target.value)} className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleSave}>Salvar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogCadastro;

