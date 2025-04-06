import './leftBar.css'

const LeftBar = () => {
    return (
        <div className='leftBar'>
            <div className='menuIcons'>
                <a className='menuIcon' href="/">
                    <img src="/general/logo.png" alt="logo" className='logo'/>
                </a>
                <a className='menuIcon' href="/">
                    <img src="/general/home.svg" alt="home" />
                </a>
                <a className='menuIcon' href="/">
                    <img src="/general/create.svg" alt="create" />
                </a>
                <a className='menuIcon' href="/">
                    <img src="/general/updates.svg" alt="updates" />
                </a>
                <a className='menuIcon' href="/">
                    <img src="/general/messages.svg" alt="message" />
                </a>
            </div>
            <a className='menuIcon' href="/">
                <img src="/general/messages.svg" alt="message" />
            </a>
        </div>
    )
}

export default LeftBar