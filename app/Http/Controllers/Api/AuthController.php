<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use League\CommonMark\Extension\Attributes\Node\Attributes;

class AuthController extends Controller
{
    
    public function signup(SignupRequest $request)
    {
        $data = $request->validated();
        /** @var App\Models\User $user */
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password'])
        ]);
        $user->rols()->attach(1);
        //$token = $user->createToken('main')->plainTextToken;
        
        return response(compact('user'));
    }
    
    public function login(LoginRequest $request)
    {
        $credentials = $request->validated();
        if(!Auth::attempt($credentials)) {
            return response([
                'message' => 'Los datos del email o la contraseña son incorrectos'
            ], 422);
        }
        /** @var User $user */
        $user = Auth::user();
        $usuario = User::find($user['id'])->rols;
        $rol = $usuario[0]['id'];
        $token = $user->createToken('main')->plainTextToken;
        return response(compact('user', 'token', 'rol'));
    }

    public function logout(Request $request)
    {
        /** @var User $user */
        $user = $request->user();
        $user->currentAccessToken()->delete();
        return response('', 204);
    }
}
