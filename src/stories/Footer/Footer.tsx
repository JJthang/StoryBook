import React from 'react'

type Props = {
    user?: string
}
// { user }: Props
const Footer = ({ user }: Props) => {
    return (
        <div className='w-full bg-red-600 h-[300px]'> {user ? 'user exist' : 'user does not exist'}</div>
    )
}

export default Footer