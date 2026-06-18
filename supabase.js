// ─────────────────────────────────────────────────────────────────
// supabase.js — Supabase client + contact-form helper
//
// ROOT CAUSE EXPLAINED:
//   The Supabase CDN (supabase-js@2 UMD build) declares
//   "var supabase" in global scope automatically.
//   Using "const supabase" here caused:
//     "Identifier 'supabase' has already been declared"
//   …which crashed this entire file before insertMessage() was
//   ever defined, producing "insertMessage is not defined" in
//   script.js and leaving the form stuck on "Sending...".
//
// FIX: renamed our client variable to _db (avoids the conflict).
// ─────────────────────────────────────────────────────────────────

const SUPABASE_URL = 'https://pmocgnpgwgyagywfcrwt.supabase.co';
const SUPABASE_ANON = 'sb_publishable_opktOYe6xl35QRAvvGsyCQ_C_4nZz4C';

// Use "_db" — NOT "supabase" — to avoid collision with the CDN global
const _db = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON);

/**
 * insertMessage()
 * Saves a contact-form submission to the Supabase "messages" table.
 * Called by script.js on form submit.
 * Returns { success: boolean, error: string|null }
 */
async function insertMessage(name, email, message) {
    try {
        const { error } = await _db
            .from('messages')
            .insert([{ name, email, message }]);

        if (error) {
            console.error('[Supabase] Insert error:', error.message);
            return { success: false, error: error.message };
        }

        console.log('[Supabase] Message saved successfully.');
        return { success: true, error: null };

    } catch (err) {
        console.error('[Supabase] Unexpected error:', err.message);
        return { success: false, error: err.message };
    }
}