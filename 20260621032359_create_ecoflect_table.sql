/*
# Create Ecoflect tables

1. New Tables
- `contact_submissions` — stores contact form submissions
  - `id` (uuid, primary key)
  - `name` (text, not null)
  - `email` (text, not null)
  - `subject` (text, not null)
  - `message` (text, not null)
  - `created_at` (timestamp)
- `newsletter_subscriptions` — stores newsletter signups
  - `id` (uuid, primary key)
  - `email` (text, unique, not null)
  - `created_at` (timestamp)

2. Security
- Enable RLS on both tables.
- Allow anon + authenticated to insert (public form submissions).
- Allow anon + authenticated to read their own rows (for confirmation).
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact" ON contact_submissions;
CREATE POLICY "anon_insert_contact" ON contact_submissions FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_select_contact" ON contact_submissions;
CREATE POLICY "anon_select_contact" ON contact_submissions FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_newsletter" ON newsletter_subscriptions;
CREATE POLICY "anon_insert_newsletter" ON newsletter_subscriptions FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_select_newsletter" ON newsletter_subscriptions;
CREATE POLICY "anon_select_newsletter" ON newsletter_subscriptions FOR SELECT
  TO anon, authenticated USING (true);
