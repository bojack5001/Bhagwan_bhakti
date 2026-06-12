CREATE TABLE IF NOT EXISTS public.challenges (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  start_date DATE,
  end_date DATE,
  target_count INTEGER,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Set up Row Level Security
ALTER TABLE public.challenges ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Challenges are viewable by everyone."
  ON public.challenges FOR SELECT
  USING ( true );
