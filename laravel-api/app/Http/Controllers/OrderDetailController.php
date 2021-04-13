<?php

namespace App\Http\Controllers;

use App\Models\OrderDetail;

use Illuminate\Http\Request;
use Illuminate\Http\Response;

class OrderDetailController extends Controller
{
    public function index()
    {
        $order_details = OrderDetail::all();
        return response()->json($order_details, Response::HTTP_OK);
    }

    public function show($id)
    {
        $order_detail = OrderDetail::where('orderId',$id);
       
        return response()->json($order_detail, Response::HTTP_OK);
    }
    public function store(Request $request)
    {
         return OrderDetail::create($request->all());
    }
    public function destroyOrderId($id)
    {
        return OrderDetail::where('orderId',$id)->delete();
    }
    public function destroyBookId($id)
    {
        return OrderDetail::where('bookId',$id)->delete();
    }
}