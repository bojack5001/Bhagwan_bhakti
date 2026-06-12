CREATE TABLE IF NOT EXISTS public.jap_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  mantra_id UUID NOT NULL REFERENCES public.mantras(id) ON DELETE CASCADE,
  count INTEGER NOT NULL DEFAULT 0,
  date DATE NOT NULL DEFAULT CURRENT_DATE,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Set up Row Level Security
ALTER TABLE public.jap_sessions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage their own jap sessions."
  ON public.jap_sessions FOR ALL
  USING ( auth.uid() = user_id );
