<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use OpenAI\Laravel\Facades\OpenAI;

class AIController extends Controller
{
    public function summarize(Request $request)
    {
        $text = $request->query('text');

        $stream = OpenAI::chat()->createStreamed([
            'model' => 'gpt-4.1-nano-2025-04-14',
            'messages' => [
                ['role' => 'user', 'content' => "Summarize the following note:\n" . $text]
            ],
        ]);

        return response()->stream(function () use ($stream) {
            foreach ($stream as $event) {
                echo "data: {$event->choices[0]->delta->content}\n\n";
                ob_flush(); flush();
            }
            // Optionally signal the end
            echo "event: end\ndata: [DONE]\n\n";
            ob_flush(); flush();
        }, 200, [
            'Content-Type' => 'text/event-stream',
            'Cache-Control' => 'no-cache',
            'X-Accel-Buffering' => 'no',
        ]);
    }
}

