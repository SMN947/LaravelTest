import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';
import axios from 'axios'; // Import Axios
// import { useForm } from '@inertiajs/inertia-react';

export default function Admin({ auth }) {
    const [name, setName] = useState('');
    // const { processing } = useForm();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('api/areas', { name }); // Assuming the route to store areas is '/areas'
            console.log(response.data); // Log the response data
            setName(''); // Clear the input field after successful submission
        } catch (error) {
            console.error('Error adding area:', error);
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            {/* Add Form Here */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Area Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="off"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                </div>

                <div className="mt-4">
                    <button
                        type="submit"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        
                    >
                         'Add Area'
                    </button>
                </div>
            </form>
        </AuthenticatedLayout>
    );
}
