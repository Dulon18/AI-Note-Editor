import React from 'react';
import { Link, router } from '@inertiajs/react';
import Layout from '../Layouts/Layout';
import { Pencil, Trash } from 'lucide-react';
import DOMPurify from 'dompurify';

export default function Dashboard({ notes }) {
const handleDelete = (id) => {
if (confirm('Are you sure you want to delete this note?')) {
router.delete(`/notes/${id}/delete`);
}
};

return (
<Layout>
    <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">My Notes</h2>
        <Link href="/notes/create"
            className="bg-green-600 font-bold text-white px-4 py-2 rounded hover:bg-green-700 transition flex items-center gap-2">
        <div
            className="w-4 h-4 rounded-full bg-white text-green-600 flex items-center justify-center text-sm font-bold">
            +
        </div>
        New Note
        </Link>
    </div>

    {notes.length === 0 ? (
    <p className="text-gray-500">No notes yet.</p>
    ) : (
    <ul className="space-y-2">
        {notes.map(note => (
        <li key={note.id}
            className="bg-white p-4 rounded shadow hover:bg-blue-50 transition flex justify-between items-start">
            <div className="max-w-xl">
                <h3 className="font-semibold mb-2">{note.title}</h3>
                <div className="prose prose-sm max-w-none text-gray-800
             prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
             prose-img:rounded-md prose-img:shadow-sm"
                    dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(note.content) }} />

            </div>
            <div className="flex items-center space-x-2">
                <Link href={`/notes/${note.id}/edit`} className="text-blue-500 hover:text-blue-700" title="Edit">
                <Pencil className="w-5 h-5" />
                </Link>
                <button onClick={()=> handleDelete(note.id)}
                    className="text-red-500 hover:text-red-700"
                    title="Delete"
                    >
                    <Trash className="w-5 h-5" />
                </button>
            </div>
        </li>
        ))}
    </ul>

    )}
</Layout>
);
}
