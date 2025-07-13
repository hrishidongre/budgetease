'use client'

import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { supabase } from '../supabase'  // adjust if path differs

export default function SupabaseProvider({ children }) {
  return (
    <SessionContextProvider supabaseClient={supabase}>
      {children}
    </SessionContextProvider>
  );
}
