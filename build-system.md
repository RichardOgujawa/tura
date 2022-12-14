# Build System

## HTML
- **Include Meta tag for**: 
    - Charset 
    - HTTP-Equiv
    - Viewport
    - Title
    - MS-Application-Name
    - MS-Application-TileImage
    - Author
    - Description
    - Keywords
    - Canonical URL
    - **Open Graph**
        - Title 
        - Image
        - Description
        - URL
        - Type
        - Locale
    - 
    - Theme-Color
    - **Links**
        - Favicon
        - Stylesheet 
    - **Scripts**
        - Font Awesome CDN (optional)
- Write headings for block-level elements like this: `<!---DESKTOP NAVIGATION-->`
- Write headings for elements like this: `<!--Desktop-nav__container-->`
- 


## CSS
- **General Layout**
    - Headings should be written in this format:
        ```
        /*CUSTOM STYLINGS
        --------------------------------*/
        ```
    - Sub-headings should be written in this format:
        ```
        /*--TOPBAR NAVIGATION--*/
        ```
    - Headings beeyond that should be written in this format:
        ```
        /*Follow button*/
        ```
    - Structure for CSS rules
        1. Variables
        2. Box-sizing properties (width, height, margin, padding, border)
        3. Display properties
        4. Positional properties
        5. Typography
        6. Color
        7. Miscellaneous (box-shadows, opacity, etc.)
        7. Animation
    - Use SWITCHES heading to wrap around all the elements that switch on or off (disappear and reappear) at different screen sizes. 
- **[Josh W Comeau's CSS Reset](https://www.joshwcomeau.com/css/custom-css-reset/)
The only change I made to this was to wrap the **:where()** pseudo-selector around all the selectors in this reset, so they're easily overrideable and don't make the code difficult to work with. 


- Import **reset.css** into CSS
- Import **fonts**
- Write Variables
    - Color
        - '-- clr' prefix for for color variables   
            - '--clr-primary' for primary colors/
            - '--clr-accent' for accent colors
            - '--clr-neutral' for neutal colors
                - '-100' suffix for lightest version of color
                - '-900' suffix for darkest version of color
                - **Note: this can change depending on the requirements of the project**
            - Don't include hsl() so you can have the option of adding in an alpha value
    - '--fs' prefix for font size variables
        - '-100' suffix for smallest font size
        - '-900' suffix for largest font size
        - **Note: this can change depending on the requirements of the project**
    - '--ff' prefic for font family variables
        - '-base' suffix for most common font family
        - '-accent' suffix for irregular usage (headings, special text, etc.)
    - '--fw' prefic for font weight variables
        - '-light' suffix for lightest font weight
        - '-regular' suffix for regular font weight
        - '-bold' suffix for heaviest font weight
        - **Note: this can change depending on the requirements of the project**
    - --transition-fast 
    - --transition-slow

- Utility class
    - Layout
        - .flex-group 
        - .flex-group-wrap (Flex group with flexwrap on)
        - .grid-group
    - Button 
        - For example .btn, .large, .small, .green, etc.) and their hover states. 
    - Typography    
        - For example .italic, .bold, etc.

- Global Styles 
    - General stylings only applicable to this project for things like links, paragraphs marks, definition lists etc., and their hover states. 

- 