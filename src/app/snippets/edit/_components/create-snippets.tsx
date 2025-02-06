'use client';

import { createSnippet } from '@/app/_actions';
import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Plus } from 'lucide-react';

export default function CreateSnippets({ value }: { value: string }) {
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
              <DrawerTitle>Create Snippet</DrawerTitle>
            </DrawerHeader>

            <form
              action={async formData => {
                await createSnippet({
                  link: formData.get('link') as string,
                  title: formData.get('title') as string,
                  content: value,
                });
              }}
              className="flex-1 px-2 space-y-4"
            >
              <fieldset className="flex flex-col gap-2">
                <Label htmlFor="link">Algorithm Link</Label>

                <Input id="link" name="link" autoComplete="off" placeholder="Algorithm Link" />
              </fieldset>

              <fieldset className="flex flex-col gap-2">
                <Label htmlFor="title">Snippet Title</Label>

                <Input id="title" name="title" autoComplete="off" placeholder="Snippet Title" />
              </fieldset>

              <fieldset>
                <DrawerFooter className="flex flex-row gap-2 p-0 py-4 px-2">
                  <Button className="flex-1">Create</Button>

                  <DrawerClose asChild>
                    <Button variant="outline" className="flex-1">
                      Cancel
                    </Button>
                  </DrawerClose>
                </DrawerFooter>
              </fieldset>
            </form>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
