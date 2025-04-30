# Project Color Cheatsheet

This repository serves as a color cheatsheet for my project, ensuring consistent styling across all components. Below is the detailed color palette, including specific codes and gradients, organized in the exact sequence provided.

## Color Palette

### Hero Section

- **Hero Heading Color**: `#ff8660`
- **Next Heading Color (for Gradient)**: `#c355c0`
- **Gradient CSS**:
  ```css
  background: #c355c0;
  background: linear-gradient(
    149deg,
    rgba(195, 85, 192, 1) 25%,
    rgba(255, 134, 96, 1) 100%
  );
  ```

### Card Background

- **Card Side Color**: `#151932`
- **Card Center Color**: `#2e366a`
- **Gradient CSS**:
  ```css
  background-image: linear-gradient(
    to right bottom,
    #151932,
    #191e3c,
    #1e2446,
    #222950,
    #272f5b,
    #272f5b,
    #272f5b,
    #272f5b,
    #222950,
    #1e2446,
    #191e3c,
    #151932
  );
  ```

### Header

- **Header Color**: `#2e366a`

### Overall Background

- **Background Color**: `#161513`

### Experience Card

- **Experience Card Color**: `#04071d`

### Technology Section

- **Technology Used in Project Background Color**: `#07091f`

### Live Server Button

- **Check Live Server Color**: `#9d86bf`

### Text Colors

- **Experience Text Color**: `#bec1dd`
- **Heading Text Color**: `#ffffff`

### for text bg gradient css

```h1 {
  font-size: 72px;
  background: -webkit-linear-gradient(#eee, #333);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

## Purpose
This cheatsheet is designed to provide a quick reference for applying consistent colors and gradients throughout the project. It ensures a cohesive visual design across all components, including hero sections, cards, headers, and backgrounds.

## Usage Instructions
- Use the provided color codes and CSS gradient snippets in your project's stylesheets.
- Apply the colors to the corresponding components as outlined above (e.g., `#ff8660` for hero headings, `#161513` for the overall background).
- Test gradients and colors on various devices to ensure proper rendering and accessibility.
- Maintain this cheatsheet by updating it if new colors or styles are introduced.

## Notes
- The gradient CSS must be applied carefully to achieve the intended visual effect.
- Ensure sufficient contrast between text colors (e.g., `#bec1dd`, `#ffffff`) and their backgrounds for readability.
- This cheatsheet is tailored for the project and should be referenced during development to maintain design consistency.
```
