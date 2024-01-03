<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\HttpFoundation\StreamedResponse;

final class InternalStorageController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request, string $filePath): StreamedResponse
    {
        $storagePath = array_slice(explode('/', $request->route()?->uri() ?? ''), 1, -1);
        $storagePath = implode('/', $storagePath);

        $storageFilePath = $storagePath.'/'.$filePath;
        abort_if(! Storage::disk('internal')->exists($storageFilePath), 404);

        return Storage::disk('internal')->response($storageFilePath);
    }
}
