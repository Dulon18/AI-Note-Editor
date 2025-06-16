import React, { useState } from 'react';
import Layout from '../Layouts/Layout';
import { useForm, usePage } from '@inertiajs/react';
import axios from 'axios';
import SafeQuill from './SafeQuill'; // 👈 wrapper component for ReactQuill

export default function NoteEditor({ note }) {
    const { flash = {} } = usePage().props;
    const isEdit = !!note;

    const [aiLoading, setAiLoading] = useState(false);

    const { data, setData, post, put, processing, errors, reset } = useForm({
        title: note?.title || '',
        content: note?.content || '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        isEdit
            ? put(`/notes/${note.id}/update`, {
                  onSuccess: () => reset(),
              })
            : post('/notes/store', {
                  onSuccess: () => reset(),
              });
    };

    const generateWithAI = () => {
        setAiLoading(true);
        setData('content', ''); // Clear previous content

        const eventSource = new EventSource(`/ai/summarize-stream?text=${encodeURIComponent(data.content)}`);

        let streamedContent = '';

        eventSource.onmessage = (event) => {
            streamedContent += event.data;
            setData('content', streamedContent); // Live update
        };

        eventSource.onerror = (err) => {
            console.error('Stream error', err);
            eventSource.close();
            setAiLoading(false);
        };

        eventSource.addEventListener('end', () => {
            eventSource.close();
            setAiLoading(false);
        });
    };



    return (
        <Layout>
            <div className="max-w-3xl mx-auto py-10 px-4">
                <h2 className="text-2xl font-bold mb-6">
                    {isEdit ? 'Edit Note' : 'New Note'}
                </h2>

                {flash.success && (
                    <div className="mb-4 p-4 bg-green-100 text-green-800 rounded shadow">
                        {flash.success}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                    <label className="block text-sm font-bold text-gray-700">Title</label>
                    <input
                        type="text"
                        value={data.title}
                        onChange={(e) => setData('title', e.target.value)}
                        placeholder="Enter note title"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-800"
                    />
                    {errors.title && (
                        <p className="text-red-600 text-sm mt-1">{errors.title}</p>
                    )}
                </div>

                    <div>
                        <label className="block font-medium mb-1">Content</label>
                        <SafeQuill
                            value={data.content}
                            onChange={(value) => setData('content', value)}
                        />
                        {errors.content && (
                            <p className="text-red-600 text-sm mt-1">{errors.content}</p>
                        )}
                    </div>

                    <div className="flex justify-between items-center flex-wrap gap-4">
                        <button
                            type="submit"
                            disabled={processing}
                            className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
                        >
                            {isEdit ? 'Update' : 'Create'} Note
                        </button>

                        <button
                            type="button"
                            onClick={generateWithAI}
                            disabled={aiLoading}
                            className="bg-purple-600 text-white px-4 py-2 rounded shadow hover:bg-purple-700"
                        >
                            {aiLoading ? 'Generating...' : 'Generate with AI'}
                        </button>

                        <a
                            href="/dashboard"
                            className="bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-700 transition"
                        >
                            Cancel
                        </a>

                    </div>
                </form>
            </div>
        </Layout>
    );
}
