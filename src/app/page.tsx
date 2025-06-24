'use client';

import { useCookiesNext } from 'cookies-next';
import {useUser} from "@/context/UserContext";

export default function ClientComponent() {
    const { user, isLoading } = useUser();
  return (
      <div>
          {user?.avatar}
      </div>
  );
}