import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ThemeProvider } from '@emotion/react';
import { theme } from './Provider/ThemeProvider';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    // setup({ el, App, props }) {
    //     const root = createRoot(el);

    //     root.render(<App {...props} />);
    // },
    setup({ el, App, props }) {
        createRoot(el).render(
            <ThemeProvider theme={theme}>
                <App {...props} />
            </ThemeProvider>
        )
    },
    progress: {
        color: '#4B5563',
    },
});
