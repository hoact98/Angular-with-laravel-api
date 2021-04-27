<?php

use App\Http\Controllers\API\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthorController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\OrderDetailController;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });
Route::middleware('auth:api')->group(function() {
    Route::get('logout', [AuthController::class,'logout'])->name('logout.api');
    Route::get('user', [AuthController::class,'user'])->name('user.api');
   
});
Route::middleware('cors')->group(function() {
    Route::post('login', [AuthController::class,'login'])->name('login');

    Route::post('register', [AuthController::class,'register']);
    Route::put('change-pass/{id}', [AuthController::class,'changePass']);
});
Route::post('ang_editor/upload',[BookController::class,'uploadImage']);

Route::get('bookCate/{id}/search/{keyword?}', [BookController::class,'cateSearch']);
    Route::get('bookCate/{id}/order/{order?}', [BookController::class,'cateOrder']);
    Route::get('bookCate/{id}', [BookController::class,'bookCate']);

Route::prefix('books')->middleware('cors')->group(function(){
    Route::get('/', [BookController::class,'index'])->name('books.index');
    Route::get('/search/{keyword?}', [BookController::class,'search']);
    Route::get('/order/{order?}', [BookController::class,'order']);
    Route::get('/relate/{id}/{idPro}', [BookController::class,'relate']);
    
    Route::get('{id}', [BookController::class,'show'])->name('books.show');
    
    Route::post('/', [BookController::class,'store'])->name('books.store');
    
    # Sử dụng put nếu cập nhật toàn bộ các trường
    Route::put('{id}', [BookController::class,'update'])->name('books.update');
    # Sử dụng patch nếu cập nhật 1 vài trường
    Route::patch('{id}', [BookController::class,'update'])->name('books.update');
    
    // Xóa sản phẩm theo id
    Route::delete('{id}', [BookController::class,'destroy'])->name('books.destroy');
});

Route::prefix('categories')->middleware('cors')->group(function(){
    Route::get('/', [CategoryController::class,'index'])->name('categories.index');

    Route::get('{id}', [CategoryController::class,'show'])->name('categories.show');
    
    Route::post('/', [CategoryController::class,'store'])->name('categories.store');
    
    Route::put('{id}', [CategoryController::class,'update'])->name('categories.update');
    Route::patch('{id}', [CategoryController::class,'update'])->name('categories.update');
    
    Route::delete('{id}', [CategoryController::class,'destroy'])->name('categories.destroy');
});

Route::prefix('authors')->middleware('cors')->group(function(){
    Route::get('/', [AuthorController::class,'index'])->name('authors.index');

    Route::get('{id}', [AuthorController::class,'show'])->name('authors.show');
    
    Route::post('/', [AuthorController::class,'store'])->name('authors.store');
    
    Route::put('{id}', [AuthorController::class,'update'])->name('authors.update');
    Route::patch('{id}', [AuthorController::class,'update'])->name('authors.update');
    
    Route::delete('{id}', [AuthorController::class,'destroy'])->name('authors.destroy');
});


Route::prefix('users')->middleware('cors')->group(function(){
    Route::get('/', [UserController::class,'index'])->name('users.index');

    Route::get('{id}', [UserController::class,'show'])->name('users.show');
    
    Route::post('/', [UserController::class,'store'])->name('users.store');
    
    Route::put('{id}', [UserController::class,'update'])->name('users.update');
    Route::patch('{id}', [UserController::class,'update'])->name('users.update');
    
    Route::delete('{id}', [UserController::class,'destroy'])->name('users.destroy');
});