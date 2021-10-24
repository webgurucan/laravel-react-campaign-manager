<!DOCTYPE html>
<html>
    <head>
        <title>Campaigns by Ron Bo</title>
        <link rel="stylesheet" type="text/css" href="{{ url('/css/app.css') }}"/>
        
    </head>
    <body>
        @yield('content')

        <footer>
            <div class="text-center mt-3 mb-3">&copy;2021 Ron Bo</div>
        </footer>

        <!-- Scripts -->
        <script type="text/javascript" src="{{ url('/js/app.js') }}"></script>
        @yield('additional_js')
        
    </body>
</html>