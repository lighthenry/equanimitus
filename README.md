# equanimitus

## Keyword definitions

Write a Pandoc bracketed span in any Markdown post:

```markdown
I built this with [Hakyll]{.glossary definition="A static site generator written in Haskell."}.
```

Hover to read, or tap/click to keep a definition open. Tap the term again,
click outside, or press Escape to close it. Keyboard users can Tab to a
term, then use Enter or Space to pin or toggle its definition.
You can move the pointer into the popup to read or select its text.

Definitions are plain text, not HTML or Markdown. Use single quotes around
the attribute if the definition contains double quotes:

```markdown
A [term]{.glossary definition='An explanation with "quoted words".'}.
```

Existing `.hover-preview` spans with `data-preview` remain supported.
Without JavaScript, keywords remain ordinary readable text.
The existing Hakyll/Pandoc compiler handles the span syntax; no new dependency
is needed. Post dates and publication behaviour are unchanged.
