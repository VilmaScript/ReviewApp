import { createClient } from '@supabase/supabase-js';
 const projectUrl = 'https://qyhemyljfotujmxntqqd.supabase.co'
 const apiKey='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF5aGVteWxqZm90dWpteG50cXFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU0MDg4ODYsImV4cCI6MjAyMDk4NDg4Nn0.Mv1kWIw4cx-hGhysx3H0Rd63X-7ehpjNUHl1et3Aw1M'
 const supabase = createClient(projectUrl, apiKey);

 export default supabase