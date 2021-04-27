<?php

namespace App\Http\Controllers;

use App\Http\Requests\SaveUserRequest;
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
        if($user){
            return response()->json($user, Response::HTTP_OK);
        }else{
            return response()->json([
                'message' => 'Id không tồn tại'
            ]);
        }
    }
    public function store(SaveUserRequest $request)
    {
        if($request->hasFile('avatar')){
            $image = $request->file('avatar');
            $images = time().'-'.$image->getClientOriginalName();
            $image->move(public_path('images/user'),$images);
            $imageName = 'images/user/'.$images;
         }
         $user= new User();
         $user->name =$request->name;
         $user->email = $request->email;
         $user->password = Hash::make($request->password);
         $user->avatar = $imageName;
         $user->role = $request->role;
         $user->save();
         return response()->json($user, Response::HTTP_OK);
    }
    public function update(SaveUserRequest $request,$id)
    {
        $user = User::find($id);
        $imageName = $user->avatar;
        if($request->hasFile('avatar')){
            $image = $request->file('avatar');
            $images = time().'-'.$image->getClientOriginalName();
            $image->move(public_path('images/user'),$images);
            $imageName = 'images/user/'.$images;
         }
         $user->name =$request->name;
         $user->email = $request->email;
         $user->avatar = $imageName;
         $user->role = $request->role;
         $user->save();
    }
    public function destroy($id)
    {
        return User::where('id',$id)->delete();
    }
}