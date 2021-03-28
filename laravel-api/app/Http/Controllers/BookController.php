<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class BookController extends Controller
{
    public function index()
    {
        $books = Book::all();
        $books->load('category');
        $books->load('author');
        $books->load('order_details');
        return response()->json($books, Response::HTTP_OK);
    }

    public function show($id)
    {
        $book = Book::find($id);
        $book->load('category');
        $book->load('author');
        $book->load('order_details');
        return response()->json($book, Response::HTTP_OK);
    }
    public function store(Request $request)
    {
        // $title = $request->title;
        if($request->hasFile('image')){
            $image = $request->image;
            $images = time().'-'.$image->getClientOriginalName();
            $image->move(public_path('images/book'),$images);
            $request->image = 'images/book/'.$images;
         }
        //  $book= new Book();
        //  $book->title =$title;
        //  $book->image = $imageName;
        //  $book->save();

         return Book::create($request->all());
    }
    public function update(Request $request,$id)
    {
        if($request->hasFile('image')){
            $image = $request->image;
            $images = time().'-'.$image->getClientOriginalName();
            $image->move(public_path('images/book'),$images);
            $request->image = 'images/book/'.$images;
         }
        return Book::where('id',$id)->update($request->all());
    }
    public function destroy($id)
    {
        return Book::where('id',$id)->delete();
    }
}