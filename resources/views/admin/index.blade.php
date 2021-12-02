@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-7">
            <div class="card">
                <div class="card-header">Write a Story</div>

                <div class="card-body">
                    <form method="post" action="/admin/addStory">
                        {{ csrf_field() }}
                        <div class="form-group">
                            <label for='title'>Title: </label>
                            <input type='text' class="storyTitleInput form-control" data-storyid="" id='title'>
                        </div>
                        <div class='form-group'>
                            <label for='summary'>Summary: </label>
                            <textarea rows='3' class="storySummary form-control"></textarea>
                        </div>
                        <div class='form-group'>
                            <button id="createStoryButton" type='submit' class="s1001-button" value="createStory">Create Story</button>
                        </div>
                        <div class='form-group'>
                            <button id="clear" class='s1001-button' type='button'>Clear</button>
                        </div>
                    </form>
            </div>
        </div>

        <div class="col-md-5">
            <div class="card">
                <div class="card-header">Stories</div>

                <div class="card-body">
                    <ul class="list-group">
                        @foreach($data['stories'] as $story)
                        <li class="list-group-item self-profile-info-button" data-storyid="{{ $story->story_id }}" data-summary="{{ $story->summary }}">{{ $story->title }}</li>
                        @endforeach
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
