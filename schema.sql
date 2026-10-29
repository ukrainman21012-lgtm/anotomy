create table if not exists public.user_data (
  user_id uuid primary key references auth.users (id) on delete cascade,
  data jsonb not null default '{}'::jsonb check (jsonb_typeof(data) = 'object'),
  updated_at timestamptz not null default now()
);

alter table public.user_data enable row level security;

drop policy if exists "Users can read their own data" on public.user_data;
create policy "Users can read their own data"
  on public.user_data for select
  to authenticated
  using ((select auth.uid()) = user_id);

drop policy if exists "Users can insert their own data" on public.user_data;
create policy "Users can insert their own data"
  on public.user_data for insert
  to authenticated
  with check ((select auth.uid()) = user_id);

drop policy if exists "Users can update their own data" on public.user_data;
create policy "Users can update their own data"
  on public.user_data for update
  to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

grant select, insert, update on public.user_data to authenticated;

create table if not exists public.passkey_credentials (
  credential_id text primary key,
  user_id uuid not null references auth.users (id) on delete cascade,
  public_key text not null,
  counter bigint not null default 0 check (counter >= 0),
  transports text[] not null default '{}',
  device_type text not null check (device_type in ('singleDevice', 'multiDevice')),
  backed_up boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists passkey_credentials_user_id_idx
  on public.passkey_credentials (user_id);

alter table public.passkey_credentials enable row level security;
revoke all on public.passkey_credentials from anon, authenticated;
grant select, insert, update, delete on public.passkey_credentials to service_role;

create table if not exists public.passkey_challenges (
  challenge_id uuid primary key default gen_random_uuid(),
  purpose text not null check (purpose in ('register', 'login')),
  user_id uuid references auth.users (id) on delete cascade,
  challenge text not null,
  created_at timestamptz not null default now(),
  expires_at timestamptz not null,
  check ((purpose = 'register' and user_id is not null) or (purpose = 'login' and user_id is null))
);

create index if not exists passkey_challenges_expiration_idx
  on public.passkey_challenges (expires_at);

alter table public.passkey_challenges enable row level security;
revoke all on public.passkey_challenges from anon, authenticated;
grant select, insert, delete on public.passkey_challenges to service_role;
