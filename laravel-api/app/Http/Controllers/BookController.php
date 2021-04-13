<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class BookController extends Controller
{
    public function search($keyword)
    {
        $books= Book::where('title','like',"%".$keyword."%")->get();
        $books->load('category');
        $books->load('author');
        $books->load('order_details');
        return response()->json($books, Response::HTTP_OK);
    }
    public function order($order)
    {
       switch ($order) {
           case '2':
            $books= Book::orderBy('price', 'asc')->get();
               break;
           case '3':
            $books= Book::orderBy('price', 'desc')->get();
               break;
           case '4':
            $books= Book::orderBy('title', 'asc')->get();
               break;
           case '5':
            $books= Book::orderBy('title', 'desc')->get();
               break;
           default:
           $books= Book::orderBy('id', 'desc')->get();
               break;
       }
        $books->load('category');
        $books->load('author');
        $books->load('order_details');
        return response()->json($books, Response::HTTP_OK);
    }
    public function cateSearch($id,$keyword)
    {
        $books= Book::where('title','like',"%".$keyword."%")->where('categoryId','=',$id)->get();
        $books->load('category');
        $books->load('author');
        $books->load('order_details');
        return response()->json($books, Response::HTTP_OK);
    }
    public function cateOrder($id,$order)
    {
       switch ($order) {
           case '2':
            $books= Book::where('categoryId','=',$id)->orderBy('price', 'asc')->get();
               break;
           case '3':
            $books= Book::where('categoryId','=',$id)->orderBy('price', 'desc')->get();
               break;
           case '4':
            $books= Book::where('categoryId','=',$id)->orderBy('title', 'asc')->get();
               break;
           case '5':
            $books= Book::where('categoryId','=',$id)->orderBy('title', 'desc')->get();
               break;
           default:
           $books= Book::where('categoryId','=',$id)->orderBy('id', 'desc')->get();
               break;
       }
        $books->load('category');
        $books->load('author');
        $books->load('order_details');
        return response()->json($books, Response::HTTP_OK);
    }
    public function bookCate($id)
    {
        $books = Book::where('categoryId','=',$id)->get();
        $books->load('category');
        $books->load('author');
        $books->load('order_details');
        return response()->json($books, Response::HTTP_OK);
    }
    public function index()
    {
        $books = Book::orderBy('id','desc')->get();
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
        if($request->hasFile('image')){
            $image = $request->file('image');
            $images = time().'-'.$image->getClientOriginalName();
            $image->move(public_path('images/book'),$images);
            $imageName = 'images/book/'.$images;
         }
         $data = json_decode($request->data);  
         $book= new Book();
         $book->title =$data->title;
         $book->categoryId = $data->categoryId;
         $book->authorId = $data->authorId;
         $book->detail = $data->detail;
         $book->short_desc = $data->short_desc;
         $book->price = $data->price;
         $book->image = $imageName;
         $book->save();
         return response()->json($book, Response::HTTP_OK);
    }
    public function update(Request $request,$id)
    {
        $book = Book::find($id);
        $imageName = $book->image;
        if($request->hasFile('image')){
            $image = $request->file('image');
            $images = time().'-'.$image->getClientOriginalName();
            $image->move(public_path('images/book'),$images);
            $imageName = 'images/book/'.$images;
         }
        $data = json_decode($request->data); 
         $book->title =$data->title;
         $book->categoryId = $data->categoryId;
         $book->authorId = $data->authorId;
         $book->detail = $data->detail;
         $book->short_desc = $data->short_desc;
         $book->price = $data->price;
         $book->image = $imageName;
         $book->save();
    }
    public function destroy($id)
    {
        return Book::where('id',$id)->delete();
    }
}