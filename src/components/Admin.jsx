

function Admin() {
    <div className="flex h-screen">
        <aside className="w-1/5 bg-gray-800 text-white flex flex-col">
            <div className="flex items-center justify-center h-20 border-b border-gray-700">
                <h1 className="text-xl font-bold">ONLINE QUIZ</h1>
                <i className="fas fa-bars ml-4"></i>
            </div>
            <div className="flex flex-col items-center py-6">
                <img src="https://placehold.co/100x100" alt="Admin Avatar" className="rounded-full mb-4" />
                <h2 className="text-lg">Admin</h2>
            </div>
            <nav className="flex-grow">
                <ul className="space-y-4 px-4">
                    <li className="flex items-center">
                        <i className="fas fa-tachometer-alt mr-2"></i>
                        <span>Dashboard</span>
                    </li>
                    <li className="flex items-center">
                        <i className="fas fa-chalkboard-teacher mr-2"></i>
                        <span>Teacher</span>
                    </li>
                    <li className="flex items-center">
                        <i className="fas fa-user-graduate mr-2"></i>
                        <span>Student</span>
                    </li>
                    <li className="flex items-center">
                        <i className="fas fa-book mr-2"></i>
                        <span>Courses</span>
                    </li>
                    <li className="flex items-center">
                        <i className="fas fa-question-circle mr-2"></i>
                        <span>Questions</span>
                    </li>
                </ul>
            </nav>
            <div className="text-center py-4 border-t border-gray-700">
                <p>Made in India</p>
                <p>Copyright © Online Quiz 2020</p>
            </div>
        </aside>
        <main className="flex-grow bg-gray-100">
            <header className="flex items-center justify-between bg-gray-900 text-white h-20 px-6">
                <div></div>
                <button className="bg-teal-500 px-4 py-2 rounded">Logout</button>
            </header>
            <div className="p-6">
                <div className="grid grid-cols-4 gap-6">
                    <div className="bg-teal-500 text-white p-6 rounded shadow">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-lg">Total Students</h3>
                                <i className="fas fa-user-graduate text-2xl"></i>
                            </div>
                            <span className="text-4xl">2</span>
                        </div>
                    </div>
                    <div className="bg-indigo-500 text-white p-6 rounded shadow">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-lg">Total Teacher</h3>
                                <i className="fas fa-chalkboard-teacher text-2xl"></i>
                            </div>
                            <span className="text-4xl">1</span>
                        </div>
                    </div>
                    <div className="bg-red-500 text-white p-6 rounded shadow">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-lg">Total Courses</h3>
                                <i className="fas fa-book text-2xl"></i>
                            </div>
                            <span className="text-4xl">2</span>
                        </div>
                    </div>
                    <div className="bg-brown-500 text-white p-6 rounded shadow">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-lg">Total Questions</h3>
                                <i className="fas fa-question-circle text-2xl"></i>
                            </div>
                            <span className="text-4xl">3</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
}

export default Admin