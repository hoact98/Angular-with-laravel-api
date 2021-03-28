<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Http\Response;


class CategoryController extends Controller
{
    public function index()
    {
        $categories = Category::all();
        return response()->json($categories, Response::HTTP_OK);
    }

    public function show($id)
    {
        $category = Category::find($id);
        return response()->json($category, Response::HTTP_OK);
    }
    public function store(Request $request)
    {
         return Category::create($request->all());
    }
    public function update(Request $request,$id)
    {
        return Category::where('id',$id)->update($request->all());
    }
    public function destroy($id)
    {
        return Category::where('id',$id)->delete();
    }
}