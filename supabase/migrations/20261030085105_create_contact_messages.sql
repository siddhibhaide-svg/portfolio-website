/*
# Create contact_messages table

1. New Tables
- `contact_messages`
  - `id` (uuid, primary key)
  - `name` (text, required, up to 100 characters)
  - `email` (text, required, up to 255 characters)
  - `message` (text, required, up to 2000 characters)
  - `created_at` (timestamp, defaults to now)

2. Security
- Enable RLS on `contact_messages`.
- Visitors (anon and signed-in roles) may only INSERT new messages.
- No SELECT, UPDATE, or DELETE access is granted, so submitted messages cannot be read back through the public site.

3. Important Notes
- The portfolio has no sign-in, so visitors use the anon role.
- Length and format checks are enforced in the table itself as a safety net against oversized or empty submissions.
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (char_length(trim(name)) BETWEEN 1 AND 100),
  email text NOT NULL CHECK (char_length(email) BETWEEN 3 AND 255 AND email LIKE '%_@_%'),
  message text NOT NULL CHECK (char_length(trim(message)) BETWEEN 1 AND 2000),
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

GRANT INSERT ON contact_messages TO anon, authenticated;

DROP POLICY IF EXISTS "anon_insert_contact_messages" ON contact_messages;
CREATE POLICY "anon_insert_contact_messages" ON contact_messages
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
