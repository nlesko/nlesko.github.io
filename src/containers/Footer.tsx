const Footer = () => {
    return(
        <footer className="w-full flex flex-col flex-1 bg-slate-900 text-white items-center">
            <div className="container">
                <div className="flex flex-row">
                    <h4>Web development for unique ideas</h4>
                </div>
                <p>© {new Date().getUTCFullYear()} Nikola Leško</p>
            </div>
        </footer>
    )
}


export default Footer;