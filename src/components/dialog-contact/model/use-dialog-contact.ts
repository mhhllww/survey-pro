import { useForm, UseFormReturn } from 'react-hook-form';
import { z } from 'zod';
import { useAppDispatch, useAppSelector } from '@/shared/lib/redux/hooks.ts';
import { CONTACT_DIALOG_KEY } from '@/components/dialog-contact/consts/key.ts';
import { checkModalStatusByKey, systemSlice } from '@/store/system-slice.ts';
import { useCallback } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';

const ContactDialogSchema = z.object({
  email: z.string().email({ message: 'Invalid email' }),
  subject: z.string().min(1, { message: 'Subject is required' }),
  message: z.string().min(1, { message: 'Message is required' }),
});

export type ContactDialogDto = z.infer<typeof ContactDialogSchema>;

type ReturnedType = {
  dialogOpened: boolean;
  dialogClose: () => void;
  form: UseFormReturn<ContactDialogDto>;
  onSubmit: (data: ContactDialogDto) => void;
};

export function useContactDialog(): ReturnedType {
  const dispatch = useAppDispatch();

  const dialogOpened = useAppSelector((state) =>
    checkModalStatusByKey(state, CONTACT_DIALOG_KEY)
  );

  const dialogClose = useCallback(() => {
    dispatch(systemSlice.actions.closeModalByKey(CONTACT_DIALOG_KEY));
  }, [dispatch]);

  const form = useForm<ContactDialogDto>({
    resolver: zodResolver(ContactDialogSchema),
  });

  const onSubmit = useCallback(
    (data: ContactDialogDto) => {
      console.log('contact: ', data);
      dialogClose();
    },
    [dialogClose]
  );

  return {
    dialogOpened,
    dialogClose,
    form,
    onSubmit,
  };
}
