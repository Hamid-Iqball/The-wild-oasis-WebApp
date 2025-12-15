import React from 'react';
import { useUser } from '../../ViewModal/Hooks/AuthenticationsHooks/useUser';

function Avatar() {
  const { user } = useUser() || {};
  console.log(user)
  const { fullName = 'Anonymous', avatar } = user?.user_metadata || {};

  return (
    <div className="flex justify-center items-center gap-[6px] mr-2 ">
      <img
        src={avatar || 'default-user.jpg'}
        alt={`Avatar of ${fullName}`}
        title={fullName}
        className="w-12 h-12 rounded-full object-cover border border-spacing-4 border-customOrange-600"
      />
      <p className="font-semibold text-customOrange-800 dark:text-customOrange-400 text-sm">{fullName}</p>
    </div>
  );
}

export default Avatar;
