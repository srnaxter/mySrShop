@extends('layouts.app')

@section('content')
    @push('script-head')
        <script src="{{ asset('js/validationForm.js') }}" defer></script>
    @endpush

    <div class="container">
            <div class="form-group row">
        <label for="titulo" class="col-2 col-form-label">Titulo</label>
            <div class="col-10">
        <input class="form-control" type="text" value="Artisanal kale" id="titulo">
                <div class="text-danger" id="errorTitulo"></div>
            </div>
            </div>
        <div class="form-group row">
            <label for="precio" class="col-2 col-form-label">Number</label>
            <div class="col-10">
                <input class="form-control" type="number" value="42" id="precio">
                <div class="text-danger" id="errorPrecio"></div>
            </div>
        </div>
        <div class="form-group">
            <label for="descripcion">Example textarea</label>
            <textarea class="form-control" id="descripcion" rows="3"/>
            <div class="text-danger" id="errorDescripcion"></div>
        </div>
        <button id="enviar" type="submit" class="btn btn-primary">Añadir</button>
    </div>

@endsection