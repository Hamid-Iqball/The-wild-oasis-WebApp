import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://vgsfnabpxjclsbxtblzd.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZnc2ZuYWJweGpjbHNieHRibHpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ5MzM4NDYsImV4cCI6MjA0MDUwOTg0Nn0.18QChAft0uTUwNFlQhmdKnQgotZvGOZslC8nHC9LLuk'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase