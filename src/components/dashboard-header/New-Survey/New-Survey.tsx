import {
  UiDialog,
  UiDialogContent,
  UiDialogDescription,
  UiDialogFooter,
  UiDialogHeader,
  UiDialogTitle,
  UiDialogTriggerProps,
} from '@/shared/ui/dialog/dialog.tsx';
import { UiButton } from '@/shared/ui/button/button.tsx';
import { UiLabel } from '@/shared/ui/label/label.tsx';
import { UiInput } from '@/shared/ui/input/input.tsx';
import { CirclePlusIcon } from 'lucide-react';
import {
  UiDropdownMenu,
  UiDropdownMenuGroup,
  UiDropdownMenuItem,
  UiDropdownMenuShortcut,
} from '@/shared/ui/dropdown-menu/dropdown-menu.tsx';
import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';

export const NewSurvey = () => {
  return (
    <UiDialog>
      <UiDialogTriggerProps asChild>
        <UiButton>
          <CirclePlusIcon /> New Survey
        </UiButton>
      </UiDialogTriggerProps>
      <UiDialogContent>
        <UiDialogHeader>
          <UiDialogTitle>Create New Survey</UiDialogTitle>
          <UiDialogDescription>
            Enter the basic information for your survey. You can add questions
            in the next step.
          </UiDialogDescription>
        </UiDialogHeader>
        <div>
          <div>
            <UiLabel htmlFor='text'>Survey Title</UiLabel>
            <UiInput type='text' required />
          </div>
          <div>
            <UiLabel htmlFor='text'>Description</UiLabel>
            <UiInput type='text' required />
          </div>
          <div>
            <UiLabel htmlFor='text'>Category</UiLabel>
            <UiDropdownMenu>
              <DropdownMenuTrigger asChild>
                <UiLabel>Market Research</UiLabel>
              </DropdownMenuTrigger>
              <UiDropdownMenuGroup>
                <UiDropdownMenuItem>
                  Profile
                  <UiDropdownMenuShortcut>⇧⌘P</UiDropdownMenuShortcut>
                </UiDropdownMenuItem>
                <UiDropdownMenuItem>
                  Billing
                  <UiDropdownMenuShortcut>⌘B</UiDropdownMenuShortcut>
                </UiDropdownMenuItem>
                <UiDropdownMenuItem>
                  Settings
                  <UiDropdownMenuShortcut>⌘S</UiDropdownMenuShortcut>
                </UiDropdownMenuItem>
                <UiDropdownMenuItem>
                  Keyboard shortcuts
                  <UiDropdownMenuShortcut>⌘K</UiDropdownMenuShortcut>
                </UiDropdownMenuItem>
              </UiDropdownMenuGroup>
            </UiDropdownMenu>
          </div>
        </div>
        <UiDialogFooter>
          <UiButton design='outline'>Cancel</UiButton>
          <UiButton>Continue</UiButton>
        </UiDialogFooter>
      </UiDialogContent>
    </UiDialog>
  );
};
