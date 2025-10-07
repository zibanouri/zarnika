const NotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 p-4">
            <div className="text-center max-w-md">
                <div className="text-6xl mb-4">🔍</div>
                <h1 className="text-6xl font-bold text-slate-800 mb-3">404</h1>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                    Sorry, the page you requested was not found.
                    <br />
                    It may be lost. You'd better go back to the main page.
                </p>
                <a
                    href="/"
                    className="inline-block px-5 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors shadow-sm hover:shadow"
                >
                    Back to Home
                </a>
            </div>
        </div>
    );
};

export default NotFound;
