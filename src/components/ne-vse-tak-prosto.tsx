import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Cake } from "lucide-react";

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
            Вам нужно четко следовать инструкциям снизу.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <ol className="list-decimal list-inside">
            <li>какая-то инструкция</li>
            <li>какая-то инструкция</li>
            <li>какая-то инструкция</li>
            <li>какая-то инструкция</li>
          </ol>
        </div>
      </DialogContent>
    </Dialog>
  );
}
