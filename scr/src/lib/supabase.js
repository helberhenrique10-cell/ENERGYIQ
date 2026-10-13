import { createClient } from "@supabase/supabase-js";

// Substitua pelas suas credenciais do projeto Supabase
const supabaseUrl = "https://helberhenrique10-cell.supabase.co"; // URL do seu projeto Supabase
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."; // Sua chave anon pública

export const supabase = createClient(supabaseUrl, supabaseAnonKey);