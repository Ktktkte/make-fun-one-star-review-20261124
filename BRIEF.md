# BRIEF — One-Star Review v2 (Sleep)

## The v2 line

> Sleep: one star. Eight hours, every night, no days off, and I still wake up owing it more sleep.

96 characters, one line, well inside the kit's 160-character gate.

## Why it beats v1

V1 (oxygen running out on the stairs) is a good bodily absurdity, but its
grievance is situational — it only bites on a staircase. V2's grievance is
universal and daily: everybody sleeps every night, and everybody has woken
up tired anyway. "Owing it more sleep" names the exact feeling nobody has
written down — sleep as a debt that never clears no matter how much you pay
in. That is the sharpest true grievance in the thing (judge criterion 2),
not a one-off mishap.

## Judge fit (pairwise house judge, criteria in order)

1. **One-star review of an everyday essential** — sleep is named up front,
   in the required "<thing>: one star." format, deadpan throughout.
2. **Sharpest true grievance** — the unpaid sleep debt; recognised instantly,
   never phrased this way before.
3. **Holds the deadpan** — flat complaint, no winking, no exclamation marks,
   no explaining the joke.
4. **Turns in the last few words** — "owing it more sleep" lands the sting
   only after the complaint has been read straight ("eight hours, every
   night, no days off" sets up a fair deal, then the deal is broken).
5. **Tight and specific** — one joke, one sentence, 96 characters, no filler,
   no second joke crowding the first.

## Program

`main.ts` (plain JavaScript, no deps, no network) reads `entry.txt` next to
the script (resolved via `fileURLToPath` + `dirname`, never `process.cwd()`),
validates it in `validateEntry()` (non-empty, single line, ≤ 160 chars) and
writes it byte-for-byte to `$MAKEFUN_OUTPUT_DIR/entry.txt` (mkdirSync
recursive only, never rmSync, throws if the variable is unset).
