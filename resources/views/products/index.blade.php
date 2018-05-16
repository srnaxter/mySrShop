@extends("layouts.app")

@section("content")

    <div class=" text-center text-black">
        <h1>Productos</h1>
    </div>
    <div class="container">
        <table class="table table-bordered">
            <thead>
            <tr>
                <td>ID</td>
                <td>Titulo</td>
                <td>Descripción</td>
                <td>Precio</td>
                <td>Acciones</td>
            </tr>
            </thead>
            <tbody>
                @foreach($products as $product)
                <tr>
                    <td>{{ $product->id }}</td>
                    <td>{{ $product->title }}</td>
                    <td>{{ $product->description }}</td>
                    <td>{{ $product->price }}</td>
                    <td>
                        <a href="{{url('/products',$product->id.'/edit')}}">Editar</a>
                    </td>
                </tr>
                @endforeach
            </tbody>
        </table>
    </div>


@endsection