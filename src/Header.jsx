function Header() {
    return (
        <>
       
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="stylesheet" href="./index.css" />
            <title>Document</title>
        </head>
        <body>
            
        </body>
        </html>
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
            <h2 class="text-3xl font-bold underline">
          Hello world!
        </h2>
        </header>
        </>
    );
}

export default Header