create table blogs (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  content text not null,
  thumbnail text, -- Supabase Storage URL
  video_url text, -- YouTube or other video links (optional)
  created_at timestamp with time zone default timezone('utc'::text, now()),
  views integer default 0,
  tags text[], -- Array of tags
  type text -- e.g., 'Tutorial', 'Opinion', etc.
);