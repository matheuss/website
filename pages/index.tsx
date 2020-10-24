import { useState } from 'react';

import Link from '../components/link'

const Index = () => {
    const [backgroundClass, setBackgroundClass] = useState('one-e')

    const handleClick = () => {
        setBackgroundClass(backgroundClass === 'one-e' ? 'no-tacos-allowed' : 'one-e')
    }

    return (
        <div className={'flex h-screen ' + backgroundClass} >
            <div className='m-auto text-center'>
                <div className='inline-block'>
                    <h1 id='name' onClick={handleClick}>Matheus</h1>
                    <h2 id='title'>Head of Infra, <Link href="https://vercel.com">Vercel</Link></h2>
                </div >
                <p id="social">
                    <Link href="https://twitter.com/matheusfrndes">Twitter</Link> |{' '}
                    <Link href="https://www.linkedin.com/in/matheusfrndes">LinkedIn</Link> |{' '}
                    <Link href="https://instagram.com/matheusfrndes">Instagram</Link> |{' '}
                    <Link href="https://github.com/matheuss/website">Source</Link>
                </p>
            </div >
        </div >
    )
}

export default Index
