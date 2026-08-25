# Astro Layout Starter

Personal starter template for fast static layout projects on Astro.

The goal of this project is to keep a clean base for landing pages and small websites: ready layouts, reusable section wrappers, global SCSS helpers, aliases, and a predictable component structure.

## Stack

- Astro
- SCSS / Sass
- TypeScript checks via `astro check`
- Vite alias `@` for `src`

## Project Structure

```text
src/
  components/
    layout/
      PageHeader/
      PageFooter/
      Section/

    modules/
      Button/
      SectionTitle/

    sections/
      Header/
      Footer/
      Hero/

  layouts/
    MainLayout/

  pages/
    index.astro

  styles/
    index.scss
    base/
      _base.scss
      _fonts.scss
      _functions.scss
      _mixins.scss
      _variables.scss
```

## Folders

`src/layouts`

Page-level layouts. `MainLayout` contains the document shell: `html`, `head`, global styles, favicon links, and the page slot.

`src/components/layout`

Structural components that help build the page layout. These are not content sections by themselves.

- `PageHeader` wraps header content.
- `PageFooter` wraps footer content.
- `Section` wraps page sections and provides the inner container.

`src/components/sections`

Real page sections: `Hero`, `Header`, `Footer`, and future blocks like `About`, `Features`, `FAQ`, etc.

`src/components/modules`

Reusable UI pieces used inside sections: buttons, titles, cards, form controls, badges, and similar components.

`src/styles/base`

SCSS toolkit:

- `_variables.scss` contains colors, fonts, spacing, breakpoints, z-index values, and shared tokens.
- `_mixins.scss` contains responsive helpers for mobile-first CSS.
- `_functions.scss` contains utility functions like `rem(16px)`.
- `_base.scss` contains global reset/base styles.
- `_fonts.scss` is reserved for `@font-face` declarations.

## Aliases

The `@` alias points to `src`.

```astro
import MainLayout from '@/layouts/MainLayout/index.astro';
import Section from '@/components/layout/Section/index.astro';
import Button from '@/components/modules/Button/index.astro';
```

The same alias works in SCSS:

```scss
@use '@/styles/base/variables' as v;
```

## Global SCSS Helpers

SCSS helpers are injected automatically through `astro.config.mjs`.

Inside any Astro component style block, these are already available:

```scss
v.$black
v.$tablet
m.tablet
m.desktop
rem(24px)
```

Example:

```astro
<style lang="scss">
  .hero {
    padding-block: v.$section-padding-mobile;
    font-size: rem(32px);

    @include m.tablet {
      padding-block: v.$section-padding-tablet;
      font-size: rem(48px);
    }

    @include m.desktop {
      padding-block: v.$section-padding-desktop;
    }
  }
</style>
```

## Responsive Style

The project is set up for mobile-first styling.

Write mobile styles first, then add larger breakpoints:

```scss
.title {
  font-size: rem(32px);

  @include m.tablet {
    font-size: rem(48px);
  }

  @include m.desktop {
    font-size: rem(64px);
  }
}
```

Available mixins:

```scss
@include m.above(900px) { ... }
@include m.below(900px) { ... }
@include m.between(768px, 1024px) { ... }
@include m.mobile { ... }
@include m.tablet { ... }
@include m.desktop { ... }
@include m.desktop-lg { ... }
@include m.hover { ... }
```

## Components

Typical page usage:

```astro
---
import MainLayout from '@/layouts/MainLayout/index.astro';
import Header from '@/components/sections/Header/index.astro';
import Hero from '@/components/sections/Hero/index.astro';
import Footer from '@/components/sections/Footer/index.astro';
---

<MainLayout>
  <Header />
  <main class="main">
    <Hero />
  </main>
  <Footer />
</MainLayout>
```

Typical section usage:

```astro
---
import Section from '@/components/layout/Section/index.astro';
import SectionTitle from '@/components/modules/SectionTitle/index.astro';
---

<Section>
  <SectionTitle as="h2" size="large">Section title</SectionTitle>
</Section>
```

## Commands

Install dependencies:

```sh
npm install
```

Start dev server:

```sh
npm run dev
```

Build production files:

```sh
npm run build
```

Preview production build:

```sh
npm run preview
```

Run Astro checks:

```sh
npm run check
```

## Notes

- Keep page-level wrappers in `src/layouts`.
- Keep structural wrappers in `src/components/layout`.
- Keep real content blocks in `src/components/sections`.
- Keep reusable UI components in `src/components/modules`.
- Use mobile-first SCSS: base styles first, then `m.tablet`, `m.desktop`, etc.
- Use `rem()` where it helps readability and scalability, but do not force it for every pixel value.
