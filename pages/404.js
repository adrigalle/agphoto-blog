// pages/404.js
import Layout, { siteTitle } from '../components/layout';

export default function Custom404() {

    return (
        <Layout>
            <div style={{ minHeight: '500px' }}>
                <h1 style={{ padding: 'auto' }}>404 - Page Not Found</h1>
            </div>
        </Layout>
    );
}