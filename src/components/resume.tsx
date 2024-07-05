import { FileText } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Dispatch, SetStateAction } from "react";
// import { Input } from "./ui/input";
// import { Label } from "./ui/label";

export function Resume( {open, setOpen}: { open: boolean, setOpen: Dispatch<SetStateAction<boolean>>}) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="w-[768px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
