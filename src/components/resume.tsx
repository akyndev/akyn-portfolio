import { Dispatch, SetStateAction } from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

export function Resume({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  }) {
  
  
  return (
    <Dialog  open={open} onOpenChange={setOpen}>
      <DialogContent className="w-11/12 sm:max-w-[640px]">
        <DialogHeader>
          <DialogTitle>About my career</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <ul>
          {Array.from({ length: 5 }).map((_, i) => (
            <li key={i} className="p-2">
              home
            </li>
          ))}
        </ul>
        <DialogFooter>
          <Button type="submit">Let&apos;s talk</Button>
          {/* <DialogClose>
            close
        </DialogClose> */}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
