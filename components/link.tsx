import { FunctionComponent } from 'react'


const Link: FunctionComponent<{ href: string }> = ({children, href}) => (
    <a href={href} target="_blank">{children}</a>
)

export default Link