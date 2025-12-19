# Hero Sections

This folder contains multiple hero section variants that can be used in your application.

## Available Hero Sections

### Hero Section 1
**Location:** `components/hero-section-1/index.tsx`

The original hero section with:
- Navigation menu (desktop & mobile)
- Logo and login button
- Main heading with badge
- CTA button
- Chart visualization

**Usage:**
```tsx
import HeroSection1 from "@/components/hero-section-1";

export default function Page() {
  return <HeroSection1 />;
}
```

### Hero Section 2
**Location:** `components/hero-section-2/index.tsx`

A placeholder hero section with purple-to-blue gradient styling.

**Usage:**
```tsx
import HeroSection2 from "@/components/hero-section-2";

export default function Page() {
  return <HeroSection2 />;
}
```

### Hero Section 3
**Location:** `components/hero-section-3/index.tsx`

A placeholder hero section with emerald-to-teal gradient styling.

**Usage:**
```tsx
import HeroSection3 from "@/components/hero-section-3";

export default function Page() {
  return <HeroSection3 />;
}
```

## Switching Between Hero Sections

To switch which hero section is displayed, simply update the import in `app/page.tsx`:

```tsx
// Current (Hero Section 1)
import HeroSection1 from "@/components/hero-section-1";

export default function Home() {
  return <HeroSection1 />;
}

// To use Hero Section 2
import HeroSection2 from "@/components/hero-section-2";

export default function Home() {
  return <HeroSection2 />;
}
```

## Customizing Hero Sections

Each hero section is a self-contained component. You can:
1. Edit the component files directly in their respective folders
2. Add new props to make them more configurable
3. Create additional hero section variants by copying an existing one
