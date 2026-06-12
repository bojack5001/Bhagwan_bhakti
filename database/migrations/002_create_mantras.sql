CREATE TABLE IF NOT EXISTS public.mantras (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  audio_url TEXT,
  language TEXT DEFAULT 'en',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Set up Row Level Security
ALTER TABLE public.mantras ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Mantras are viewable by everyone."
  ON public.mantras FOR SELECT
  USING ( true );
