import logo from "./assets/logo-in-orbit.svg";
import ilustration from "./assets/let-start-illustatin.svg";
import { Plus, X } from "lucide-react";
import { Button } from "./components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "./components/ui/dialog";
import { Label } from "./components/ui/label";
import { Input } from "./components/ui/input";
import {
  RadioGroup,
  RadioGroupIndicator,
  RadioGroupItem,
} from "./components/ui/radio-group";

export function App() {
  return (
    <Dialog>
      <div className="h-screen flex flex-col items-center justify-center gap-8">
        <img src={logo} alt="in.orbit" />
        <img src={ilustration} alt="lets start ilustration" />
        <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
          Você ainda não cadastrou nenhuma meta, que tal cadastrar uma agora
          mesmo?
        </p>

        <DialogTrigger asChild>
          <Button>
            <Plus />
            Cadastrar meta
          </Button>
        </DialogTrigger>
      </div>
      <DialogContent>
        <div className="flex flex-col gap-6 h-full">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <DialogTitle>Cadastrar meta</DialogTitle>
              <DialogClose>
                <X className="size-5 text-zinc-600" />
              </DialogClose>
            </div>

            <DialogDescription>
              Adicione atividades que <span>te fazem bem</span> e que você quer
              continuar praticando toda semana.
            </DialogDescription>
          </div>

          <form action="" className=" flex-1 flex flex-col justify-between">
            <div className="flex flex-col gap-6 h-full">
              <div className="flex flex-col gap-2">
                <Label htmlFor="title">Qual a atividade?</Label>
                <Input
                  id="title"
                  autoFocus
                  placeholder="Praticar exercicios, meditar, etc.."
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Quantas vezes na semana?</Label>
                <RadioGroup>
                  <RadioGroupItem value="1">
                    <RadioGroupIndicator />
                    <span className="text-zinc-300 text-sm font-medium leading-none">
                      1x na semana
                    </span>
                    <span className="text-lg leading-none">🥱</span>
                  </RadioGroupItem>

                  <RadioGroupItem value="2">
                    <RadioGroupIndicator />
                    <span className="text-zinc-300 text-sm font-medium leading-none">
                      2x na semana
                    </span>
                    <span className="text-lg leading-none">🙂</span>
                  </RadioGroupItem>

                  <RadioGroupItem value="3">
                    <RadioGroupIndicator />
                    <span className="text-zinc-300 text-sm font-medium leading-none">
                      3x na semana
                    </span>
                    <span className="text-lg leading-none">😎</span>
                  </RadioGroupItem>
                </RadioGroup>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <DialogClose asChild>
                <Button type="button" className="flex-1" variant="secondary">
                  Fechar
                </Button>
              </DialogClose>
              <Button className="flex-1">Salvar</Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
