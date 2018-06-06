@extends('layouts.app')

@push('script-head')
    <script src="{{ asset('js/validationForm.js') }}" defer></script>
@endpush

@section('content')

<div class="container">
    <div class="row">
        <button id="load" type="submit" class="btn btn-success mx-auto">
            {{ ('Cargar datos') }}
        </button>

        <button id="loadOne" type="submit" class="btn btn-info mx-auto">
            {{ ('Cargar uno a uno los datos') }}
        </button>

        <button id="loadView" type="submit" class="btn btn-warning mx-auto">
            {{ ('Cargar vista') }}
        </button>
    </div>
    <br>
    <div id="ProductList"></div>
</div>
@endsection