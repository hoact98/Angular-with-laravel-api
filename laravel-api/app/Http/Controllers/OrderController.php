<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class OrderController extends Controller
{
    public function index()
    {
        $orders = Order::all();
        $orders->load('order_details');
        $orders->load('books');
        return response()->json($orders, Response::HTTP_OK);
    }

    public function show($id)
    {
        $order = Order::find($id);
        $order->load('order_details');
        $order->load('books');
        return response()->json($order, Response::HTTP_OK);
    }
    public function store(Request $request)
    {
         return Order::create($request->all());
    }
    public function update(Request $request,$id)
    {
        return Order::where('id',$id)->update($request->all());
    }
    public function destroy($id)
    {
        return Order::where('id',$id)->delete();
    }
}