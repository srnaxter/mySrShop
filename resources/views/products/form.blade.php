@push('script-head')
    <script src="{{ asset('js/validationForm.js') }}" defer></script>
@endpush

{!! Form::open(['url' => $url, 'method' => 'POST']) !!}

        <div class="form group"><h3>Titulo</h3>{{ Form::text('title',$product->title,['class' => 'form-control','placeholder'=>'Titulo de tu producto' ]) }}</div>
        <div class="form group"><h3>Precio</h3>{{ Form::number('price',$product->price,['class' => 'form-control', 'placeholder'=>'Precio de tu producto', 'step'=>'any']) }}</div>
        <div class="form group"><h3>Descripción</h3>{{ Form::textarea('description',$product->description,['class' => 'form-control', 'placeholder'=>'Describe tu producto...']) }}</div>
        <div class="form group text-right">
            <a href="{{url('/products')}}">Regresar al listado de productos</a>
            <input type="submit" value="Guardar" class="btn btn-primary">
        </div>
        @method($method)
        {!! Form::close() !!}