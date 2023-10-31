import '@styles/global.css';
import { Children } from 'react';

export const metadata = {
    title: "Promptopia",
    description: "Discord & Shared AI Prompt"
}

const layout = () => {
    return (
        <html lang="en">
            <body>
                <div className="main">
                    <div className='gradient' />
                </div>

                <main className='app'>
                    {Children}
                </main>
            </body>
        </html>
    )
}

export default layout