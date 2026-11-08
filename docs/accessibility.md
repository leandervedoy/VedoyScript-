---
title: Accessibility
sidebar_position: 22
---
# Build interfaces people can use

VedoyScript aims to produce semantic, keyboard-accessible browser interfaces. Developers should check:

- Headings follow a meaningful hierarchy.
- Form fields have visible labels.
- Buttons use their appropriate native HTML elements.
- Links describe the destination and have safe URLs.
- Text is readable at 200% zoom and on small screens.
- Dynamic results announce important changes where appropriate.

## Current beta scope

The compiler emits basic semantic elements, including headings, buttons and labels. This does **not** mean generated apps automatically meet WCAG 2.2 requirements. Dynamic API results currently use text-based output; screen-reader announcements and focus handling need further work.

## Test methods

Use a keyboard, screen reader and automated accessibility scanner on real compiled output. Fix the generator so that all apps benefit, rather than patching a single sample.