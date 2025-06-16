<?php

namespace App\Http\Controllers;

use App\Models\Note;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NoteController extends Controller
{
    public function index()
    {
        return Inertia::render('Dashboard', [
            'notes' => auth()->user()->notes()->latest()->get()
        ]);
    }
    public function create()
    {
        return Inertia::render('NoteEditor');
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'nullable|string',
        ]);

        $request->user()->notes()->create([
            'title' => $request->title,
            'content' => $request->content
        ]);

        return redirect()
            ->route('dashboard')
            ->with('success', 'Note created successfully.');
    }

    public function edit(Note $note)
    {
        return Inertia::render('NoteEditor', ['note' => $note]);
    }

    public function update(Request $request, Note $note)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'nullable|string',
        ]);

        $note->update($request->only('title', 'content'));

        return redirect()->route('dashboard')->with('success', 'Note updated successfully.');
    }

    public function destroy(Note $note)
    {
        $note->delete();
        return redirect()->route('dashboard')->with('success', 'Note deleted successfully.');
    }
}
