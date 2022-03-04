<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class IndexController extends Controller
{
    public function index()
    {
        $data = ['perro', 'gato', 'pez'];
        $animales = ["animals" => $data];

        return Inertia::render('Index',$animales);
    }
}
