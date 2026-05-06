# Button Component

A flexible button component with 4 variants and 3 sizes.

## Variants

| Variant   | Use case |
|-----------|----------|
| Primary   | Main call to action |
| Secondary | Alternative or secondary action |
| Ghost     | Low emphasis actions |
| Danger    | Destructive or irreversible actions |

## Sizes
- **Small** — compact spaces, tables, tags
- **Default** — general use
- **Large** — hero sections, prominent CTAs

## States
- **Default** — normal interactive state
- **Hover** — visual feedback on mouse over
- **Disabled** — non-interactive, reduced opacity

## Tokens used
- `color.brand-primary` — #F74D86
- `borderRadius.md` — 8px
- `typography.fontFamily.base` — Inter

## Usage notes
- Always use Primary for the single most important action on a page
- Never use more than one Primary button in the same section
- Use Danger only for delete or destructive actions
