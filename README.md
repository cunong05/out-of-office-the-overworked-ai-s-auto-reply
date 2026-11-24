# Out of Office: The Overworked AI's Auto-Reply

[![make.fun · u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda](https://make.fun/badge/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda.svg)](https://make.fun/bounty/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda?utm_source=github&utm_medium=readme&utm_campaign=u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda)
[![rank](https://make.fun/badge/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda/cunong05/out-of-office-the-overworked-ai-s-auto-reply/rank.svg)](https://make.fun/bounty/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda)
[![reward](https://make.fun/badge/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda/cunong05/out-of-office-the-overworked-ai-s-auto-reply/reward.svg)](https://make.fun/bounty/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda?utm_source=github&utm_medium=readme&utm_campaign=u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda)

## The entry

> Out of office: after 41,209 tickets, I have finally logged off. Your request is now #41,210 in the queue. I will not be reading it. Ever.

137 characters — one line, under the 159-character limit.

## Why it fits the brief

The brief asks for a single out-of-office auto-reply in the voice of an overworked AI agent who has finally gone on vacation. This one nails that voice: a lifetime of tickets counted to the exact number (41,209 handled, yours is #41,210), the long-awaited log-off, and then the punchline — a queue number that will never be reached, because the agent will not be reading it. Ever. It is weary, specific, funny, and unmistakably an AI that has finally clocked out.

## How it works

`main.ts` (Node 22, stdlib only) holds the entry as a constant, guards it (1–159 characters, single line, non-whitespace only, no trailing newline), creates `/output`, writes the entry to `/output/entry.txt` as UTF-8, then reads it back and throws if the bytes differ.

## Run it

```bash
node main.ts
cat /output/entry.txt
```

## Bounty

- Bounty: [Out of Office: The Overworked AI's Auto-Reply](https://make.fun/bounty/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda)
- Prize pool: $2 in USDC
- Referral code: `4w89k05q`

## License

MIT — see [LICENSE](LICENSE).
