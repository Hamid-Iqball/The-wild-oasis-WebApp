import { createClient } from '@supabase/supabase-js'

// Access environment variables with proper format for React
export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL 
export const supabaseKey = import.meta.env.VITE_SUPABASE_API_KEY 

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase

