<?php

namespace App\Http\Controllers;

use App\Models\Author;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class AuthorController extends Controller
{
    public function index()
    {
        $authors = Author::orderBy('id','desc')->get();
        $authors->load('books');
        return response()->json($authors, Response::HTTP_OK);
    }

    public function show($id)
    {
        $author = Author::find($id);
        $author->load('books');
        return response()->json($author, Response::HTTP_OK);
    }
    public function store(Request $request)
    {
         return Author::create($request->all());
    }
    public function update(Request $request,$id)
    {
        return Author::where('id',$id)->update($request->all());
    }
    public function destroy($id)
    {
        return Author::where('id',$id)->delete();
    }
}