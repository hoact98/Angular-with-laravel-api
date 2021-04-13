<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;



class UserController extends Controller
{
    public function index()
    {
        $users = User::orderBy('id','desc')->get();
        return response()->json($users, Response::HTTP_OK);
    }

    public function show($id)
    {
        $user = User::find($id);
        return response()->json($user, Response::HTTP_OK);
    }
    public function store(Request $request)
    {
        if($request->hasFile('avatar')){
            $image = $request->file('avatar');
            $images = time().'-'.$image->getClientOriginalName();
            $image->move(public_path('images/user'),$images);
            $imageName = 'images/user/'.$images;
         }
         $data = json_decode($request->data);  
         $user= new User();
         $user->name =$data->name;
         $user->email = $data->email;
         $user->password = Hash::make($request->password);
         $user->avatar = $imageName;
         $user->save();
         return response()->json($user, Response::HTTP_OK);
    }
    public function update(Request $request,$id)
    {
        $user = User::find($id);
        $imageName = $user->avatar;
        if($request->hasFile('avatar')){
            $image = $request->file('avatar');
            $images = time().'-'.$image->getClientOriginalName();
            $image->move(public_path('images/user'),$images);
            $imageName = 'images/user/'.$images;
         }
         $data = json_decode($request->data);  
         $user->name =$data->name;
         $user->email = $data->email;
         $user->avatar = $imageName;
         $user->save();
    }
    public function destroy($id)
    {
        return User::where('id',$id)->delete();
    }
}