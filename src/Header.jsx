import './assets/css/header.css'
function Header() {
    return (
        <>
        <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&family=Inconsolata:wght@200..900&display=swap" rel="stylesheet"></link>
        </head>
        <header>
            <h1>My App</h1>
            <nav>
                <ul>
                    <li><a class="text-3xl font-bold underline" href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <hr />

        </header>
        </>
    );
}

export default Header