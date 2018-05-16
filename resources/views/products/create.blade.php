@extends('layouts.app')

@section('content')

    <div class="container">
        <h1>Nuevo producto</h1>
            @include('products.form', ['products' => $product, 'url' => '/products', 'method' => 'POST'])
    </div>

@endsection