<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\TypeProduct;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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
        $products = DB::table('product')->join('typeproduct','product.id_type','=','typeproduct.id_type')->select('product.*', 'typeproduct.name as nameType')->get();
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
        $prod = DB::table('product')->join('typeproduct','product.id_type','=','typeproduct.id_type')->where('product.id_prod',$id)->select('product.*', 'typeproduct.name as nameType')->first();
        return $prod;
    }

        /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function getByType($id_type)
    {
        //
        $prods = DB::table('product')->where('id_type',$id_type)->get();
        return $prods;
    }

    
        /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function getByCata($id_cata)
    {
        //
        $types = DB::table('typeproduct')->where('id_catalog', $id_cata)->get();
        $typesId = [];
        foreach($types as $type) {
            array_push($typesId, $type->id_type);
        }
        $prods = DB::table('product')->whereIn('id_type',$typesId)->get();
        return $prods;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getPriceDesc()
    {
        //
        $prods = DB::table('product')
        ->orderBy('price', 'desc')
        ->get();
        return $prods;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getPriceAsc()
    {
        //
        $prods = DB::table('product')
        ->orderBy('price', 'asc')
        ->get();
        return $prods;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function getPrice($price_from, $price_to)
    {
        
        //
        $prods = DB::table('product')->whereBetween('price',[$price_from, $price_to])->get();
        return $prods;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getMaxPrice()
    {
        //
        $maxprice = Product::max('price');
        return $maxprice;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getMinPrice()
    {
        //
        $minprice = Product::min('price');
        return $minprice;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getLatest()
    {
        //
        $prods = DB::table('product')
        ->orderBy('updated_at', 'desc')
        ->get();
        return $prods;
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
        $request->validate([
            'name' => 'required',
            'price' => 'required',
            'image' => 'required',
            'description' => 'required',
            'quantity' => 'required'
        ]);
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