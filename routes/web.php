<?php

use App\Http\Controllers\AIController;
use App\Http\Controllers\NoteController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\GoogleController;
use Inertia\Inertia;

Route::get('/', function () {
    return inertia('Home');
});

Route::get('/login', function () {
    return Inertia::render('Login');
})->name('login');

// Google OAuth
Route::get('/auth/redirect', [GoogleController::class, 'redirectToGoogle']);
Route::get('/auth/google/call-back', [GoogleController::class, 'handleGoogleCallback']);

Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard', [NoteController::class, 'index'])->name('dashboard');
    Route::get('/notes', [NoteController::class, 'index'])->name('notes');
    Route::get('/notes/create', [NoteController::class, 'create']);
    Route::post('/notes/store', [NoteController::class, 'store']);
    Route::get('/notes/{note}/edit', [NoteController::class, 'edit'])->name('notes.edit');
    Route::put('/notes/{note}/update', [NoteController::class, 'update'])->name('notes.update');
    Route::delete('/notes/{note}/delete', [NoteController::class, 'destroy'])->name('notes.destroy');


    // AI features
    Route::get('/ai/summarize-stream', [AIController::class, 'summarize']);

    Route::post('/logout', [GoogleController::class, 'logout'])->name('logout');

});
