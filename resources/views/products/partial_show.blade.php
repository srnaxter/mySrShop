<div class="container text-center">
        <div class="card product text-left">

            @if(Auth::check() && $product->user_id == Auth::user()->id)

                <div class="absolute action">
                    <a href="{{url('/products', $product->id.'/edit')}}">Editar</a>

                    @include('products.delete')
                </div>

                @endif



            <h1>{{$product->title}}</h1>
            <div class="row">
                <div class="col-sm-6 col-xs-12"><img src="https://picsum.photos/200/200"></div>
                <div class="col-sm-6 col-xs-12">

                    <p>
                        <strong>Descripción</strong>
                    </p>
                    <p>
                        {{$product->description}}
                    </p>

                    <p>
                        @include("in_shopping_carts.form", ["products" => $product])
                    </p>
                </div>
            </div>
        </div>
</div>
