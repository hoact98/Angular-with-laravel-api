<?php
namespace App\Http\Controllers\API;
use Illuminate\Http\Request; 
use App\Http\Controllers\Controller; 
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Response;

use Illuminate\Support\Facades\Hash;

class AuthController extends Controller 
{
  /** 
   * Login API 
   * 
   * @return \Illuminate\Http\Response 
   */ 
  
 
  public function login(Request $request)
  {
    
     $rule= [
          'email' => 'required|email',
          'password' => 'required|min:6'
        ];
        $messages = [
            'email.required' => "Hãy nhập tên sách",
            'password.min' => "Ít nhất có 6 ký tự",
            'email.email' => "Email không đúng định dạng",
        ];
   
        $validator =  Validator::make($request->all(),$rule,$messages);
          if ($validator->fails()) { 
            return response()->json(['error'=>$validator->errors()]);
          }
      if(!Auth::attempt(['email' => $request->email, 'password' => $request->password, 'role' => 1]))
          return response()->json([
              'message' => 'Tài khoản hoặc mật khẩu không đúng'
          ]);
      $user = $request->user();
      $tokenResult = $user->createToken('Personal Access Token');
      $token = $tokenResult->token;
      $token->save();
      return response()->json([
          'access_token' => $tokenResult->accessToken,
          'status' => 'success',
      ]);
  }

  /** 
   * Register API 
   * 
   * @return \Illuminate\Http\Response 
   */ 
  public function register(Request $request) 
  { 
    $validator = Validator::make($request->all(), [ 
      'name' => 'required', 
      'email' => 'required|email', 
      'password' => 'required', 
      'c_password' => 'required|same:password', 
    ]);
    if ($validator->fails()) { 
      return response()->json(['error'=>$validator->errors()]);
    }
    $postArray = $request->all(); 
    $postArray['password'] = bcrypt($postArray['password']); 
    $user = User::create($postArray); 
    $success['token'] =  $user->createToken('LaraPassport')->accessToken; 
    $success['name'] =  $user->name;
    return response()->json([
      'status' => 'success',
      'data' => $success,
    ]); 
  }
  public function logout (Request $request) {
    $token = $request->user()->token();
    $token->revoke();
    $response = ['message' => 'Bạn đã đăng xuất thành công!'];
    return response($response, 200);
}

public function user(Request $request)
    {
      return response()->json($request->user());
    }

}