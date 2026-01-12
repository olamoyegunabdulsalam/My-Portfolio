// tailwind.config.js (minimal version for v4)
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: [ 'Inter', 'system-ui', 'sans-serif' ],
                mono: [ 'JetBrains Mono', 'monospace' ],
            },
        },
    },
}