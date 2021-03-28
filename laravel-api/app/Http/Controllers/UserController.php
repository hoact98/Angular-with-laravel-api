<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;


class UserController extends Controller
{
    public function index()
    {
        $users = User::all();
        return response()->json($users, Response::HTTP_OK);
    }

    public function show($id)
    {
        $user = User::find($id);
        return response()->json($user, Response::HTTP_OK);
    }
    public function store(Request $request)
    {
         return User::create($request->all());
    }
    public function update(Request $request,$id)
    {
        return User::where('id',$id)->update($request->all());
    }
    public function destroy($id)
    {
        return User::where('id',$id)->delete();
    }
}