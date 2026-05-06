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

## Accessibility Notes

### What's good
- Keyboard navigation — focus ring visible for keyboard users
- Disabled state — correctly handled with reduced opacity
- Smooth transitions — no motion issues

### Issues to fix

| Issue | Severity |
|---|---|
| Icon buttons need aria-label | 🔴 High |
| Add default type="button" | 🟡 Medium |
| Verify danger colour contrast | 🟡 Medium |
| Verify --ring CSS variable contrast | 🟡 Medium |

### Fix examples

Add aria-label to icon buttons:
```jsx
<Button size="icon" aria-label="Close dialog">
  <XIcon />
</Button>
```

Add default type to button:
```jsx
<Comp
  type="button"
  data-slot="button"
  ...
/>
```
