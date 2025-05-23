import {
  UiDialog,
  UiDialogContent,
  UiDialogFooter,
  UiDialogHeader,
  UiDialogTrigger,
} from '@/shared/ui/dialog/dialog.tsx';
import { UiButton } from '@/shared/ui/button/button.tsx';
import { CirclePlusIcon } from 'lucide-react';

export const NewSurvey = ({
  buttonText = 'New Survey',
}: {
  buttonText?: string;
}) => {
  return (
    <UiDialog>
      <UiDialogTrigger asChild>
        <UiButton>
          <CirclePlusIcon /> {buttonText}
        </UiButton>
      </UiDialogTrigger>
      <UiDialogContent>
        <UiDialogHeader></UiDialogHeader>
        <UiDialogFooter></UiDialogFooter>
      </UiDialogContent>
    </UiDialog>
  );
};
