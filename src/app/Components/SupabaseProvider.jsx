// wraps the app and connect to supabase to access the user auth info
'use client'

import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { supabase } from '../supabase' 

export default function SupabaseProvider({ children }) {
  return (
    <SessionContextProvider supabaseClient={supabase}>
      {children}
    </SessionContextProvider>
  );
}
