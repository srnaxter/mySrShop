{!! Form::open(['url' => '/products/'.$product->id, 'method' => 'DELETE', 'class' => 'inline-block' ]) !!}

<input  name="btnModal" data-idProduct="{{$product->id}}" type="button" class="btn btn-default btn-outline-dark"
       data-toggle="modal" value="Eliminar">
{!! Form::close() !!}