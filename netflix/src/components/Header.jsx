import logo from '../assets/netflix-logo.svg';

const Header = () => {
    return (
        <>
            <div className="absolute px-8 py-2 bg-gradient-to-b from-black to-transparent z-10">
                <img className="w-44 opacity-50" src={logo} alt="logo" />
            </div>
        </>
    );
}

export default Header;
