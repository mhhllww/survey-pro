import {
  UiSheet,
  UiSheetContent,
  UiSheetDescription,
  UiSheetHeader,
  UiSheetTitle,
  UiSheetTrigger,
} from '@/shared/ui/sheet/sheet.tsx';
import { UiButton } from '@/shared/ui/button/button.tsx';
import { LockIcon, LogOutIcon, SettingsIcon } from 'lucide-react';
import { UiLabel } from '@/shared/ui/label/label.tsx';
import { UiInput } from '@/shared/ui/input/input.tsx';
import '../settings/settings.scss';

export const Settings = () => {
  return (
    <UiSheet>
      <UiSheetTrigger asChild>
        <UiButton design='outline'>
          <SettingsIcon /> Settings
        </UiButton>
      </UiSheetTrigger>
      <UiSheetContent>
        <div className='sheet-content'>
          <UiSheetHeader>
            <UiSheetTitle>Account Settings</UiSheetTitle>
            <UiSheetDescription>
              Manage your account security.
            </UiSheetDescription>
          </UiSheetHeader>
          <div className='sheet-subtitle'>
            <LockIcon className='sheet-icon' />
            Change Password
          </div>
          <div className='sheet-container'>
            <div className='sheet-fields'>
              <UiLabel htmlFor='password'>Current Password</UiLabel>
              <UiInput type='password' required />
            </div>
            <div className='sheet-fields'>
              <UiLabel htmlFor='password'>New Password</UiLabel>
              <UiInput type='password' required />
            </div>
            <div className='sheet-fields'>
              <UiLabel htmlFor='password'>Confirm New Password</UiLabel>
              <UiInput type='password' required />
            </div>
          </div>
          <UiButton size='lg'>Update Password</UiButton>
          <UiButton design='outline' size='lg'>
            <LogOutIcon /> Sign Out
          </UiButton>
        </div>
      </UiSheetContent>
    </UiSheet>
  );
};
