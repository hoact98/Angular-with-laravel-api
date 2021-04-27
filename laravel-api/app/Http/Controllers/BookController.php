<?php

namespace App\Http\Controllers;

use App\Http\Requests\SaveBookRequest;
use App\Models\Book;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class BookController extends Controller
{
    public function search($keyword)
    {
        $books= Book::where('title','like',"%".$keyword."%")->paginate(12);
        $books->load('category');
        $books->load('author');
        return response()->json($books, Response::HTTP_OK);
    }
    public function order($order)
    {
       switch ($order) {
           case '2':
            $books= Book::orderBy('price', 'asc')->paginate(12);
               break;
           case '3':
            $books= Book::orderBy('price', 'desc')->paginate(12);
               break;
           case '4':
            $books= Book::orderBy('title', 'asc')->paginate(12);
               break;
           case '5':
            $books= Book::orderBy('title', 'desc')->paginate(12);
               break;
           default:
           $books= Book::orderBy('id', 'desc')->paginate(12);
               break;
       }
        $books->load('category');
        $books->load('author');
        return response()->json($books, Response::HTTP_OK);
    }
    public function cateSearch($id,$keyword)
    {
        $books= Book::where('title','like',"%".$keyword."%")->where('categoryId','=',$id)->get();
        $books->load('category');
        $books->load('author');
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
        return response()->json($books, Response::HTTP_OK);
    }
    public function bookCate($id)
    {
        $books = Book::where('categoryId','=',$id)->get();
        $books->load('category');
        $books->load('author');
        return response()->json($books, Response::HTTP_OK);
    }
    public function index()
    {
        $books = Book::orderBy('id','desc')->paginate(10);
        $books->load('category');
        $books->load('author');
        return response()->json($books, Response::HTTP_OK);
    }

    public function show($id)
    {
        $book = Book::find($id);
        if($book){
            $book->load('category');
            $book->load('author');
            return response()->json($book, Response::HTTP_OK);
        }else{
            return response()->json([
                'message' => 'Id không tồn tại'
            ]);
        }

    }
    public function relate($id,$idPro)
    {
        $book = Book::where('categoryId','=',$id)
        ->where('id','!=',$idPro)
        ->get();
        $book->load('category');
        $book->load('author');
        return response()->json($book, Response::HTTP_OK);
    }
    public function store(SaveBookRequest $request)
    {
        
        if($request->hasFile('image')){
            $image = $request->file('image');
            $images = time().'-'.$image->getClientOriginalName();
            $image->move(public_path('images/book'),$images);
            $imageName = 'images/book/'.$images;
         }
         $book= new Book();
         $book->title =$request->title;
         $book->categoryId = $request->categoryId;
         $book->authorId = $request->authorId;
         $book->detail = $request->detail;
         $book->short_desc = $request->short_desc;
         $book->price = $request->price;
         $book->image = $imageName;
         $book->save();
         return response()->json($book, Response::HTTP_OK);
    }
    public function update(SaveBookRequest $request,$id)
    {
        $book = Book::find($id);
        $imageName = $book->image;
        if($request->hasFile('image')){
            $image = $request->file('image');
            $images = time().'-'.$image->getClientOriginalName();
            $image->move(public_path('images/book'),$images);
            $imageName = 'images/book/'.$images;
         }
         $book->title =$request->title;
         $book->categoryId = $request->categoryId;
         $book->authorId = $request->authorId;
         $book->detail = $request->detail;
         $book->short_desc = $request->short_desc;
         $book->price = $request->price;
         $book->image = $imageName;
         $book->save();
    }
    public function destroy($id)
    {
        return Book::where('id',$id)->delete();
    }
    public function uploadImage(Request $request){
        $file = $request->file('file');
        $uploaddir = 'images/book';
        $file_name = time().'-'.$file -> getClientOriginalName();
        $destination_path = $uploaddir;
        if ($file->move(public_path($uploaddir),$file_name)) {
        return json_encode($this->addImage($destination_path, $file_name));
        }
        else return json_encode(['response' => 'error']);
    }
    public function addImage($destination_path, $file_name)
        {
        $path = 'http://localhost:8000/'.$destination_path.'/'.$file_name;
        return [
        'status' => true,
        'originalName' => $file_name,
        'generatedName' => $file_name,
        'imageUrl' => $path
        ];
    }
}