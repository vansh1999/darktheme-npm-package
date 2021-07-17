# 1. Installation

Goto terminal and install darktheme using command

`npm i darktheme`

Add class="darktheme" to our HTML file

```
<body class="darktheme">
    This is dark theme!

   
    <script src="./index.js"></script>
</body>

```

# 2. Usage

#### First import package in our JavaScript file (we can use require or import)

using require

`const { darktheme } = require('darktheme');`

or 

using import

`import { darktheme } from 'darktheme';`

#### Then select a theme

[dark background and white text color]
```
darktheme({
   background_color: 'dark',
   color: 'light'
});

```
[light background and black text color]

```
darktheme({
   background_color: 'light',
   color: 'dark'
});

```

# 3. Run

we are going to use parcel

`npm i parcel -g`

`parcel index.html`

