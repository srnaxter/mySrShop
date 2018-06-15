<?php

namespace App;

class Paypal{
    private $_apiContext;
    private $shopping_cart;
    private $_ClientId = 'AWV0bx3cL40RbQ50Ego7i35JWNPuJoWKfZPG10mKZoxEsRARmqU_sd-f49yeXFKo-sOco060HZWSslDd';
    private $_ClientSecret = 'EAnBvT50TIx-OIcleMHS6qvkCX5XyCAD3UcaP5Ps8nOeUEXTp3ogsM5U_GUXNej15ABvmWi5gXIM-cKO';

    /**
     * Paypal constructor.
     * @param $shopping_cart
     */
    public function __construct($shopping_cart)
    {
        $this->_apiContext = PaypalPayment::ApiContext($this->_ClientId, $this->_ClientSecret);

        $config = config("paypal_payment");
        $flatConfig = array_dot($config);
        $this->_apiContext->setConfig($flatConfig);
        $this->shopping_cart = $shopping_cart;
    }

    public function generate(){
        $payment = \PaypalPayment::payment()->setIntent("sale")
                            ->SetPayer($this->payer())
                            ->setTransactions([$this->transaction()])
                            ->setRedirectUrls($this->redirectURLs());

        try{
            $payment->create($this->_apiContext);
        }catch(\Exception $ex){
            dd($ex);
            exit(1);
        }

        return $payment;

    }

    public function  payer(){
        return \PaypalPayment::payer()->setPaymentMethod("paypal");
    }

    public function redirectURLs(){
        $baseURL = url('/');
        return \PaypayPayment::redirectUrls()->setReturnUrl("$baseURL/payments/store")
            ->setCancelUrl("$baseURL/carrito");
    }

    public function transaction(){
        return \PaypalPayment::transaction()
                ->setAmount($this->amount())
                ->setItemList($this->items())
                ->setDescription("Tu compra en MySrShop")
                ->setInvoiceNumber(uniqid());

    }

    public function items(){
        $items = [];

        $products = $this->shopping_cart->products()->get();

        foreach ($products as $product){
            array($items, $product->paypalItem());

        }

        return\PaypalPayment::itemList()->setItems($items);

    }

    public function amount(){
        return \PaypalPayment::amount()->setCurrency("USD")
                            ->setTotal($this->shopping_cart->total());
    }

    public function execute($paymentId,$payerId){
        $payment = \PaypalPayment::getById($paymentId);
        
    }


}