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
