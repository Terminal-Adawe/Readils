<!DOCTYPE html>
<html>
<head>
@yield('title')
<meta name="csrf-token" content="{{csrf_token()}}" />
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="description" content="Readils Project">
<link rel="stylesheet" type="text/css" href="{{ asset('bootstrap-4.3.1-dist/css/bootstrap.min.css') }}">
<link rel="stylesheet" type="text/css" href="{{ asset('css/readils.css') }}">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css') }}">
<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
<script src="https://code.jquery.com/jquery-3.3.1.js"></script>
<link rel="stylesheet" type="text/css" href="{{mix('/css/app.css')}}">
<script src="https://unpkg.com/react@16.6.3/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@16.6.3/umd/react-dom.production.min.js"></script>
<!-- <script src="https://unpkg.com/moment@2.22.1/min/moment.min.js"></script> -->
<script type="text/javascript" src="{{ asset('js/moment.js') }}"></script>
<script src="https://code.jquery.com/jquery-1.12.4.min.js" integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ=" crossorigin="anonymous"></script>
</head>
<body>
<div id="root"></div>
<script type="text/javascript" src="{{mix('/js/app.js')}}"></script>
<script src="{{ asset('bootstrap-4.3.1-dist/js/bootstrap.min.js')}}"></script>
  <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
  <script src="{{ asset('js/readils.js')}}"></script>
  <script>
    AOS.init();
  </script>
</body>
</html>