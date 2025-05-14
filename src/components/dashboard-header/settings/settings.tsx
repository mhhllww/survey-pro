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
import { resetPassword, signOutUser } from '@/shared/api/auth/firebase-auth.ts';
import { useState } from 'react';

export const Settings = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePasswordUpdate = async () => {
    if (newPassword !== confirmPassword) return;

    try {
      await resetPassword(currentPassword, newPassword);
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (error) {
      console.error(error);
    }
  };

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
              <UiInput
                type='password'
                required
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
            </div>
            <div className='sheet-fields'>
              <UiLabel htmlFor='password'>New Password</UiLabel>
              <UiInput
                type='password'
                required
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div className='sheet-fields'>
              <UiLabel htmlFor='password'>Confirm New Password</UiLabel>
              <UiInput
                type='password'
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>
          <UiButton size='lg' onClick={handlePasswordUpdate}>
            Update Password
          </UiButton>
          <UiButton design='outline' size='lg' onClick={signOutUser}>
            <LogOutIcon /> Sign Out
          </UiButton>
        </div>
      </UiSheetContent>
    </UiSheet>
  );
};
