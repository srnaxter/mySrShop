<?php

namespace App\Http\Controllers;

use App\Paypal;
use Illuminate\Http\Request;

class PaymentsController extends Controller
{
    public function store(Request $request){

        $shopping_cart_id = \Session::get('shopping_cart_id');

        $shopping_cart = ShoppingCart::findOrCreateBySessionID($shopping_cart_id);

        $paypal = new Paypal($shopping_cart);

        $paypal->execute($request->paymentId,$request->PayerID);


    }

}
