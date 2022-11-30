<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        //
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $admins = Admin::all();
        return response()->json($admins);
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
        // //
        // $request->validate([
        //     'name' => 'required',
        //     'amount' => 'required',
        //     'description' => 'required' //optional if you want this to be required
        // ]);
        // $expense = Admin::create($request->all());
        // return response()->json(['message'=> 'expense created', 
        // 'expense' => $expense]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Expense  $expense
     * @return \Illuminate\Http\Response
     */
    public function show(Admin $admin)
    {
        //
        return $admin;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Expense  $expense
     * @return \Illuminate\Http\Response
     */
    public function edit(Admin $admin)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Expense  $expense
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Admin $admin)
    {
        //
        // $request->validate([
        //     'name' => 'required',
        //     'amount' => 'required',
        //     'description' => 'required' //optional if you want this to be required
        // ]);
        // $expense->name = $request->name();
        // $expense->amount = $request->amount();
        // $expense->description = $request->description();
        // $expense->save();
        
        // return response()->json([
        //     'message' => 'expense updated!',
        //     'expense' => $expense
        // ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Expense  $expense
     * @return \Illuminate\Http\Response
     */
    public function destroy(Admin $admin)
    {
        //
        // $expense->delete();
        // return response()->json([
        //     'message' => 'expense deleted'
        // ]);
    }
}