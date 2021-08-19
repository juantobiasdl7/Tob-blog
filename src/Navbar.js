const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Tob Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color: "white",
                    backgroundColor: '#003366',
                    borderRadius: '8px'
                }}>New Blog</a>
            </div>
        </nav>
     );
}
 
export default Navbar;