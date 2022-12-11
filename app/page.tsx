
import Link from 'next/link';

const Index = () => {
    return (
        <div className='flex h-screen '>
            <div className='m-auto text-center'>
                <div className='inline-block'>
                    <h1 id='name'>Matheus</h1>
                    <h2 id='title'>Principal Engineer, <Link href="https://vercel.com">Vercel</Link></h2>
                </div >
                <div style={{ height: '1.5rem' }} />
                <p id="social">
                    <Link href="https://twitter.com/matheusfrndes" target="_blank">Twitter</Link> |{' '}
                    <Link href="https://www.linkedin.com/in/matheusfrndes" target="_blank">LinkedIn</Link> |{' '}
                    <Link href="https://instagram.com/matheusfrndes" target="_blank">Instagram</Link> |{' '}
                    <Link href="https://github.com/matheuss/website" target="_blank">Source</Link>
                </p>
            </div >
            <video autoPlay loop muted src="white1.mp4"></video>
            <video autoPlay loop muted src="white2.mp4"></video>
            <video autoPlay loop muted src="white1.webm"></video>
        </div >
    )
}

export default Index
