/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'hero-bg': "url('/images/background-home.png')",
            },
            boxShadow: {
                search: '0px 4px 30px rgba(77, 70, 250, 0.1)',
            },
            colors: {
                lightGrey: 'rgba(0, 0, 0, 0.1)',
            },
        },
        colors: {
            primary: {
                lighter: '#FFFFFF1A',
                light: '#F4F2F9',
                DEFAULT: '#4D46FA',
            },
            secondary: {
                light: '#F063361A',
                DEFAULT: '#F06336',
            },
            'light-background': '#E5E5E5',
        },
        container: {
            center: true,
            padding: '15px',
            screens: {
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1170px',
                '2xl': '1536px',
            },
        },
    },
    plugins: [],
};
