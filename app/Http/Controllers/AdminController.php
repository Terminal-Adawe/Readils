<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class AdminController extends Controller
{
    //
    public function index(){
    	$data['stories'] = DB::table('story_table')->all();

    	return view('admin.index')->with('data',$data);
    }

    public function addStory(Request $request){
    	
    }
}
