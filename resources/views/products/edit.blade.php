@extends('layouts.app')

@section('content')

    <div class="container">
        <h1>Editar producto</h1>
            @include('products.form',['product' => $product, 'url' => '/products/'.$product->id, 'method' => 'PATCH'])
    </div>

@endsection