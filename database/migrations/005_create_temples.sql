CREATE TABLE IF NOT EXISTS public.temples (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  details TEXT,
  timings TEXT,
  lat DECIMAL(10, 8),
  lng DECIMAL(11, 8),
  map_url TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Set up Row Level Security
ALTER TABLE public.temples ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Temples are viewable by everyone."
  ON public.temples FOR SELECT
  USING ( true );
