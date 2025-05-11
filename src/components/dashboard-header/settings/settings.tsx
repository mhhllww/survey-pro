import {
  UiSheet,
  UiSheetContent,
  UiSheetDescription,
  UiSheetFooter,
  UiSheetHeader,
  UiSheetTitle,
  UiSheetTrigger,
} from '@/shared/ui/sheet/sheet.tsx';
import { UiButton } from '@/shared/ui/button/button.tsx';
import { LockIcon, LogOutIcon, SettingsIcon } from 'lucide-react';
import { UiLabel } from '@/shared/ui/label/label.tsx';
import { UiInput } from '@/shared/ui/input/input.tsx';

export const Settings = () => {
  return (
    <UiSheet>
      <UiSheetTrigger asChild>
        <UiButton design='outline'>
          <a href='/'>
            <SettingsIcon /> Settings
          </a>
        </UiButton>
      </UiSheetTrigger>
      <UiSheetContent>
        <UiSheetHeader>
          <UiSheetTitle>Account Settings</UiSheetTitle>
          <UiSheetDescription>Manage your account security.</UiSheetDescription>
          <UiSheetTitle>
            <LockIcon />
            Change Password
          </UiSheetTitle>
        </UiSheetHeader>
        <div>
          <div>
            <UiLabel htmlFor='password'>Current Password</UiLabel>
            <UiInput type='password' required />
          </div>
          <div>
            <UiLabel htmlFor='password'>New Password</UiLabel>
            <UiInput type='password' required />
          </div>
          <div>
            <UiLabel htmlFor='password'>Confirm New Password</UiLabel>
            <UiInput type='password' required />
          </div>
          <UiButton>Update Password</UiButton>
        </div>
        <UiSheetFooter>
          <UiButton>
            <LogOutIcon /> Sign Out
          </UiButton>
        </UiSheetFooter>
      </UiSheetContent>
    </UiSheet>
  );
};
