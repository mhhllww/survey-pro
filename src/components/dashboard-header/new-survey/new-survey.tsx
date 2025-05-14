import {
  UiDialog,
  UiDialogContent,
  UiDialogFooter,
  UiDialogHeader,
  UiDialogTriggerProps,
} from '@/shared/ui/dialog/dialog.tsx';
import { UiButton } from '@/shared/ui/button/button.tsx';
import { CirclePlusIcon } from 'lucide-react';

interface NewSurveyProps {
  buttonText?: string;
}

export const NewSurvey = ({ buttonText = 'New Survey' }: NewSurveyProps) => {
  return (
    <UiDialog>
      <UiDialogTriggerProps asChild>
        <UiButton>
          <CirclePlusIcon /> {buttonText}
        </UiButton>
      </UiDialogTriggerProps>
      <UiDialogContent>
        <UiDialogHeader></UiDialogHeader>
        <UiDialogFooter></UiDialogFooter>
      </UiDialogContent>
    </UiDialog>
  );
};
