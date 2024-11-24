import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { ArrowRight, Cake } from "lucide-react";
import { Link } from "react-router";

export function NeVseTakProsto() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg">
          <Cake />
          Сыйлықты алу
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>А не все так просто!</DialogTitle>
          <DialogDescription>
            Вам нужно четко следовать инструкциям снизу. Вы больше их не
            увидите.
          </DialogDescription>
        </DialogHeader>
        <div>
          <ol className="list-decimal list-inside mb-4">
            <li>перейти по первой инструкции</li>
            <li>полностью выполнить первую инструкцию, перейти на вторую</li>
            <li>полностью выполнить вторую инструкцию, перейти на финальную</li>
          </ol>

          <Link to="/step-1">
            <Button className="w-full">
              первый шаг <ArrowRight />
            </Button>
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
}
