"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";

export default function CreateSnippets() {
  return (
    <div className="flex justify-between items-center">
      <h2 className="text-lg font-bold">Create Snippet</h2>

      <Drawer>
        <DrawerTrigger asChild>
          <Button size="icon" variant="outline">
            <Plus className="size-4" />
          </Button>
        </DrawerTrigger>

        <DrawerContent>
          <div className="max-w-md w-full mx-auto h-96 flex flex-col justify-between">
            <DrawerHeader className="p-0 py-4 px-2 text-left">
              <DrawerTitle>Are you absolutely sure?</DrawerTitle>

              <DrawerDescription>
                This action cannot be undone.
              </DrawerDescription>
            </DrawerHeader>

            <div className="flex-1 px-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="name">Snippet name</Label>
                <Input
                  id="name"
                  autoComplete="off"
                  placeholder="Snippet name"
                />
              </div>
            </div>

            <DrawerFooter className="flex flex-row gap-2 p-0 py-4 px-2">
              <Button className="flex-1">Create</Button>

              <DrawerClose asChild>
                <Button variant="outline" className="flex-1">
                  Cancel
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
