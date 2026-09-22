-- LIWA prototype — reference schema for the 3 forms in the React app.
-- Not wired up yet; see the `TODO(Supabase)` comments in:
--   src/components/WaitlistBanner/WaitlistBanner.jsx
--   src/components/Footer/Footer.jsx
--   src/pages/Contact/sections/PartnerForm.jsx
--
-- Design: anon (public) INSERT only, no anon SELECT/UPDATE/DELETE — visitors
-- can submit these forms but can never read back what anyone (including
-- themselves) has submitted. Reading the data back is left to an
-- authenticated/service-role context (e.g. a dashboard), not covered here.
--
-- waitlist_signups.email and newsletter_signups.email are UNIQUE so the same
-- address can't sign up twice by accident. The app lowercases the address
-- before inserting, so the constraint catches "Dani@x.com" vs "dani@x.com"
-- as the same signup too. partner_inquiries.email is intentionally NOT
-- unique — someone may legitimately submit more than one inquiry over time.

create table if not exists waitlist_signups (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  created_at timestamptz not null default now()
);

alter table waitlist_signups enable row level security;

create policy "anon can insert waitlist signups"
  on waitlist_signups for insert
  to anon
  with check (true);

-- "Stay in the loop" footer newsletter form (present on every page).
create table if not exists newsletter_signups (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  created_at timestamptz not null default now()
);

alter table newsletter_signups enable row level security;

create policy "anon can insert newsletter signups"
  on newsletter_signups for insert
  to anon
  with check (true);

-- Contact page's 3-step "Partner with us" wizard.
create table if not exists partner_inquiries (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  location text,
  organization_name text,
  organization_type text,
  role text,
  website_link text,
  interests text[] not null default '{}',
  message text,
  heard_about text,
  created_at timestamptz not null default now()
);

alter table partner_inquiries enable row level security;

create policy "anon can insert partner inquiries"
  on partner_inquiries for insert
  to anon
  with check (true);
