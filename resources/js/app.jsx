import './bootstrap';
import '../css/app.css';

// import { createRoot } from 'react-dom/client';
import { render } from 'react-dom';
import { createInertiaApp } from '@inertiajs/inertia-react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        return render(<App {...props} />, el);
        // const root = createRoot(el);

        // root.render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});
