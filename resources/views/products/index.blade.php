@extends("layouts.app")

@section("content")

    @push('script-head')
        <script src="{{ asset('js/delete.js') }}" defer></script>
        <script src="{{ asset('js/modal.js') }}" defer></script>
    @endpush

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
                <tr id="product{{$product->id}}">
                    <td>{{ $product->id }}</td>
                    <td>{{ $product->title }}</td>
                    <td>{{ $product->description }}</td>
                    <td>{{ $product->price}}€</td>
                    <td>
                        <a href="{{url('/products', $product->id.'/edit')}}">Editar</a>

                        @include('products.delete')
                    </td>
                </tr>
                @endforeach
                <div class="modal fade" id="myModal" tabindex="-1" role="dialog"
                     aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <!-- Modal content-->
                        <div class="modal-content">
                            <!-- Modal header-->
                            <h2 class="modal-header" style="padding:35px 50px;">
                                Confirmar borrado de tema
                            </h2>
                            <!-- Modal body-->
                            <div class="modal-body text-center">
                                <p>
                                    ¿Está seguro de querer borrar este tema?
                                </p>
                            </div>
                            <!-- Modal footer-->
                            <div class="modal-footer">
                                <button type="submit" class="btn btn-danger btn-default pull-center"
                                        data-dismiss="modal">
                                    <i class="fa fa-remove text-light"/> Cancelar
                                </button>

                            <!--<form action="/topics/delete/" method="post">
                                        <input type="hidden" name="_method" value="delete"/>
                                        {{ csrf_field() }}
                            {{ method_field('DELETE') }}-->
                                <button id="enviar" type="submit"
                                        class="btn btn-success btn-default pull-center"
                                        data-idTopicEnviar="">
                                    <i class="fas fa-chevron-right text-light"/> Aceptar
                                </button>
                                <!-- </form>-->
                            </div>
                        </div>
                    </div>
                </div>
            </tbody>
        </table>
    </div>


@endsection