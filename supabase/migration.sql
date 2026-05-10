-- Run this once in the Supabase SQL Editor for project swjqirlgymsaubvhadvh.
-- Creates ratings + comments tables with public read/write (suitable for
-- a personal site; tighten policies later if you add auth).

create table if not exists public.ratings (
  id uuid primary key default gen_random_uuid(),
  game_slug text not null,
  name text not null,
  stars smallint not null check (stars between 1 and 5),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (game_slug, name)
);

create table if not exists public.comments (
  id uuid primary key default gen_random_uuid(),
  game_slug text not null,
  name text not null,
  body text not null check (length(body) between 1 and 2000),
  created_at timestamptz not null default now()
);

create index if not exists ratings_game_idx on public.ratings (game_slug);
create index if not exists comments_game_idx on public.comments (game_slug, created_at desc);

alter table public.ratings  enable row level security;
alter table public.comments enable row level security;

drop policy if exists "ratings_select" on public.ratings;
drop policy if exists "ratings_insert" on public.ratings;
drop policy if exists "ratings_update" on public.ratings;
drop policy if exists "comments_select" on public.comments;
drop policy if exists "comments_insert" on public.comments;

create policy "ratings_select" on public.ratings for select using (true);
create policy "ratings_insert" on public.ratings for insert with check (true);
create policy "ratings_update" on public.ratings for update using (true) with check (true);

create policy "comments_select" on public.comments for select using (true);
create policy "comments_insert" on public.comments for insert with check (true);
