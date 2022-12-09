<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\TypeProduct;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $products = Product::all();
        return $products;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $request->validate([
            'id_type'=> 'required',
            'name' => 'required',
            'price' => 'required',
            'image' => 'required',
            'quantity' => 'required',
        ]);
        $prod = Product::create($request->all());
        return ['status'=>1,'message'=> 'product created', 'product' => $prod];
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        $prod = Product::find($id);
        $prod->update($request->all());
        $prod->save();
        
        return ['status'=>1,'message'=> 'prod edited', 'prod' => $prod];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $prod = Product::find($id);
        $prod->update(["del_flag"=>1]);
        $prod->save();
        return ['status'=>1,'message'=> 'del_flag = true', 'prod' => $prod];
    }
}