<?php

namespace App\Http\Controllers;

use App\ShoppingCart;
use Illuminate\Http\Request;
use App\Http\Requests;

class PagesController extends Controller
{
    public  function  index(){

        $shopping_cart_id = \Session::get('shopping_cart_id');

        $shopping_cart = ShoppingCart::findOrCreateBySessionID($shopping_cart_id);

        \Session::put("shopping_cart_id", $shopping_cart->id);

        return view('inicio', ["shopping_cart" => $shopping_cart]);
    }
}
